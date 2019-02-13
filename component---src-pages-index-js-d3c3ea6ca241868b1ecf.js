(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n),r=a(0),s=a.n(r),l=a(187),m=a(167),o=a(161),c=a(170),d=a(310),p=(a(176),a(164)),u=function(e){var t=e.to,a=e.title,n=e.color,i=e.icon,r=e.children;return s.a.createElement(p.Link,{to:t,className:"col-12 col-4-ns pa5 pa8-ns pa10-l pt8-l flex flex-column-ns items-start tdn content-stretch home-main-box-shadow db br4 bg-white"},s.a.createElement(c.b,{name:i,className:"w10 h-auto w12-ns stroke-w--1-5 mr3 mb2 stroke-"+n}),s.a.createElement("div",{className:"flex flex-column justify-between flex-auto"},s.a.createElement("div",null,s.a.createElement("h2",{className:o.a.h4+" mt0 mt2-ns darkgrey flex-shrink-1"},a),s.a.createElement("p",{className:o.a.small+" midgrey"},r)),s.a.createElement("span",{className:n+" dib mt2 link fw5 f7 f5-ns flex items-center"},"Learn more",s.a.createElement(c.b,{name:"arrow-right",className:"w3 h3 ml2 fill-"+n}))))};u.propTypes={to:i.a.string.isRequired,title:i.a.string.isRequired,color:i.a.string.isRequired,icon:i.a.string.isRequired,children:i.a.node.isRequired};var g=u,h=function(){return s.a.createElement("div",{className:"gh-bg-home bb b--whitegrey"},s.a.createElement("header",{className:"top-0 left-0 right-0 z-9999"},s.a.createElement(c.d,{theme:"light"})),s.a.createElement("div",{className:o.a.page.xl+" pb5 pt10 pt15-ns pt20-l pb10-ns pb15-l flex flex-column items-center bt bn-ns b--white-10"},s.a.createElement("h1",{className:"ma0 pa0 f2 f1-ns f-headline-l white header-heading-shadow"},"Need help?"),s.a.createElement(d.a,{isHome:!0}),s.a.createElement("section",{className:"grid-12 gutter-row-20 gutter-36-ns mt10 mt20-ns mt25-l miw-100 miw-auto-ns home-main-box-margin-ns z-999"},s.a.createElement(g,{to:"/merchant/getting-started/",title:"Merchant help",icon:"rocket",color:"purple"},"Everything a merchant needs to know"),s.a.createElement(g,{to:"/influencer/getting-started/",title:"Influencer help",icon:"rocket",color:"blue"},"Everything an influencer needs to know"),s.a.createElement(g,{to:"/releases/2019-01-31/",title:"Product releases",icon:"blocks",color:"midgrey"},"Keep up to date with our releases"))))},w=function(e){var t=e.to,a=e.icon,n=e.title,i=e.children;return s.a.createElement(p.Link,{to:t,className:"flex items-start pa4 pa7-ns tdn bb b--whitegrey justify-between mih-10 flex-auto api-box"},s.a.createElement("span",{className:"dib mr3 mt3 miw10 tc"},s.a.createElement(c.b,{name:a,className:"stroke-middarkgrey-l2"})),s.a.createElement("div",{className:"flex-auto"},s.a.createElement("h4",{className:o.a.h5+" darkgrey mt2 mt0-l"},n),s.a.createElement("p",{className:o.a.small+" midgrey"},i)))};w.propTypes={to:i.a.string.isRequired,title:i.a.string.isRequired,icon:i.a.string.isRequired,children:i.a.node.isRequired};var E=w,y=function(e){var t=e.to,a=e.title,n=e.children;return s.a.createElement(p.Link,{to:t,className:"midgrey home-faq-question link dib pt1 pb5"},s.a.createElement("h4",{className:o.a.h5+" blue dib"},a," »"),s.a.createElement("p",{className:o.a.small+" mt0"},n))};y.propTypes={to:i.a.string.isRequired,title:i.a.string.isRequired,children:i.a.node.isRequired};a.d(t,"pageQuery",function(){return b});var f=function(e){var t=e.data,a=e.location,n=Object(m.b)();return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{data:t,location:a,type:"website",title:"vwa.la help",description:"Everything you need to know about the vwa.la influencer marketing platform.",image:n}),s.a.createElement(l.a,{headerDividerStyle:"shadow",bodyClass:"bg-white",mainClass:"bg-whitegrey-l2 pb-vw6 pb-vw3-ns",header:s.a.createElement(h,null)},s.a.createElement("div",{className:"pt-vw3 home-main-box-padding-ns"},s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("div",{className:""+o.a.page.xl},s.a.createElement(E,{to:"/user",title:"Account help",icon:"sdks"},"Account management help"))))))};f.propTypes={data:i.a.shape({site:i.a.shape({siteMetadata:i.a.shape({siteUrl:i.a.string.isRequired,title:i.a.string.isRequired,description:i.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:i.a.shape({pathname:i.a.string.isRequired}).isRequired};t.default=f;var b="1531574144"},167:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),s=a.n(r),l=a(166),m=a.n(l),o=(a(163),a(175)),c=a(160),d=a.n(c),p=a(159),u=a.n(p),g=function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+d.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://vwa.la/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=d.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+d.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}};g.defaultProps={fetchAuthorData:!1},g.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=g,w=function(e){var t=e.image;return i.a.createElement(u.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:t}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"og:image:width",content:"1000"}),i.a.createElement("meta",{property:"og:image:height",content:"523"}))};w.propTypes={image:s.a.string.isRequired};var E=w,y=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,r=e.title,s=e.overwriteDefaultImage,l=e.image,m=t.ghostPost,c=t.site.siteMetadata,p=h(m.primary_author,n),g=d.a.map(Object(o.tags)(m,{visibility:"public",fn:function(e){return e}}),"name"),w=g[0]||{name:"General",slug:"general"},y=s&&m.feature_image?m.feature_image:l;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,m.meta_title||r||m.title),i.a.createElement("meta",{name:"description",content:m.meta_description||m.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:c.title}),i.a.createElement("meta",{name:"og:type",content:"article"}),i.a.createElement("meta",{name:"og:title",content:m.og_title||r||m.meta_title||m.title}),i.a.createElement("meta",{name:"og:description",content:m.og_description||m.excerpt||m.meta_description}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:m.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:m.updated_at}),g.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}),i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/vwalamarketing/"}),i.a.createElement("meta",{name:"twitter:title",content:m.twitter_title||r||m.meta_title||m.title}),i.a.createElement("meta",{name:"twitter:description",content:m.twitter_description||m.excerpt||m.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:p.name}),i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),i.a.createElement("meta",{name:"twitter:data2",content:w}),i.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),i.a.createElement("meta",{name:"twitter:creator",content:"@vwalamarketing"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(g.length?'"keywords": "'+d.a.join(g,", ")+'",':"")+'\n                        "headline": "'+(m.meta_title||r||m.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+m.published_at+'",\n                        "dateModified": "'+m.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+y+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(m.meta_description||m.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+c.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(E,{image:y}))};y.defaultProps={fetchAuthorData:!1},y.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var f=y,b=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,r=n.frontmatter,s=t.site.siteMetadata,l=r.date?new Date(r.date).toISOString():new Date("2018-10-15").toISOString(),m=r.keywords&&r.keywords.length?r.keywords[0]:null,o=A();return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,r.meta_title||r.title),i.a.createElement("meta",{name:"description",content:r.meta_description||n.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:s.title}),i.a.createElement("meta",{name:"og:type",content:"article"}),i.a.createElement("meta",{name:"og:title",content:r.meta_title||r.title}),i.a.createElement("meta",{name:"og:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:l}),r.keywords&&r.keywords.length?r.keywords.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:r.meta_title||r.title}),i.a.createElement("meta",{name:"twitter:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),i.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),m?i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,m?i.a.createElement("meta",{name:"twitter:data2",content:m}):null,i.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),i.a.createElement("meta",{name:"twitter:creator",content:"@vwalamarketing"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://vwa.la/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/vwalamarketing/"\n                            ]\n                        },\n                        '+(r.keywords&&r.keywords.length?'"keywords": "'+d.a.join(r.keywords,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+o+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(r.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(E,{image:o}))};b.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var R=b,q=function(e){var t=e.data,a=e.canonical,n=e.title,r=e.description,s=e.image,l=e.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,n),i.a.createElement("meta",{name:"description",content:r}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:n}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{name:"twitter:title",content:n}),i.a.createElement("meta",{name:"twitter:description",content:r}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(l&&"series"===l?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+r+'"\n                    }\n                ')),i.a.createElement(E,{image:s}))};q.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var k=q,v=function(e){var t=e.data,a=e.type,n=e.title,r=e.description,s=e.image,l=e.fetchAuthorData,o=e.overwriteDefaultImage,c=e.location,d=t||{},p=d.ghostPost,u=d.markdownRemark,g=t.site.siteMetadata,h=m.a.resolve(g.siteUrl,c.pathname,"/");if("article"===a){if(p)return i.a.createElement(f,{data:t,canonical:h,fetchAuthorData:l,title:n,image:s,overwriteDefaultImage:o});if(u)return i.a.createElement(R,{data:t,canonical:h})}else if("website"===a||"series"===a)return i.a.createElement(k,{data:t,canonical:h,title:n,description:r,image:s,type:a});return null};v.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var _=v,x={default:m.a.resolve("https://docs.vwa.la","/images/meta/hero.png")},N=function(e){return x[e=e||"default"]};N.proptypes={section:s.a.string.isRequired};var A=N;a.d(t,"a",function(){return _}),a.d(t,"b",function(){return A})}}]);
//# sourceMappingURL=component---src-pages-index-js-d3c3ea6ca241868b1ecf.js.map