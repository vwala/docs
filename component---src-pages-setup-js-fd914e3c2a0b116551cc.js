(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{158:function(e,t,a){"use strict";a.r(t);a(176);var n=a(4),i=a.n(n),r=a(0),s=a.n(r),l=a(202),o=a(174),c=a(181),m=a(160),d=function(e){var t=e.to,a=e.href,n=e.icon,i=e.iconClass,r=e.headingClass,l=e.title,o=e.children;return s.a.createElement(c.a,{to:t,href:a,className:"col-12 col-6-ns col-4-l pa8 tdn middarkgrey setup-box-min-height",radius:"4"},s.a.createElement(c.b,{name:n,className:i}),s.a.createElement("h4",{className:m.a.h4+" darkgrey "+r},l),s.a.createElement("div",{className:m.a.small+" mt1 midgrey"},o))};d.propTypes={children:i.a.node.isRequired,icon:i.a.string.isRequired,title:i.a.string.isRequired,to:i.a.string,href:i.a.string,iconClass:i.a.string,headingClass:i.a.string};var p=d;a.d(t,"pageQuery",function(){return g});var u=function(e){var t=e.data,a=e.location,n=Object(o.b)();return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{data:t,location:a,type:"website",title:"How To Install Ghost: Setup & Configuration - Open Source Publishing",description:"All the tools you need to get started with Ghost 👉Self-hosted install & setup, local install guide for development, contribution guidelines & premium hosted services!",image:n}),s.a.createElement(l.a,{mainClass:"bg-whitegrey-l2 pb-vw3",bodyClass:"bg-white"},s.a.createElement("section",{className:"bg-setup"},s.a.createElement("div",{className:m.a.page.xl+" tc-ns pt-vw6 pt-vw5-ns pb-vw5 white"},s.a.createElement("h1",{className:m.a.sectionHeading+" gh-integration-header-shadow"},"Setup Guide Y"),s.a.createElement("p",{className:m.a.sectionSubHeading},"Blah"))),s.a.createElement("div",{className:m.a.page.xl+" mt-vw3"},s.a.createElement("section",{className:"grid-12 gutter-row-20 gutter-20-ns gutter-36-l"},s.a.createElement(p,{to:"/install/ubuntu/",title:"Ubuntu",icon:"ubuntu-logo",iconClass:"w8 h8",headingClass:"mt2"},s.a.createElement("p",{className:m.a.small+" mw70"},"A full guide for installing Ghost on Ubuntu ",s.a.createElement("strong",null,"16.04 LTS")," and ",s.a.createElement("strong",null,"18.04 LTS")," ",s.a.createElement("em",null,"(Recommended)"))),s.a.createElement(p,{to:"/install/local/",title:"Local install",icon:"terminal",iconClass:"fill-midlightgrey w8 h8",headingClass:"mt2"},s.a.createElement("p",{className:m.a.small+" mw70"},s.a.createElement("strong",null,"Fast-track")," local install for running Ghost on your computer or doing theme development")),s.a.createElement(p,{to:"/install/source/",title:"Install from Source",icon:"github-outline",iconClass:"fill-darkgrey w8 h8",headingClass:"mt2"},s.a.createElement("p",{className:m.a.small+" mw70"},s.a.createElement("strong",null,"Advanced developer guide")," for working directly on Ghost Core and Ghost Admin"))))))};u.propTypes={data:i.a.shape({site:i.a.shape({siteMetadata:i.a.shape({siteUrl:i.a.string.isRequired,title:i.a.string.isRequired,description:i.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:i.a.shape({pathname:i.a.string.isRequired}).isRequired};t.default=u;var g="1531574144"},174:function(e,t,a){"use strict";var n=a(4),i=a.n(n),r=a(0),s=a.n(r),l=a(169),o=a.n(l),c=a(201),m=a.n(c),d=a(161),p=a.n(d),u=function(e){var t=e.image;return s.a.createElement(p.a,null,s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:image",content:t}),s.a.createElement("meta",{property:"og:image",content:t}),s.a.createElement("meta",{property:"og:image:width",content:"1000"}),s.a.createElement("meta",{property:"og:image:height",content:"523"}))};u.propTypes={image:i.a.string.isRequired};var g=u,h=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,i=n.frontmatter,r=t.site.siteMetadata,l=i.date?new Date(i.date).toISOString():new Date("2018-10-15").toISOString(),o=i.keywords&&i.keywords.length?i.keywords[0]:null,c=v();return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,null,s.a.createElement("title",null,i.meta_title||i.title),s.a.createElement("meta",{name:"description",content:i.meta_description||n.excerpt}),s.a.createElement("link",{rel:"canonical",href:a}),s.a.createElement("meta",{property:"og:site_name",content:r.title}),s.a.createElement("meta",{name:"og:type",content:"article"}),s.a.createElement("meta",{name:"og:title",content:i.meta_title||i.title}),s.a.createElement("meta",{name:"og:description",content:i.meta_description||n.excerpt}),s.a.createElement("meta",{property:"og:url",content:a}),s.a.createElement("meta",{property:"article:published_time",content:l}),i.keywords&&i.keywords.length?i.keywords.map(function(e,t){return s.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,s.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),s.a.createElement("meta",{name:"twitter:title",content:i.meta_title||i.title}),s.a.createElement("meta",{name:"twitter:description",content:i.meta_description||n.excerpt}),s.a.createElement("meta",{name:"twitter:url",content:a}),s.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),s.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),o?s.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,o?s.a.createElement("meta",{name:"twitter:data2",content:o}):null,s.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),s.a.createElement("meta",{name:"twitter:creator",content:"@vwalamarketing"}),s.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://vwa.la/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/vwalamarketing/"\n                            ]\n                        },\n                        '+(i.keywords&&i.keywords.length?'"keywords": "'+m.a.join(i.keywords,", ")+'",':"")+'\n                        "headline": "'+(i.meta_title||i.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+c+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(i.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+r.siteUrl+'"\n                        }\n                    }\n                ')),s.a.createElement(g,{image:c}))};h.propTypes={data:i.a.shape({markdownRemark:i.a.shape({frontmatter:i.a.shape({title:i.a.string.isRequired,keywords:i.a.arrayOf(i.a.string),meta_title:i.a.string,meta_description:i.a.string,date:i.a.string}).isRequired,excerpt:i.a.string.isRequired,timeToRead:i.a.number}).isRequired,site:i.a.shape({siteMetadata:i.a.shape({siteUrl:i.a.string.isRequired,title:i.a.string.isRequired,description:i.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:i.a.string.isRequired};var w=h,E=function(e){var t=e.data,a=e.canonical,n=e.title,i=e.description,r=e.image,l=e.type;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,null,s.a.createElement("title",null,n),s.a.createElement("meta",{name:"description",content:i}),s.a.createElement("link",{rel:"canonical",href:a}),s.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),s.a.createElement("meta",{property:"og:type",content:"website"}),s.a.createElement("meta",{property:"og:title",content:n}),s.a.createElement("meta",{property:"og:description",content:i}),s.a.createElement("meta",{property:"og:url",content:a}),s.a.createElement("meta",{name:"twitter:title",content:n}),s.a.createElement("meta",{name:"twitter:description",content:i}),s.a.createElement("meta",{name:"twitter:url",content:a}),s.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),s.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(l&&"series"===l?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+r+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+i+'"\n                    }\n                ')),s.a.createElement(g,{image:r}))};E.propTypes={data:i.a.shape({site:i.a.shape({siteMetadata:i.a.shape({siteUrl:i.a.string.isRequired,title:i.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:i.a.string.isRequired,title:i.a.string.isRequired,description:i.a.string.isRequired,image:i.a.string.isRequired,type:i.a.oneOf(["website","series"]).isRequired};var y=E,R=function(e){var t=e.data,a=e.type,n=e.title,i=e.description,r=e.image,l=(e.fetchAuthorData,e.overwriteDefaultImage,e.location),c=t||{},m=c.ghostPost,d=c.markdownRemark,p=t.site.siteMetadata,u=o.a.resolve(p.siteUrl,l.pathname,"/");if("article"===a){if(m)return null;if(d)return s.a.createElement(w,{data:t,canonical:u})}else if("website"===a||"series"===a)return s.a.createElement(y,{data:t,canonical:u,title:n,description:i,image:r,type:a});return null};R.propTypes={data:i.a.shape({site:i.a.shape({siteMetadata:i.a.shape({siteUrl:i.a.string.isRequired,title:i.a.string.isRequired,description:i.a.string.isRequired}).isRequired}).isRequired,ghostPost:i.a.object,markdownRemark:i.a.object}).isRequired,location:i.a.shape({pathname:i.a.string.isRequired}).isRequired,type:i.a.oneOf(["website","series","article"]).isRequired,title:i.a.string,description:i.a.string,image:i.a.string,fetchAuthorData:i.a.bool,overwriteDefaultImage:i.a.bool};var f=R,q={default:o.a.resolve("https://docs.vwa.la","/images/meta/hero.png")},b=function(e){return q[e=e||"default"]};b.proptypes={section:i.a.string.isRequired};var v=b;a.d(t,"a",function(){return f}),a.d(t,"b",function(){return v})}}]);
//# sourceMappingURL=component---src-pages-setup-js-fd914e3c2a0b116551cc.js.map