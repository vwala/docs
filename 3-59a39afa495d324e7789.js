(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(170),o=a.n(l),c=(a(167),a(172)),m=a(165),u=a.n(m),p=a(164),d=a.n(p),f=function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+u.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://vwa.la/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=u.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+u.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}};f.defaultProps={fetchAuthorData:!1},f.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var g=f,h=function(e){var t=e.image;return r.a.createElement(d.a,null,r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:image",content:t}),r.a.createElement("meta",{property:"og:image",content:t}),r.a.createElement("meta",{property:"og:image:width",content:"1000"}),r.a.createElement("meta",{property:"og:image:height",content:"523"}))};h.propTypes={image:s.a.string.isRequired};var y=h,w=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,i=e.title,s=e.overwriteDefaultImage,l=e.image,o=t.ghostPost,m=t.site.siteMetadata,p=g(o.primary_author,n),f=u.a.map(Object(c.tags)(o,{visibility:"public",fn:function(e){return e}}),"name"),h=f[0]||{name:"General",slug:"general"},w=s&&o.feature_image?o.feature_image:l;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement("title",null,o.meta_title||i||o.title),r.a.createElement("meta",{name:"description",content:o.meta_description||o.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:m.title}),r.a.createElement("meta",{name:"og:type",content:"article"}),r.a.createElement("meta",{name:"og:title",content:o.og_title||i||o.meta_title||o.title}),r.a.createElement("meta",{name:"og:description",content:o.og_description||o.excerpt||o.meta_description}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:o.published_at}),r.a.createElement("meta",{property:"article:modified_time",content:o.updated_at}),f.map(function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})}),r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:o.twitter_title||i||o.meta_title||o.title}),r.a.createElement("meta",{name:"twitter:description",content:o.twitter_description||o.excerpt||o.meta_description}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),r.a.createElement("meta",{name:"twitter:data1",content:p.name}),r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),r.a.createElement("meta",{name:"twitter:data2",content:h}),r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(f.length?'"keywords": "'+u.a.join(f,", ")+'",':"")+'\n                        "headline": "'+(o.meta_title||i||o.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o.published_at+'",\n                        "dateModified": "'+o.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+w+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(o.meta_description||o.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(y,{image:w}))};w.defaultProps={fetchAuthorData:!1},w.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var E=w,b=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,i=n.frontmatter,s=t.site.siteMetadata,l=i.date?new Date(i.date).toISOString():new Date("2018-10-15").toISOString(),o=i.keywords&&i.keywords.length?i.keywords[0]:null,c=O();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement("title",null,i.meta_title||i.title),r.a.createElement("meta",{name:"description",content:i.meta_description||n.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:s.title}),r.a.createElement("meta",{name:"og:type",content:"article"}),r.a.createElement("meta",{name:"og:title",content:i.meta_title||i.title}),r.a.createElement("meta",{name:"og:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:l}),i.keywords&&i.keywords.length?i.keywords.map(function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:i.meta_title||i.title}),r.a.createElement("meta",{name:"twitter:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),r.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),o?r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,o?r.a.createElement("meta",{name:"twitter:data2",content:o}):null,r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://vwa.la/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(i.keywords&&i.keywords.length?'"keywords": "'+u.a.join(i.keywords,", ")+'",':"")+'\n                        "headline": "'+(i.meta_title||i.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+c+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(i.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(y,{image:c}))};b.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var v=b,_=function(e){var t=e.data,a=e.canonical,n=e.title,i=e.description,s=e.image,l=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:description",content:i}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{name:"twitter:title",content:n}),r.a.createElement("meta",{name:"twitter:description",content:i}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(l&&"series"===l?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+i+'"\n                    }\n                ')),r.a.createElement(y,{image:s}))};_.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var R=_,k=function(e){var t=e.data,a=e.type,n=e.title,i=e.description,s=e.image,l=e.fetchAuthorData,c=e.overwriteDefaultImage,m=e.location,u=t||{},p=u.ghostPost,d=u.markdownRemark,f=t.site.siteMetadata,g=o.a.resolve(f.siteUrl,m.pathname,"/");if("article"===a){if(p)return r.a.createElement(E,{data:t,canonical:g,fetchAuthorData:l,title:n,image:s,overwriteDefaultImage:c});if(d)return r.a.createElement(v,{data:t,canonical:g})}else if("website"===a||"series"===a)return r.a.createElement(R,{data:t,canonical:g,title:n,description:i,image:s,type:a});return null};k.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var q=k,x={default:o.a.resolve("https://docs.vwa.la","/images/meta/hero.png")},P=function(e){return x[e=e||"default"]};P.proptypes={section:s.a.string.isRequired};var O=P;a.d(t,"a",function(){return q}),a.d(t,"b",function(){return O})},193:function(e,t,a){e.exports=a(239)()},237:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tags",{enumerable:!0,get:function(){return r.default}});var n,r=(n=a(238))&&n.__esModule?n:{default:n}},238:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(193)),i=l(a(241)),s=a(172);function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t={limit:e.limit,from:e.from,to:e.to,fallback:e.fallback,visibility:e.visibility};return e.separator&&(t.separator=n.default.isValidElement(e.separator)?e.separator:n.default.createElement(n.default.Fragment,null,n.default.createElement("span",{className:e.separatorClasses},e.separator))),e.prefix&&(t.prefix=n.default.isValidElement(e.prefix)?e.prefix:n.default.createElement(n.default.Fragment,null,n.default.createElement("span",{className:e.prefixClasses},e.prefix))),e.suffix&&(t.suffix=n.default.isValidElement(e.suffix)?e.suffix:n.default.createElement(n.default.Fragment,null,n.default.createElement("span",{className:e.suffixClasses},e.suffix))),t.fn=function(t){var a=e.permalink;return a=a.replace(/:slug/,t.slug)||"/".concat(t.slug,"/"),e.autolink?n.default.createElement(n.default.Fragment,null,n.default.createElement("span",{className:e.classes,key:t.slug},n.default.createElement(i.default,{to:a,className:e.linkClasses},t.name))):n.default.createElement(n.default.Fragment,null,n.default.createElement("span",{className:e.classes,key:t.slug},t.name))},(0,s.tags)(e.post,t)};o.defaultProps={separator:", ",from:1,classes:"",separatorClasses:"",prefixClasses:"",suffixClasses:"",linkClasses:"",permalink:"/:slug/",autolink:!0},o.propTypes={post:r.default.shape({tags:r.default.arrayOf(r.default.shape({name:r.default.string,slug:r.default.string})).isRequired}).isRequired,limit:r.default.number,from:r.default.number,to:r.default.number,fallback:r.default.object,visibility:r.default.oneOf(["public","all","internal"]),permalink:r.default.string,autolink:r.default.bool,classes:r.default.string,separatorClasses:r.default.string,prefixClasses:r.default.string,suffixClasses:r.default.string,linkClasses:r.default.string};var c=o;t.default=c},239:function(e,t,a){"use strict";var n=a(240);function r(){}e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return a.checkPropTypes=r,a.PropTypes=a,a}},240:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},241:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(213)),i=n(a(214)),s=n(a(7)),l=n(a(52)),o=n(a(53)),c=n(a(193)),m=n(a(0)),u=a(19),p=a(169);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:c.default.string,activeStyle:c.default.object},g=function(e){function t(t){var a;a=e.call(this,t)||this,(0,o.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,s=void 0===n?this.defaultGetProps:n,l=t.onClick,o=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),f=t.replace,g=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]),h=d(a);return m.default.createElement(u.Link,(0,i.default)({to:h,state:c,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){o&&o(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(a,{state:c,replace:f})),!0}},g))},t}(m.default.Component);g.propTypes=(0,i.default)({},f,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var h=m.default.forwardRef(function(e,t){return m.default.createElement(g,(0,i.default)({innerRef:t},e))});t.default=h;var y=function(e,t){window.___navigate(d(e),t)};t.navigate=y;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},442:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(237),o=a(174),c=a(166),m=function(e){var t=e.post,a=e.className,n="/"+e.section+"/"+t.slug+"/",i=t.excerpt.length>200?t.excerpt.substring(0,200)+"...":t.excerpt;return r.a.createElement(o.a,{to:n,className:a+" pa10 pa8 flex flex-column justify-between flex-third relative tutorial-post-card tdn",elevation:"1"},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h2",{className:c.a.h3+" darkgrey nt2"},t.title)),r.a.createElement("section",{className:c.a.p+" midgrey mt4"},i)),r.a.createElement("footer",{className:"pt2 mt6 flex justify-between items-center"},r.a.createElement("div",{className:"flex items-center"},t.featured?r.a.createElement("span",{className:"bg-tutorial-color pa1 f-supersmall fw5 dib measure-0-2 mr2 white br2 pl3 pr3"},"Featured"):null,r.a.createElement(l.Tags,{post:t,autolink:!1,separator:"",visibility:"public",classes:"bg-midgrey dib word-nowrap pt1 pb1 pl2 pr2 white br2 f-supersmall"}))))};m.propTypes={post:s.a.shape({title:s.a.string.isRequired,featured:s.a.bool,tags:s.a.arrayOf(s.a.shape({name:s.a.string})),excerpt:s.a.string.isRequired}).isRequired,className:s.a.string,section:s.a.string.isRequired};var u=m;a.d(t,"a",function(){return u})}}]);
//# sourceMappingURL=3-59a39afa495d324e7789.js.map