(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"articleQuery",function(){return f});var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=a(4),l=a.n(o),c=a(168),u=a(235),m=a.n(u),g=a(175),p=a(165),d=a(167),h=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){m.a.highlightAll()},a.render=function(){var e=this.props.data.ghostPost,t=this.props.pageContext.section,a=Object(d.b)(t);return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{data:this.props.data,location:this.props.location,type:"article",fetchAuthorData:!0,overwriteDefaultImage:!0,image:a}),s.a.createElement(g.a,{headerDividerStyle:"shadow",mainClass:"bg-white"},s.a.createElement("div",{className:"bg-tutorials"},s.a.createElement("div",{className:p.a.page.xl+" pt-vw7 pt-vw1-ns pb-vw1 white"},s.a.createElement(c.Link,{to:"/tutorials/",className:p.a.h4+" gh-integration-header-shadow white dim link"},"Tutorials"))),s.a.createElement("div",{className:p.a.page.xl+" pb15"},s.a.createElement("article",{className:"mw-content center pa7 pa15-ns pb10"},s.a.createElement("h1",{className:p.a.h1},e.title),s.a.createElement("section",{className:"post-content tutorial-content external-scripts",dangerouslySetInnerHTML:{__html:e.html}})))))},t}(s.a.Component);h.propTypes={data:l.a.shape({ghostPost:l.a.shape({title:l.a.string.isRequired,html:l.a.string.isRequired}).isRequired}).isRequired,location:l.a.object.isRequired,pageContext:l.a.shape({section:l.a.string.isRequired}).isRequired},t.default=h;var f="933166895"},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(169),l=a.n(o),c=(a(166),a(163)),u=a.n(c),m=a(164),g=a.n(m),p=a(171),d=function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+g.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://vwa.la/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=g.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+g.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}};d.defaultProps={fetchAuthorData:!1},d.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=d,f=function(e){var t=e.image;return r.a.createElement(u.a,null,r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:image",content:t}),r.a.createElement("meta",{property:"og:image",content:t}),r.a.createElement("meta",{property:"og:image:width",content:"1000"}),r.a.createElement("meta",{property:"og:image:height",content:"523"}))};f.propTypes={image:s.a.string.isRequired};var y=f,w=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,i=e.title,s=e.overwriteDefaultImage,o=e.image,l=t.ghostPost,c=t.site.siteMetadata,m=h(l.primary_author,n),d=g.a.map(Object(p.tags)(l,{visibility:"public",fn:function(e){return e}}),"name"),f=d[0]||{name:"General",slug:"general"},w=s&&l.feature_image?l.feature_image:o;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("title",null,l.meta_title||i||l.title),r.a.createElement("meta",{name:"description",content:l.meta_description||l.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:c.title}),r.a.createElement("meta",{name:"og:type",content:"article"}),r.a.createElement("meta",{name:"og:title",content:l.og_title||i||l.meta_title||l.title}),r.a.createElement("meta",{name:"og:description",content:l.og_description||l.excerpt||l.meta_description}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:l.published_at}),r.a.createElement("meta",{property:"article:modified_time",content:l.updated_at}),d.map(function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})}),r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:l.twitter_title||i||l.meta_title||l.title}),r.a.createElement("meta",{name:"twitter:description",content:l.twitter_description||l.excerpt||l.meta_description}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),r.a.createElement("meta",{name:"twitter:data1",content:m.name}),r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),r.a.createElement("meta",{name:"twitter:data2",content:f}),r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+m.name+'",\n                            '+(m.image?m.sameAsArray?'"image": "'+m.image+'",':'"image": "'+m.image+'"':"")+"\n                            "+(m.sameAsArray?'"sameAs": '+m.sameAsArray:"")+"\n                        },\n                        "+(d.length?'"keywords": "'+g.a.join(d,", ")+'",':"")+'\n                        "headline": "'+(l.meta_title||i||l.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l.published_at+'",\n                        "dateModified": "'+l.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+w+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(l.meta_description||l.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+c.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(y,{image:w}))};w.defaultProps={fetchAuthorData:!1},w.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var b=w,k=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,i=n.frontmatter,s=t.site.siteMetadata,o=i.date?new Date(i.date).toISOString():new Date("2018-10-15").toISOString(),l=i.keywords&&i.keywords.length?i.keywords[0]:null,c=F();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("title",null,i.meta_title||i.title),r.a.createElement("meta",{name:"description",content:i.meta_description||n.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:s.title}),r.a.createElement("meta",{name:"og:type",content:"article"}),r.a.createElement("meta",{name:"og:title",content:i.meta_title||i.title}),r.a.createElement("meta",{name:"og:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:o}),i.keywords&&i.keywords.length?i.keywords.map(function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:i.meta_title||i.title}),r.a.createElement("meta",{name:"twitter:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),r.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),l?r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,l?r.a.createElement("meta",{name:"twitter:data2",content:l}):null,r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://vwa.la/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(i.keywords&&i.keywords.length?'"keywords": "'+g.a.join(i.keywords,", ")+'",':"")+'\n                        "headline": "'+(i.meta_title||i.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+c+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(i.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(y,{image:c}))};k.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var v=k,E=function(e){var t=e.data,a=e.canonical,n=e.title,i=e.description,s=e.image,o=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:description",content:i}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{name:"twitter:title",content:n}),r.a.createElement("meta",{name:"twitter:description",content:i}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(o&&"series"===o?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+i+'"\n                    }\n                ')),r.a.createElement(y,{image:s}))};E.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var R=E,q=function(e){var t=e.data,a=e.type,n=e.title,i=e.description,s=e.image,o=e.fetchAuthorData,c=e.overwriteDefaultImage,u=e.location,m=t||{},g=m.ghostPost,p=m.markdownRemark,d=t.site.siteMetadata,h=l.a.resolve(d.siteUrl,u.pathname,"/");if("article"===a){if(g)return r.a.createElement(b,{data:t,canonical:h,fetchAuthorData:o,title:n,image:s,overwriteDefaultImage:c});if(p)return r.a.createElement(v,{data:t,canonical:h})}else if("website"===a||"series"===a)return r.a.createElement(R,{data:t,canonical:h,title:n,description:i,image:s,type:a});return null};q.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var A=q,_={default:l.a.resolve("http://ghost.local:8000","/images/meta/hero.png")},x=function(e){return _[e=e||"default"]};x.proptypes={section:s.a.string.isRequired};var F=x;a.d(t,"a",function(){return A}),a.d(t,"b",function(){return F})},235:function(e,t,a){(function(t){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=a.Prism={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var a=n.util.type(e);switch(t=t||{},a){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var r={};for(var i in t[n.util.objId(e)]=r,e)e.hasOwnProperty(i)&&(r[i]=n.util.clone(e[i],t));return r;case"Array":if(t[n.util.objId(e)])return t[n.util.objId(e)];r=[];return t[n.util.objId(e)]=r,e.forEach(function(e,a){r[a]=n.util.clone(e,t)}),r}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){var i=(r=r||n.languages)[e];if(2==arguments.length){for(var s in a=arguments[1])a.hasOwnProperty(s)&&(i[s]=a[s]);return i}var o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var s in a)a.hasOwnProperty(s)&&(o[s]=a[s]);o[l]=i[l]}return n.languages.DFS(n.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){for(var i in r=r||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r);for(var i,s=r.elements||e.querySelectorAll(r.selector),o=0;i=s[o++];)n.highlightElement(i,!0===t,r.callback)},highlightElement:function(t,r,i){for(var s,o,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(e)||[,""])[1].toLowerCase(),o=n.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,t.parentNode&&(l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s));var c={element:t,language:s,grammar:o,code:t.textContent};if(n.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(n.hooks.run("before-highlight",c),c.element.textContent=c.code,n.hooks.run("after-highlight",c)),void n.hooks.run("complete",c);if(n.hooks.run("before-highlight",c),r&&a.Worker){var u=new Worker(n.filename);u.onmessage=function(e){c.highlightedCode=e.data,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=n.highlight(c.code,c.grammar,c.language),n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(t),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),r.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,a,r,i,s,o){var l=n.Token;for(var c in a)if(a.hasOwnProperty(c)&&a[c]){if(c==o)return;var u=a[c];u="Array"===n.util.type(u)?u:[u];for(var m=0;m<u.length;++m){var g=u[m],p=g.inside,d=!!g.lookbehind,h=!!g.greedy,f=0,y=g.alias;if(h&&!g.pattern.global){var w=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,w+"g")}g=g.pattern||g;for(var b=r,k=i;b<t.length;k+=t[b].length,++b){var v=t[b];if(t.length>e.length)return;if(!(v instanceof l)){if(h&&b!=t.length-1){if(g.lastIndex=k,!(x=g.exec(e)))break;for(var E=x.index+(d?x[1].length:0),R=x.index+x[0].length,q=b,A=k,_=t.length;q<_&&(A<R||!t[q].type&&!t[q-1].greedy);++q)E>=(A+=t[q].length)&&(++b,k=A);if(t[b]instanceof l)continue;F=q-b,v=e.slice(k,A),x.index-=k}else{g.lastIndex=0;var x=g.exec(v),F=1}if(x){d&&(f=x[1]?x[1].length:0);R=(E=x.index+f)+(x=x[0].slice(f)).length;var j=v.slice(0,E),S=v.slice(R),P=[b,F];j&&(++b,k+=j.length,P.push(j));var O=new l(c,p?n.tokenize(x,p):x,y,x,h);if(P.push(O),S&&P.push(S),Array.prototype.splice.apply(t,P),1!=F&&n.matchGrammar(e,t,a,b,k,!0,c),s)break}else if(s)break}}}}},tokenize:function(e,t,a){var r=[e],i=t.rest;if(i){for(var s in i)t[s]=i[s];delete t.rest}return n.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},r=n.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(r.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(a){return r.stringify(a,t,e)}).join("");var i={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var s="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}n.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!a.document)return a.addEventListener?(n.disableWorkerMessageHandler||a.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,i=t.code,s=t.immediateClose;a.postMessage(n.highlight(i,n.languages[r],r)),s&&a.close()},!1),a.Prism):a.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),a.Prism}();e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var a,r=t.getAttribute("data-src"),i=t,s=/\blang(?:uage)?-([\w-]+)\b/i;i&&!s.test(i.className);)i=i.parentNode;if(i&&(a=(t.className.match(s)||[,""])[1]),!a){var o=(r.match(/\.(\w+)$/)||[,""])[1];a=e[o]||o}var l=document.createElement("code");l.className="language-"+a,t.textContent="",l.textContent="Loading…",t.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,n.highlightElement(l)):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}).call(this,a(174))}}]);
//# sourceMappingURL=component---src-templates-ghost-tutorial-js-abd5fc85e8f9790c6299.js.map