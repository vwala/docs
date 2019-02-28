const fs = require('fs');
const { promisify } = require('util');
const yaml = require('write-yaml');
const isAfter = require("date-fns/is_after")
const parse = require("date-fns/parse")
const request = require('request');

let groupBy = (xs, key) => {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}


let getFiles = (directory) => {

    return promisify(fs.readdir)(directory).then((filenames) => {

        filenames = filenames.filter(fn => fn.endsWith('.md'));
        return Promise.all(filenames.map((filename) => {
            return filename
        }));
    })
}

let readFile = (file) => {
    return promisify(fs.readFile)(file, { encoding: 'utf8' })
}

let writeFile = (file, data) => {
    return promisify(fs.writeFile)(file, data, { encoding: 'utf8' })
}

let extractToken = (data, re, index) => {

    let m;

    if ((m = re.exec(data)) != null) {
        return m[index]

        // // The result can be accessed through the `m`-variable.
        // m.forEach((match, groupIndex) => {
        //     console.log(`Found match, group ${groupIndex}: ${match}`);
        // });
    }

    return ""
}

let getImages = (raw) => {

    let images = []
    const regex = /\((.+\.png|jpg|jpeg|gif|svg)\)/gmi;
    let m;

    while ((m = regex.exec(raw)) !== null) {

        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        images.push(m[1])
    }

    return images
}

let getImageFileName = (url) => {

    const regex = /[\w.+-]+\.png|jpg|jpeg|gif|svg/gmi;
    let m;

    while ((m = regex.exec(url)) !== null) {

        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        return m[0]
    }
}

let download = (uri, filename, callback) => {

    return new Promise((resolve, reject) => {

        console.log("GET", uri, "=>", filename)

        request.head(uri, (err, res, body) => {

            // console.log('content-type:', res.headers['content-type']);
            // console.log('content-length:', res.headers['content-length']);
            let pipeAction = request(uri).pipe(fs.createWriteStream(filename))

            pipeAction.on("close", () => { //waits for data to be consumed
                // pipe has ended here, so we resolve the promise
                resolve()
            })
        })
    })
}

let cheatSheet = []

let saveCheatSheet = () => {
    let targetPath = `../utils/cheatsheet.yaml`
    yaml.sync(targetPath, cheatSheet)
}



let run = async (subject, title) => {

    try {

        let routes = []

        let sourceDir = `../content/${subject}/`
        let targetPath = `../src/data/sidebars/${subject}.yaml`
        let isReleases = subject == "releases"

        let files = await getFiles(sourceDir)
        let links = []

        for (let file of files) {

            // console.log(file)

            if (file.indexOf(".archived") > -1) {
                console.log("Skipping", file)
                continue
            }

            let inPath = sourceDir + file
            let raw = await readFile(inPath)

            let path = file
            let title = extractToken(raw, /title: "(.+)"/i, 1)
            let subTitle = extractToken(raw, /meta_title: "(.+)"/i, 1)
            let rank = parseInt(extractToken(raw, /rank: (\d+)/i, 1) || 0)

            routes.push({
                uri: `/${subject}/` + file.replace(/\.md/g, "").replace(/( ){2,}/g, "-").replace(/[^a-zA-Z0-9-]/g, "").toLowerCase() + "/",
                title,
                subTitle,
                rank
            })

            // Warnings
            let intercomRef = raw.indexOf("intercom")
            if (intercomRef > -1) {
                console.log(raw.substr(intercomRef - 20, 130))
            }

            // Re-write images
            let images = getImages(raw)
            let imagesReWritten = false

            for (let url of images) {

                if (url.indexOf("intercom") > -1) {

                    name = getImageFileName(url)
                        .toLowerCase()
                        .replace(/\+/g, "-")
                        .replace("screen-shot-", "")
                        .replace("-at", "")
                        .replace(/\./g, "-")
                        .replace(/-(jpg|png|svg|jpeg|gif)$/gi, ".$1")

                    let outPath = `../static/images/${subject}/${name}`
                    let outUri = `/images/${subject}/${name}`
                    console.log(outUri)

                    await download(url, outPath)

                    // Rewrite images
                    raw = raw.replace(url, outUri)
                    imagesReWritten = true
                }
            }

            if (imagesReWritten) {
                await writeFile(inPath, raw)
            }


            // Rename release files 
            // if (isReleases) {
            //     let targetPath = `../content/${subject}/${subTitle}.md`
            //     await writeFile(targetPath, raw)
            // }
        }

        if (isReleases) {

            // Use time as page title
            routes.forEach(x => {
                x.title = x.subTitle
            })

            // Sort by time
            routes.sort((a, b) => {
                return isAfter(parse(a.subTitle), parse(b.subTitle)) ? -1 : 1
            })

        } else {

            // Sort
            routes.sort((a, b) => {
                if (a.rank > b.rank) {
                    return 1
                } else if (a.rank < b.rank) {
                    return -1
                }
                return 0
            })
        }

        cheatSheet.push({
            subject,
            routes: routes.map(x => {
                return {
                    title: x.title,
                    uri: `https://docs.vwa.la${x.uri}`
                }
            })
        })

        // Transform routes into YAML string 
        let yamlItems = []

        for (let r of routes) {
            yamlItems.push(`- title: ${r.title}`)
            yamlItems.push(`- link: ${r.uri}`)
        }

        let json = [{
            groups: [{
                group: title,
                items: routes.map(r => {
                    return {
                        title: r.title,
                        link: r.uri
                    }
                })
            }]
        }]

        yaml.sync(targetPath, json);

    } catch (err) {
        console.error(err)
    } finally {

    }
}

Promise.all([
    run("merchant", "Help"),
    run("influencer", "Help"),
    run("releases", "Releases"),
    run("user", "User account help")
]).then(() => {
    saveCheatSheet()
})

// .then(x => {
//     console.log("done")
// })

// .then(x => {
//     console.log("done")
// })

// .then(x => {
//     console.log("done")
// })
