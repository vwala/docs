(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{160:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),i=a(0),s=a.n(i),l=a(175),o=a(167),m=a(165),c=a(173),d=a(324),p=(a(182),a(168)),u=function(e){var t=e.to,a=e.title,n=e.color,r=e.icon,i=e.children;return s.a.createElement(p.Link,{to:t,className:"col-12 col-4-ns pa5 pa8-ns pa10-l pt8-l flex flex-column-ns items-start tdn content-stretch home-main-box-shadow db br4 bg-white"},s.a.createElement(c.b,{name:r,className:"w10 h-auto w12-ns stroke-w--1-5 mr3 mb2 stroke-"+n}),s.a.createElement("div",{className:"flex flex-column justify-between flex-auto"},s.a.createElement("div",null,s.a.createElement("h2",{className:m.a.h4+" mt0 mt2-ns darkgrey flex-shrink-1"},a),s.a.createElement("p",{className:m.a.small+" midgrey"},i)),s.a.createElement("span",{className:n+" dib mt2 link fw5 f7 f5-ns flex items-center"},"Learn more",s.a.createElement(c.b,{name:"arrow-right",className:"w3 h3 ml2 fill-"+n}))))};u.propTypes={to:r.a.string.isRequired,title:r.a.string.isRequired,color:r.a.string.isRequired,icon:r.a.string.isRequired,children:r.a.node.isRequired};var g=u,h=function(){return s.a.createElement("div",{className:"gh-bg-home bb b--whitegrey"},s.a.createElement("header",{className:"top-0 left-0 right-0 z-9999"},s.a.createElement(c.d,{theme:"light"})),s.a.createElement("div",{className:m.a.page.xl+" pb5 pt10 pt15-ns pt20-l pb10-ns pb15-l flex flex-column items-center bt bn-ns b--white-10"},s.a.createElement("h1",{className:"ma0 pa0 f2 f1-ns f-headline-l white header-heading-shadow"},"Need help?"),s.a.createElement(d.a,{isHome:!0}),s.a.createElement("section",{className:"grid-12 gutter-row-20 gutter-36-ns mt10 mt20-ns mt25-l miw-100 miw-auto-ns home-main-box-margin-ns z-999"},s.a.createElement(g,{to:"/merchant/getting-started",title:"Merchant help",icon:"rocket",color:"purple"},"Everything a merchant needs to know to be successful"),s.a.createElement(g,{to:"/influencer/getting-started",title:"Influencer help",icon:"rocket",color:"blue"},"Everything a referrer/influencer/affiliate needs to know"),s.a.createElement(g,{to:"/releases/2019-01-31",title:"Product releases",icon:"blocks",color:"midgrey"},"Keeping you up to date with our latest features / fixes"))))},w=function(e){var t=e.to,a=e.icon,n=e.title,r=e.children;return s.a.createElement(p.Link,{to:t,className:"flex items-start pa4 pa7-ns tdn bb b--whitegrey justify-between mih-10 flex-auto api-box"},s.a.createElement("span",{className:"dib mr3 mt3 miw10 tc"},s.a.createElement(c.b,{name:a,className:"stroke-middarkgrey-l2"})),s.a.createElement("div",{className:"flex-auto"},s.a.createElement("h4",{className:m.a.h5+" darkgrey mt2 mt0-l"},n),s.a.createElement("p",{className:m.a.small+" midgrey"},r)))};w.propTypes={to:r.a.string.isRequired,title:r.a.string.isRequired,icon:r.a.string.isRequired,children:r.a.node.isRequired};var E=function(e){var t=e.to,a=e.title,n=e.children;return s.a.createElement(p.Link,{to:t,className:"midgrey home-faq-question link dib pt1 pb5"},s.a.createElement("h4",{className:m.a.h5+" blue dib"},a," »"),s.a.createElement("p",{className:m.a.small+" mt0"},n))};E.propTypes={to:r.a.string.isRequired,title:r.a.string.isRequired,children:r.a.node.isRequired};a.d(t,"pageQuery",function(){return f});var y=function(e){var t=e.data,a=e.location,n=Object(o.b)();return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{data:t,location:a,type:"website",title:"vwa.la help",description:"Everything you need to know about the vwa.la influencer marketing platform.",image:n}),s.a.createElement(l.a,{headerDividerStyle:"shadow",bodyClass:"bg-white",mainClass:"bg-whitegrey-l2 pb-vw6 pb-vw3-ns",header:s.a.createElement(h,null)},s.a.createElement("div",{className:"pt-vw3 home-main-box-padding-ns"})))};y.propTypes={data:r.a.shape({site:r.a.shape({siteMetadata:r.a.shape({siteUrl:r.a.string.isRequired,title:r.a.string.isRequired,description:r.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:r.a.shape({pathname:r.a.string.isRequired}).isRequired};t.default=y;var f="1531574144"},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(169),o=a.n(l),m=(a(166),a(171)),c=a(164),d=a.n(c),p=a(163),u=a.n(p),g=function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+d.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://vwa.la/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=d.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+d.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}};g.defaultProps={fetchAuthorData:!1},g.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=g,w=function(e){var t=e.image;return r.a.createElement(u.a,null,r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:image",content:t}),r.a.createElement("meta",{property:"og:image",content:t}),r.a.createElement("meta",{property:"og:image:width",content:"1000"}),r.a.createElement("meta",{property:"og:image:height",content:"523"}))};w.propTypes={image:s.a.string.isRequired};var E=w,y=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,i=e.title,s=e.overwriteDefaultImage,l=e.image,o=t.ghostPost,c=t.site.siteMetadata,p=h(o.primary_author,n),g=d.a.map(Object(m.tags)(o,{visibility:"public",fn:function(e){return e}}),"name"),w=g[0]||{name:"General",slug:"general"},y=s&&o.feature_image?o.feature_image:l;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("title",null,o.meta_title||i||o.title),r.a.createElement("meta",{name:"description",content:o.meta_description||o.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:c.title}),r.a.createElement("meta",{name:"og:type",content:"article"}),r.a.createElement("meta",{name:"og:title",content:o.og_title||i||o.meta_title||o.title}),r.a.createElement("meta",{name:"og:description",content:o.og_description||o.excerpt||o.meta_description}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:o.published_at}),r.a.createElement("meta",{property:"article:modified_time",content:o.updated_at}),g.map(function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})}),r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:o.twitter_title||i||o.meta_title||o.title}),r.a.createElement("meta",{name:"twitter:description",content:o.twitter_description||o.excerpt||o.meta_description}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),r.a.createElement("meta",{name:"twitter:data1",content:p.name}),r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),r.a.createElement("meta",{name:"twitter:data2",content:w}),r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(g.length?'"keywords": "'+d.a.join(g,", ")+'",':"")+'\n                        "headline": "'+(o.meta_title||i||o.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o.published_at+'",\n                        "dateModified": "'+o.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+y+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(o.meta_description||o.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+c.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(E,{image:y}))};y.defaultProps={fetchAuthorData:!1},y.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var f=y,b=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,i=n.frontmatter,s=t.site.siteMetadata,l=i.date?new Date(i.date).toISOString():new Date("2018-10-15").toISOString(),o=i.keywords&&i.keywords.length?i.keywords[0]:null,m=A();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("title",null,i.meta_title||i.title),r.a.createElement("meta",{name:"description",content:i.meta_description||n.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:s.title}),r.a.createElement("meta",{name:"og:type",content:"article"}),r.a.createElement("meta",{name:"og:title",content:i.meta_title||i.title}),r.a.createElement("meta",{name:"og:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:l}),i.keywords&&i.keywords.length?i.keywords.map(function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:i.meta_title||i.title}),r.a.createElement("meta",{name:"twitter:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),r.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),o?r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,o?r.a.createElement("meta",{name:"twitter:data2",content:o}):null,r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://vwa.la/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(i.keywords&&i.keywords.length?'"keywords": "'+d.a.join(i.keywords,", ")+'",':"")+'\n                        "headline": "'+(i.meta_title||i.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+m+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(i.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(E,{image:m}))};b.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var R=b,q=function(e){var t=e.data,a=e.canonical,n=e.title,i=e.description,s=e.image,l=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:description",content:i}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{name:"twitter:title",content:n}),r.a.createElement("meta",{name:"twitter:description",content:i}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(l&&"series"===l?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+i+'"\n                    }\n                ')),r.a.createElement(E,{image:s}))};q.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var k=q,v=function(e){var t=e.data,a=e.type,n=e.title,i=e.description,s=e.image,l=e.fetchAuthorData,m=e.overwriteDefaultImage,c=e.location,d=t||{},p=d.ghostPost,u=d.markdownRemark,g=t.site.siteMetadata,h=o.a.resolve(g.siteUrl,c.pathname,"/");if("article"===a){if(p)return r.a.createElement(f,{data:t,canonical:h,fetchAuthorData:l,title:n,image:s,overwriteDefaultImage:m});if(u)return r.a.createElement(R,{data:t,canonical:h})}else if("website"===a||"series"===a)return r.a.createElement(k,{data:t,canonical:h,title:n,description:i,image:s,type:a});return null};v.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var _=v,x={default:o.a.resolve("http://ghost.local:8000","/images/meta/hero.png")},N=function(e){return x[e=e||"default"]};N.proptypes={section:s.a.string.isRequired};var A=N;a.d(t,"a",function(){return _}),a.d(t,"b",function(){return A})}}]);
//# sourceMappingURL=component---src-pages-index-js-5e5762ff22f5085a5795.js.map