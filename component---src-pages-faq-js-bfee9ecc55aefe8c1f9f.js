(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(4),r=a.n(s),l=a(161),o=(a(176),a(164)),m=function(e){var t=e.post,a=e.section,i=e.title,s=e.children,r=e.to,m=e.className,g=t?"/"+a+"/"+t.slug+"/":r;i=t?t.title:i;var u=t?t.excerpt.length>200?t.excerpt.substring(0,200)+"...":t.excerpt:s;return n.a.createElement(o.Link,{to:g,className:m},n.a.createElement("h4",{to:g,className:l.a.excerpt+" link darkgrey fw5"},i," »"),u&&n.a.createElement("p",{className:l.a.small+" ma0 f8 lh-copy middarkgrey mb6"},u))};m.defaultProps={className:"f5 db tdn mb6 faq-question bb b--whitegrey",section:"faq"},m.propTypes={post:r.a.shape({title:r.a.string,slug:r.a.string,excerpt:r.a.string}),section:r.a.string.isRequired,title:r.a.string,children:r.a.node,to:r.a.string,className:r.a.string};var g=m,u=(a(32),a(163),a(182),a(903)),c=a(309),h=function(e){var t=e.data,a=e.location,i=Object(c.a)(t.allGhostPost.edges,"faq");return i.unshift({name:"All",slug:"all",link:"/faq/"}),n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:l.a.h5+" midgrey"},"FAQ topics"),n.a.createElement("div",{className:"mt4"},i.map(function(e,t){var i=a.pathname===e.link?"bg-faq-color white fw5":"bg-whitegrey middarkgrey hover-bg-lightgrey-l2";return n.a.createElement(o.Link,{to:e.link,className:i+" dib pa2 pl3 pr3 br3 mb3 mr3 f8 link",key:t,"data-cy":e.slug+"-filter"},e.name)})))};h.propTypes={location:r.a.object.isRequired,data:r.a.shape({allGhostPost:r.a.shape({edges:r.a.arrayOf(r.a.shape({post:r.a.shape({tag:r.a.arrayOf(r.a.shape({name:r.a.string,slug:r.a.string}))})}).isRequired).isRequired}).isRequired}).isRequired};var p=function(e){return n.a.createElement(o.StaticQuery,{query:"4095130143",render:function(t){return n.a.createElement(h,Object.assign({data:t},e))},data:u})},d=a(187),b=a(167);a.d(t,"pageQuery",function(){return y});var f=function(e){var t=e.data,a=e.location,i=Object(b.b)("faq");return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{data:t,location:a,type:"website",title:"FAQ - Ghost",description:"Answers to our most popular questions: billing, hosting, troubleshooting and more.",image:i}),n.a.createElement(d.a,{headerDividerStyle:"shadow"},n.a.createElement("div",{className:"bg-faq bb b--whitegrey"},n.a.createElement("div",{className:l.a.page.xl+" pt-vw7 pt-vw1-ns pb-vw1"},n.a.createElement("h1",{className:l.a.h4+" white"},"Frequently Asked Questions"))),n.a.createElement("div",{className:l.a.page.xl+" grid-12"},n.a.createElement("div",{className:"bg-white shadow-2 br4 mt5 mt10-ns pa5 pa15-ns pt10-ns pb12-ns col-12 col-8-ns"},n.a.createElement(g,{to:"/faq/using-custom-domains/",title:"Using custom domains"},"If you would like to make your site memorable and easy to find with a branded custom domain, then you can map any domain you own directly to your Ghost(Pro) publication."),n.a.createElement(g,{to:"/faq/forgot-password/",title:"How do I reset my password?"},"In Ghost, each publication user has their own account details and password which can be reset or changed. Read more if you forgot your password or need to reset it!"),n.a.createElement(g,{to:"/faq/using-the-editor/",title:"Using the editor"},"Ghost has a powerful visual editor with familiar formatting options, with full support for dynamic content, allowing you to add images, galleries, videos, embeds and code!"),n.a.createElement(g,{to:"/faq/publishing-options/",title:"Publishing options"},"The post settings menu within the editor allows you to fully optimise your content. This is where you can add tags and authors, feature a post, or turn a post into a page."),n.a.createElement(g,{to:"/faq/managing-your-team/",title:"Managing your team"},"Ghost has a number of different user roles and permissions for your team for effective collaboration and publication management. Read more more about inviting your team to Ghost!"),n.a.createElement(g,{to:"/faq/the-importer/",title:"Imports & exports"},"Publishing with Ghost gives you full ownership and access to your content and data, with sensible JSON imports and exports available at any time. Find out more about imports and migrations!"),n.a.createElement(g,{to:"/faq/design-settings/",title:"Design settings"},"Adding some design touches to your Ghost publication can be done from the Admin page when logged in to your publication. From here you can add navigation and upload a custom theme."),n.a.createElement(g,{to:"/faq/analytics/",title:"How can I track how many views my site is getting?"},"Ghost integrates seamlessly with all 3rd party analytics tools out there, and it takes just a few minutes to set up using the code injection feature in your publication settings.")),n.a.createElement("div",{className:"col-12 col-4-ns pa5 pa15-ns pt10-ns mt11-ns "},n.a.createElement(p,{location:a})))))};f.propTypes={data:r.a.shape({site:r.a.shape({siteMetadata:r.a.shape({siteUrl:r.a.string.isRequired,title:r.a.string.isRequired,description:r.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:r.a.shape({pathname:r.a.string.isRequired}).isRequired};t.default=f;var y="4184764753"},167:function(e,t,a){"use strict";var i=a(0),n=a.n(i),s=a(4),r=a.n(s),l=a(166),o=a.n(l),m=(a(163),a(175)),g=a(160),u=a.n(g),c=a(159),h=a.n(c),p=function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+u.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://vwa.la/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=u.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+u.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}};p.defaultProps={fetchAuthorData:!1},p.PropTypes={primaryAuthor:r.a.shape({name:r.a.string.isRequired,profile_image:r.a.string,website:r.a.string,twitter:r.a.string,facebook:r.a.string}).isRequired,fetchAuthorData:r.a.bool.isRequired};var d=p,b=function(e){var t=e.image;return n.a.createElement(h.a,null,n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:image",content:t}),n.a.createElement("meta",{property:"og:image",content:t}),n.a.createElement("meta",{property:"og:image:width",content:"1000"}),n.a.createElement("meta",{property:"og:image:height",content:"523"}))};b.propTypes={image:r.a.string.isRequired};var f=b,y=function(e){var t=e.data,a=e.canonical,i=e.fetchAuthorData,s=e.title,r=e.overwriteDefaultImage,l=e.image,o=t.ghostPost,g=t.site.siteMetadata,c=d(o.primary_author,i),p=u.a.map(Object(m.tags)(o,{visibility:"public",fn:function(e){return e}}),"name"),b=p[0]||{name:"General",slug:"general"},y=r&&o.feature_image?o.feature_image:l;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,null,n.a.createElement("title",null,o.meta_title||s||o.title),n.a.createElement("meta",{name:"description",content:o.meta_description||o.excerpt}),n.a.createElement("link",{rel:"canonical",href:a}),n.a.createElement("meta",{property:"og:site_name",content:g.title}),n.a.createElement("meta",{name:"og:type",content:"article"}),n.a.createElement("meta",{name:"og:title",content:o.og_title||s||o.meta_title||o.title}),n.a.createElement("meta",{name:"og:description",content:o.og_description||o.excerpt||o.meta_description}),n.a.createElement("meta",{property:"og:url",content:a}),n.a.createElement("meta",{property:"article:published_time",content:o.published_at}),n.a.createElement("meta",{property:"article:modified_time",content:o.updated_at}),p.map(function(e,t){return n.a.createElement("meta",{property:"article:tag",content:e,key:t})}),n.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/vwalamarketing/"}),n.a.createElement("meta",{name:"twitter:title",content:o.twitter_title||s||o.meta_title||o.title}),n.a.createElement("meta",{name:"twitter:description",content:o.twitter_description||o.excerpt||o.meta_description}),n.a.createElement("meta",{name:"twitter:url",content:a}),n.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),n.a.createElement("meta",{name:"twitter:data1",content:c.name}),n.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),n.a.createElement("meta",{name:"twitter:data2",content:b}),n.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),n.a.createElement("meta",{name:"twitter:creator",content:"@vwalamarketing"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+c.name+'",\n                            '+(c.image?c.sameAsArray?'"image": "'+c.image+'",':'"image": "'+c.image+'"':"")+"\n                            "+(c.sameAsArray?'"sameAs": '+c.sameAsArray:"")+"\n                        },\n                        "+(p.length?'"keywords": "'+u.a.join(p,", ")+'",':"")+'\n                        "headline": "'+(o.meta_title||s||o.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o.published_at+'",\n                        "dateModified": "'+o.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+y+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(o.meta_description||o.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+g.siteUrl+'"\n                        }\n                    }\n                ')),n.a.createElement(f,{image:y}))};y.defaultProps={fetchAuthorData:!1},y.propTypes={data:r.a.shape({ghostPost:r.a.shape({title:r.a.string.isRequired,published_at:r.a.string.isRequired,updated_at:r.a.string.isRequired,excerpt:r.a.string.isRequired,meta_title:r.a.string,meta_description:r.a.string,primary_author:r.a.object.isRequired,feature_image:r.a.string,tags:r.a.arrayOf(r.a.shape({name:r.a.string,slug:r.a.string,visibility:r.a.string})),primaryTag:r.a.shape({name:r.a.string}),og_title:r.a.string,og_description:r.a.string,twitter_title:r.a.string,twitter_description:r.a.string}).isRequired,site:r.a.shape({siteMetadata:r.a.shape({siteUrl:r.a.string.isRequired,title:r.a.string.isRequired,description:r.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:r.a.string.isRequired,image:r.a.string.isRequired,fetchAuthorData:r.a.bool,title:r.a.string,overwriteDefaultImage:r.a.bool};var q=y,v=function(e){var t=e.data,a=e.canonical,i=t.markdownRemark,s=i.frontmatter,r=t.site.siteMetadata,l=s.date?new Date(s.date).toISOString():new Date("2018-10-15").toISOString(),o=s.keywords&&s.keywords.length?s.keywords[0]:null,m=A();return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,null,n.a.createElement("title",null,s.meta_title||s.title),n.a.createElement("meta",{name:"description",content:s.meta_description||i.excerpt}),n.a.createElement("link",{rel:"canonical",href:a}),n.a.createElement("meta",{property:"og:site_name",content:r.title}),n.a.createElement("meta",{name:"og:type",content:"article"}),n.a.createElement("meta",{name:"og:title",content:s.meta_title||s.title}),n.a.createElement("meta",{name:"og:description",content:s.meta_description||i.excerpt}),n.a.createElement("meta",{property:"og:url",content:a}),n.a.createElement("meta",{property:"article:published_time",content:l}),s.keywords&&s.keywords.length?s.keywords.map(function(e,t){return n.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,n.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),n.a.createElement("meta",{name:"twitter:title",content:s.meta_title||s.title}),n.a.createElement("meta",{name:"twitter:description",content:s.meta_description||i.excerpt}),n.a.createElement("meta",{name:"twitter:url",content:a}),n.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),n.a.createElement("meta",{name:"twitter:data1",content:i.timeToRead+" min read"}),o?n.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,o?n.a.createElement("meta",{name:"twitter:data2",content:o}):null,n.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),n.a.createElement("meta",{name:"twitter:creator",content:"@vwalamarketing"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://vwa.la/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/vwalamarketing/"\n                            ]\n                        },\n                        '+(s.keywords&&s.keywords.length?'"keywords": "'+u.a.join(s.keywords,", ")+'",':"")+'\n                        "headline": "'+(s.meta_title||s.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+m+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(s.meta_description||i.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+r.siteUrl+'"\n                        }\n                    }\n                ')),n.a.createElement(f,{image:m}))};v.propTypes={data:r.a.shape({markdownRemark:r.a.shape({frontmatter:r.a.shape({title:r.a.string.isRequired,keywords:r.a.arrayOf(r.a.string),meta_title:r.a.string,meta_description:r.a.string,date:r.a.string}).isRequired,excerpt:r.a.string.isRequired,timeToRead:r.a.number}).isRequired,site:r.a.shape({siteMetadata:r.a.shape({siteUrl:r.a.string.isRequired,title:r.a.string.isRequired,description:r.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:r.a.string.isRequired};var w=v,E=function(e){var t=e.data,a=e.canonical,i=e.title,s=e.description,r=e.image,l=e.type;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,null,n.a.createElement("title",null,i),n.a.createElement("meta",{name:"description",content:s}),n.a.createElement("link",{rel:"canonical",href:a}),n.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:title",content:i}),n.a.createElement("meta",{property:"og:description",content:s}),n.a.createElement("meta",{property:"og:url",content:a}),n.a.createElement("meta",{name:"twitter:title",content:i}),n.a.createElement("meta",{name:"twitter:description",content:s}),n.a.createElement("meta",{name:"twitter:url",content:a}),n.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(l&&"series"===l?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+r+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+s+'"\n                    }\n                ')),n.a.createElement(f,{image:r}))};E.propTypes={data:r.a.shape({site:r.a.shape({siteMetadata:r.a.shape({siteUrl:r.a.string.isRequired,title:r.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:r.a.string.isRequired,title:r.a.string.isRequired,description:r.a.string.isRequired,image:r.a.string.isRequired,type:r.a.oneOf(["website","series"]).isRequired};var R=E,k=function(e){var t=e.data,a=e.type,i=e.title,s=e.description,r=e.image,l=e.fetchAuthorData,m=e.overwriteDefaultImage,g=e.location,u=t||{},c=u.ghostPost,h=u.markdownRemark,p=t.site.siteMetadata,d=o.a.resolve(p.siteUrl,g.pathname,"/");if("article"===a){if(c)return n.a.createElement(q,{data:t,canonical:d,fetchAuthorData:l,title:i,image:r,overwriteDefaultImage:m});if(h)return n.a.createElement(w,{data:t,canonical:d})}else if("website"===a||"series"===a)return n.a.createElement(R,{data:t,canonical:d,title:i,description:s,image:r,type:a});return null};k.propTypes={data:r.a.shape({site:r.a.shape({siteMetadata:r.a.shape({siteUrl:r.a.string.isRequired,title:r.a.string.isRequired,description:r.a.string.isRequired}).isRequired}).isRequired,ghostPost:r.a.object,markdownRemark:r.a.object}).isRequired,location:r.a.shape({pathname:r.a.string.isRequired}).isRequired,type:r.a.oneOf(["website","series","article"]).isRequired,title:r.a.string,description:r.a.string,image:r.a.string,fetchAuthorData:r.a.bool,overwriteDefaultImage:r.a.bool};var G=k,_={default:o.a.resolve("https://docs.vwa.la","/images/meta/hero.png")},P=function(e){return _[e=e||"default"]};P.proptypes={section:r.a.string.isRequired};var A=P;a.d(t,"a",function(){return G}),a.d(t,"b",function(){return A})},309:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(53);var i=a(4),n=a.n(i),s=a(160),r=a.n(s),l=a(175),o=function(e,t){var a=[];return t=/^(?:\/?)([a-zA-Z\d-]*)(?:\/?)/i.exec(t)[1],r.a.forEach(e,function(e){var t=e.node,i=Object(l.tags)(t,{visibility:"public",fn:function(e){return e}});a.push(i)}),a=r.a.flattenDeep(a),r.a.map(a,function(e){e.link=t?"/"+t+"/"+e.slug+"/":"/"+e.slug+"/"}),r.a.sortedUniqBy(r.a.sortBy(r.a.flattenDeep(a),"name"),"name")};o.proptypes={posts:n.a.arrayOf(n.a.shape({node:n.a.shape({tags:n.a.arrayOf(n.a.shape({name:n.a.string.isRequired,slug:n.a.string.isRequired})).isRequired}).isRequired})).isRequired,linkPrefix:n.a.string}},903:function(e){e.exports={data:{allGhostPost:{edges:[{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Ghost(Pro)",slug:"ghost-pro",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Self-hosting",slug:"self-hosting",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Self-hosting",slug:"self-hosting",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Using Ghost",slug:"using-ghost",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Self-hosting",slug:"self-hosting",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Errors",slug:"errors",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"General",slug:"general",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}},{node:{tags:[{name:"Self-hosting",slug:"self-hosting",visibility:"public"},{name:"#faq",slug:"hash-faq",visibility:"internal"}]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-faq-js-bfee9ecc55aefe8c1f9f.js.map