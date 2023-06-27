import isAfter from 'date-fns/isAfter'
import parse from 'date-fns/parse'
import fs from 'fs'
import request from 'request'
import { promisify } from 'util'
import yaml from 'write-yaml'

interface Route {
    uri: string
    title: string
    subTitle: string
    rank: number
}

const groupBy = (xs: any[], key: string) => {
    return xs.reduce(function (rv: any, x: any) {
        (rv[x[key]] = rv[x[key]] || []).push(x)
        return rv
    }, {})
}

const getFiles = (directory: string) => {
    return promisify(fs.readdir)(directory).then((filenames) => {
        filenames = filenames.filter((fn: string) => fn.endsWith('.md'))
        return Promise.all(filenames.map((filename: string) => filename))
    })
}

const readFile = (file: string) => {
    return promisify(fs.readFile)(file, { encoding: 'utf8' })
}

const writeFile = (file: string, data: any) => {
    return promisify(fs.writeFile)(file, data, { encoding: 'utf8' })
}

const extractToken = (data: string, re: RegExp, index: number) => {
    let m
    if ((m = re.exec(data)) != null) {
        return m[index]
    }
    return ''
}

const getImages = (raw: string) => {
    let images: string[] = []
    const regex = /\((.+\.png|jpg|jpeg|gif|svg)\)/gmi
    let m
    while ((m = regex.exec(raw)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++
        }
        images.push(m[1])
    }
    return images
}

const getImageFileName = (url: string) => {
    const regex = /[\w.+-]+\.png|jpg|jpeg|gif|svg/gmi
    let m
    while ((m = regex.exec(url)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++
        }
        return m[0]
    }
}

const download = (uri: string, filename: string) => {
    return new Promise<void>((resolve, reject) => {
        console.log('GET', uri, '=>', filename)
        request.head(uri, (err, res, body) => {
            let pipeAction = request(uri).pipe(fs.createWriteStream(filename))
            pipeAction.on('close', () => {
                resolve()
            })
        })
    })
}

let cheatSheet: any[] = []

const saveCheatSheet = () => {
    let targetPath = '../utils/cheatsheet.yaml'
    yaml.sync(targetPath, cheatSheet)
}

const run = async (subject: string, title: string) => {
    try {
        let routes: Route[] = []
        let sourceDir = `../content/${subject}/`
        let targetPath = `../src/data/sidebars/${subject}.yaml`
        let isReleases = subject == 'releases'
        let files = await getFiles(sourceDir)
        let links: any[] = []

        for (let file of files) {
            if (file.indexOf('.archived') > -1) {
                console.log('Skipping', file)
                continue
            }

            let inPath = sourceDir + file
            let raw = await readFile(inPath)

            let path = file
            let title = extractToken(raw, /title: "(.+)"/i, 1)
            let subTitle = extractToken(raw, /meta_title: "(.+)"/i, 1)
            let rank = parseInt(extractToken(raw, /rank: (\d+)/i, 1) || '0')

            routes.push({
                uri: `/${subject}/` + file.replace(/\.md/g, '').replace(/( ){2,}/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase() + '/',
                title,
                subTitle,
                rank,
            })

            let intercomRef = raw.indexOf('intercom')
            if (intercomRef > -1) {
                console.log(raw.substr(intercomRef - 20, 130))
            }

            let images = getImages(raw)
            let imagesReWritten = false

            for (let url of images) {
                if (url.indexOf('intercom') > -1) {
                    name = getImageFileName(url)
                        .toLowerCase()
                        .replace(/\+/g, '-')
                        .replace('screen-shot-', '')
                        .replace('-at', '')
                        .replace(/\./g, '-')
                        .replace(/-(jpg|png|svg|jpeg|gif)$/gi, '.$1')

                    let outPath = `../static/images/${subject}/${name}`
                    let outUri = `/images/${subject}/${name}`
                    console.log(outUri)

                    await download(url, outPath)

                    raw = raw.replace(url, outUri)
                    imagesReWritten = true
                }
            }

            if (imagesReWritten) {
                await writeFile(inPath, raw)
            }
        }

        if (isReleases) {
            routes.forEach((x) => {
                x.title = x.subTitle
            })
            routes.sort((a, b) => {
                return isAfter(parse(a.subTitle), parse(b.subTitle)) ? -1 : 1
            })
        } else {
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
            routes: routes.map((x) => {
                return {
                    title: x.title,
                    uri: `https://docs.vwa.la${x.uri}`,
                }
            }),
        })

        let yamlItems: string[] = []

        for (let r of routes) {
            yamlItems.push(`- title: ${r.title}`)
            yamlItems.push(`- link: ${r.uri}`)
        }

        let json = [
            {
                groups: [
                    {
                        group: title,
                        items: routes.map((r) => {
                            return {
                                title: r.title,
                                link: r.uri,
                            }
                        }),
                    },
                ],
            },
        ]

        yaml.sync(targetPath, json)
    } catch (err) {
        console.error(err)
    } finally {
    }
}

Promise.all([
    run('merchant', 'Help'),
    run('influencer', 'Help'),
    run('releases', 'Releases'),
    run('user', 'User account help'),
]).then(() => {
    saveCheatSheet()
})
