(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"articleQuery",function(){return f});var n=a(7),i=a.n(n),r=a(0),s=a.n(r),l=a(4),o=a.n(l),m=a(179),c=a.n(m),p=a(235),d=a.n(p),u=a(236),g=a(175),h=a(165),w=a(173),y=a(167),E=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){d.a.highlightAll()},a.render=function(){var e=this.props.data.ghostPost,t=this.props.pageContext,a=t.relatedPosts,n=t.section,i=Object(y.b)(n);return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{data:this.props.data,location:this.props.location,type:"article",image:i}),s.a.createElement(g.a,{bodyClass:"bg-white",mainClass:"bg-whitegrey-l2 pb10"},s.a.createElement("div",{className:"bg-faq bb b--whitegrey"},s.a.createElement("div",{className:h.a.page.xl+" pt-vw7 pt-vw1-ns pb-vw1"},s.a.createElement("h1",{className:h.a.h4+" white"},s.a.createElement(c.a,{to:"/faq/",className:"link dim white fw3"},"Frequently Asked Questions"),s.a.createElement(u.Tags,{post:e,separator:"",limit:1,classes:"white titleslash-white pl4 ml4 relative",permalink:"/faq/:slug/",linkClasses:"link dim white"})))),s.a.createElement("div",{className:h.a.page.xl+" grid-12"},s.a.createElement("section",{className:"bg-white br4 shadow-1 col-12 col-8-l mt5 pa5 pl5 pl3-ns mt10-ns pa15-ns pt10-ns pl7-ns"},s.a.createElement("div",{className:"mw-content"},s.a.createElement("div",{className:"flex flex-row items-start"},s.a.createElement("div",{className:"flex-shrink-0 flex justify-center items-center w5 h5 w6-l h6-l mr4 fw5 br-100 tc white bg-faq-color lh-normal nudge-bottom--2-ns"},"?"),s.a.createElement("h1",{className:h.a.h3+" ma0 f4 nudge-bottom--4-ns"},e.title)),s.a.createElement("div",{className:"flex flex-column flex-row-ns items-start mt5 mt3-ns"},s.a.createElement("div",{className:"dn flex-ns flex-shrink-0 justify-center items-center w5 h5 w6-l h6-l mr4 f8 fw5 br-100 tc faq-color ba b--faq-color mb2 mb0-ns nudge-top--2-m"},"»"),s.a.createElement("section",{className:"post-content faq-content external-scripts",dangerouslySetInnerHTML:{__html:e.html}})))),s.a.createElement("div",{className:"col-12 col-4-l"},a.length?s.a.createElement("div",{className:"mw-content-ns pl5 pa15-ns pt5 pt5-m pt15-l pb0 pb0-m pb15-l center mt6"},s.a.createElement("h4",{className:h.a.h5+" mb4 midgrey"},"Related Questions"),s.a.createElement(w.f,{relatedPosts:a})):null))))},t}(s.a.Component);E.propTypes={data:o.a.shape({site:o.a.shape({siteMetadata:o.a.shape({siteUrl:o.a.string.isRequired,title:o.a.string.isRequired,description:o.a.string.isRequired}).isRequired}).isRequired,ghostPost:o.a.object.isRequired}).isRequired,location:o.a.object.isRequired,pageContext:o.a.shape({relatedPosts:o.a.array.isRequired,section:o.a.string.isRequired}).isRequired},t.default=E;var f="933166895"},167:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),s=a.n(r),l=a(169),o=a.n(l),m=(a(166),a(163)),c=a.n(m),p=a(164),d=a.n(p),u=a(171),g=function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+d.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://vwa.la/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=d.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+d.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}};g.defaultProps={fetchAuthorData:!1},g.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=g,w=function(e){var t=e.image;return i.a.createElement(c.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:t}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"og:image:width",content:"1000"}),i.a.createElement("meta",{property:"og:image:height",content:"523"}))};w.propTypes={image:s.a.string.isRequired};var y=w,E=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,r=e.title,s=e.overwriteDefaultImage,l=e.image,o=t.ghostPost,m=t.site.siteMetadata,p=h(o.primary_author,n),g=d.a.map(Object(u.tags)(o,{visibility:"public",fn:function(e){return e}}),"name"),w=g[0]||{name:"General",slug:"general"},E=s&&o.feature_image?o.feature_image:l;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,o.meta_title||r||o.title),i.a.createElement("meta",{name:"description",content:o.meta_description||o.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:m.title}),i.a.createElement("meta",{name:"og:type",content:"article"}),i.a.createElement("meta",{name:"og:title",content:o.og_title||r||o.meta_title||o.title}),i.a.createElement("meta",{name:"og:description",content:o.og_description||o.excerpt||o.meta_description}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:o.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:o.updated_at}),g.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}),i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:o.twitter_title||r||o.meta_title||o.title}),i.a.createElement("meta",{name:"twitter:description",content:o.twitter_description||o.excerpt||o.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:p.name}),i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),i.a.createElement("meta",{name:"twitter:data2",content:w}),i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(g.length?'"keywords": "'+d.a.join(g,", ")+'",':"")+'\n                        "headline": "'+(o.meta_title||r||o.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o.published_at+'",\n                        "dateModified": "'+o.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+E+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(o.meta_description||o.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(y,{image:E}))};E.defaultProps={fetchAuthorData:!1},E.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var f=E,b=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,r=n.frontmatter,s=t.site.siteMetadata,l=r.date?new Date(r.date).toISOString():new Date("2018-10-15").toISOString(),o=r.keywords&&r.keywords.length?r.keywords[0]:null,m=P();return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,r.meta_title||r.title),i.a.createElement("meta",{name:"description",content:r.meta_description||n.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:s.title}),i.a.createElement("meta",{name:"og:type",content:"article"}),i.a.createElement("meta",{name:"og:title",content:r.meta_title||r.title}),i.a.createElement("meta",{name:"og:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:l}),r.keywords&&r.keywords.length?r.keywords.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:r.meta_title||r.title}),i.a.createElement("meta",{name:"twitter:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),i.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),o?i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,o?i.a.createElement("meta",{name:"twitter:data2",content:o}):null,i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://vwa.la/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(r.keywords&&r.keywords.length?'"keywords": "'+d.a.join(r.keywords,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+m+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(r.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(y,{image:m}))};b.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var q=b,R=function(e){var t=e.data,a=e.canonical,n=e.title,r=e.description,s=e.image,l=e.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,n),i.a.createElement("meta",{name:"description",content:r}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:n}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{name:"twitter:title",content:n}),i.a.createElement("meta",{name:"twitter:description",content:r}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(l&&"series"===l?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+r+'"\n                    }\n                ')),i.a.createElement(y,{image:s}))};R.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var _=R,v=function(e){var t=e.data,a=e.type,n=e.title,r=e.description,s=e.image,l=e.fetchAuthorData,m=e.overwriteDefaultImage,c=e.location,p=t||{},d=p.ghostPost,u=p.markdownRemark,g=t.site.siteMetadata,h=o.a.resolve(g.siteUrl,c.pathname,"/");if("article"===a){if(d)return i.a.createElement(f,{data:t,canonical:h,fetchAuthorData:l,title:n,image:s,overwriteDefaultImage:m});if(u)return i.a.createElement(q,{data:t,canonical:h})}else if("website"===a||"series"===a)return i.a.createElement(_,{data:t,canonical:h,title:n,description:r,image:s,type:a});return null};v.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var k=v,x={default:o.a.resolve("http://ghost.local:8000","/images/meta/hero.png")},A=function(e){return x[e=e||"default"]};A.proptypes={section:s.a.string.isRequired};var P=A;a.d(t,"a",function(){return k}),a.d(t,"b",function(){return P})}}]);
//# sourceMappingURL=component---src-templates-ghost-faq-js-06fb5774f76c7a871466.js.map