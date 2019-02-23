(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),r=i(4),s=i.n(r),l=i(170),o=function(e){var t=e.post,i=e.hit,a=e.section,r=t?"/"+a+"/"+t.slug+"/":i.url,s=t?t.title:i.title,o="https://res.cloudinary.com/tryghost/image/fetch/w_120,h_100,c_fit/"+(t?t.feature_image:i.image);return n.a.createElement(l.a,{to:r,className:"flex flex-column justify-center items-center w-100 h30 pa3 tc tdn darkgrey bg-white shadow-2",elevation:"2",radius:"4"},n.a.createElement("div",{className:"flex justify-center items-center h10 w13 mt1"},n.a.createElement("img",{className:"w-100 h-100",style:{objectFit:"contain"},src:o,alt:s})),n.a.createElement("div",{className:"f8 mt3"},s))};o.propTypes={post:s.a.shape({title:s.a.string,feature_image:s.a.string,slug:s.a.string}),hit:s.a.shape({url:s.a.string,title:s.a.string,image:s.a.string}),section:s.a.string.isRequired};var c=o,m=i(7),u=i.n(m),g=i(52),p=i.n(g),d=i(160),h=i.n(d),b=i(187),y=i(161),v=i(209),f=i(240),E=Object(v.a)({displayName:"AlgoliaHits",getProvidedProps:function(e,t,i){var a=Object(f.d)(i,this.context);return{hits:a?a.hits:[]}},getSearchParameters:function(e){return e}}),w=function(e){var t=e.hits;return n.a.createElement("div",{className:"gh-integrations w-100"},t.map(function(e){return n.a.createElement(c,{key:e.objectID,hit:e,section:"integrations"})}))};w.propTypes={hits:s.a.arrayOf(s.a.shape({objectID:s.a.string.isRequired}).isRequired).isRequired};var R=E(w),q=i(195),k=i.n(q);function S(e,t,i){return Object(f.b)(e,t,i,"query","",function(e){return e||""})}function _(e,t,i,a){var n,r,s,l=(s=i,(r="query")in(n={})?Object.defineProperty(n,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[r]=s,n);return Object(f.f)(t,l,a,!0)}var A=Object(v.a)({displayName:"AlgoliaSearchBox",propTypes:{defaultRefinement:k.a.string},getProvidedProps:function(e,t,i){return{currentRefinement:S(e,t,this.context),isSearchStalled:i.isSearchStalled}},refine:function(e,t,i){return _(0,t,i,this.context)},cleanUp:function(e,t){return function(e,t,i){return Object(f.a)(t,i,"query")}(0,t,this.context)},getSearchParameters:function(e,t,i){return e.setQuery(S(t,i,this.context))},getMetadata:function(e,t){var i=this,a=S(e,t,this.context);return{id:"query",index:Object(f.c)(this.context),items:null===a?[]:[{label:"query: "+a,value:function(e){return _(0,e,"",i.context)},currentRefinement:a}]}}}),C=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={currentInput:i.props.currentRefinement,showResetButton:!1},i.handleChange=i.handleChange.bind(p()(p()(i))),i.setInput=i.setInput.bind(p()(p()(i))),i.resetSearch=i.resetSearch.bind(p()(p()(i))),i.toggleResetButton=i.toggleResetButton.bind(p()(p()(i))),i}u()(t,e);var i=t.prototype;return i.setInput=function(e){this.setState(function(){return{currentInput:e}})},i.toggleResetButton=function(e){this.setState(function(){return{showResetButton:e}})},i.resetSearch=function(){this.props.searchActive(!1),this.toggleResetButton(!1),this.props.refine(),this.setState(function(){return{currentInput:""}})},i.handleChange=function(e){return this.setInput(e.target.value),e.target.value?(this.props.searchActive(!0),this.toggleResetButton(!0),this.props.refine(e.target.value)):this.resetSearch()},i.render=function(){return n.a.createElement("div",{className:"relative mt8 mw-s center"},n.a.createElement("label",{htmlFor:"integrationsearch",className:"clip"},"Search"),n.a.createElement(l.b,{name:"search",className:"fill-lightgrey w5 h-auto absolute top-4 left-4"}),n.a.createElement("input",{id:"integrationsearch",name:"integrationsearch",className:"input-reset form-text pa4 pl10 pr8 w-100 f6 br-pill ba b--transparent bg-white shadow-2 whitney middarkgrey dark-placeholder",type:"text",placeholder:"Search integrations...",autoComplete:"off",value:this.state.currentInput,onChange:this.handleChange}),this.state.showResetButton?n.a.createElement("button",{className:"absolute top-0 right-0 bottom-0 pa0 pr2 b--transparent flex justify-center items-center bg-transparent",onClick:this.resetSearch},n.a.createElement(l.b,{name:"close",className:"w4 h4 pa2 fill-midgrey bg-white br-100 pointer dim"})):null)},t}(n.a.Component);C.propTypes={searchActive:s.a.func.isRequired,currentRefinement:s.a.string,refine:s.a.func};var x=A(C),O=i(913),j=function(e){var t=e.children;return n.a.createElement(O.a,{indexName:"integration"},t)};j.propTypes={children:s.a.node.isRequired};var N=j,P=(i(32),i(163),i(182),i(904)),I=i(164),M=i(309),D=function(e){var t=e.location,i=e.searchActive,a=e.data,r=i?"/integrations/":t.pathname,s=Object(M.a)(a.allGhostPost.edges,"integrations");return s.unshift({name:"All Integrations",slug:"all-integrations",link:"/integrations/"}),n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"ma0 mb2","data-cy":"filter"},"Filter by"),s.map(function(e,t){var i=r===e.link?"blue fw6":"midgrey";return n.a.createElement(I.Link,{to:e.link,className:i+" link pa2 pl0",key:t,"data-cy":e.slug+"-filter"},e.name)}))};D.propTypes={location:s.a.object.isRequired,searchActive:s.a.bool.isRequired,data:s.a.shape({allGhostPost:s.a.shape({edges:s.a.arrayOf(s.a.shape({post:s.a.shape({tag:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string}))})}).isRequired).isRequired}).isRequired}).isRequired};var F=function(e){return n.a.createElement(I.StaticQuery,{query:"420472741",render:function(t){return n.a.createElement(D,Object.assign({data:t},e))},data:P})},T=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={posts:i.props.posts,activeSorting:"date",searchActive:!1},i.searchSwitch=i.searchSwitch.bind(p()(p()(i))),i}u()(t,e);var i=t.prototype;return i.searchSwitch=function(e){this.setState(function(t){return{searchActive:e||!t.searchActive}})},i.sortBy=function(e){var t,i;switch(e){case"date":t="node.published_at",i="node.title",this.setState(function(){return{activeSorting:"date"}});break;case"title":t="node.title",i="node.published_at",this.setState(function(){return{activeSorting:"title"}})}var a=h.a.sortBy(this.state.posts,[t,i]);this.setState(function(){return{posts:a}})},i.render=function(){var e=this.state.posts;return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{headerDividerStyle:"shadow",header:n.a.createElement("div",{className:"bg-integrations-header-image"},n.a.createElement("div",{className:"bg-integrations-header-cover"},n.a.createElement("header",{className:"top-0 left-0 right-0 z-9999"},n.a.createElement(l.d,{theme:"light"})),n.a.createElement("div",{className:"pa-vw4 tc white"},n.a.createElement("h1",{className:y.a.sectionHeading+" gh-integration-header-shadow"},"Ghost Integrations"),n.a.createElement("p",{className:y.a.sectionSubHeading},"All your favourite apps and tools, integrated with Ghost"),n.a.createElement(x,{searchActive:this.searchSwitch}))))},n.a.createElement(N,null,n.a.createElement("div",{className:y.a.page.xl+"pt10"},n.a.createElement("div",{className:"flex items-start br4"},n.a.createElement("div",{className:"gh-integration-sidebar flex-shrink-0 w50 mr5 dn db-ns"},n.a.createElement("div",{className:"flex flex-column mb6","data-cy":"sort"},n.a.createElement("h3",{className:"ma0 mb2"},"Sort by"),n.a.createElement("a",{href:"#",className:"link pa2 pl0 "+("date"===this.state.activeSorting?"blue fw6":"midgrey"),onClick:this.sortBy.bind(this,"date")},"Most popular"),n.a.createElement("a",{href:"#",className:"link pa2 pl0 "+("title"===this.state.activeSorting?"blue fw6":"midgrey"),onClick:this.sortBy.bind(this,"title")},"A – Z")),n.a.createElement("div",{className:"flex flex-column mb6"},n.a.createElement(F,{location:this.props.location,searchActive:this.state.searchActive}))),this.state.searchActive?n.a.createElement(R,null):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"gh-integrations w-100"},e.map(function(e){var t=e.node;return n.a.createElement(c,{key:t.id,post:t,section:"integrations"})}))))))))},t}(n.a.Component);T.propTypes={posts:s.a.array.isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired};var U=T,B=i(167);i.d(t,"pageQuery",function(){return W});var G=function(e){var t=e.data,i=e.location,a=Object(B.b)("integrations"),r=t.allGhostPost.edges;return n.a.createElement(n.a.Fragment,null,n.a.createElement(B.a,{data:t,location:i,type:"website",title:"Ghost Integrations – Connect your favourite Tools & Apps to your site",description:"Keep your stack aligned and integrate your most used tools & apps with your Ghost site: automation, analytics, marketing, support and much more! 👉",image:a}),n.a.createElement(U,{posts:r,location:i}))};G.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,allGhostPost:s.a.object.isRequired}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired};t.default=G;var W="997620647"},167:function(e,t,i){"use strict";var a=i(0),n=i.n(a),r=i(4),s=i.n(r),l=i(166),o=i.n(l),c=(i(163),i(175)),m=i(160),u=i.n(m),g=i(159),p=i.n(g),d=function(e,t){var i=[];return t?i.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+u.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):i.push("https://vwa.la/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),i=u.a.compact(i),{name:t?e.name:"Ghost",sameAsArray:i.length?'["'+u.a.join(i,'", "')+'"]':null,image:t?e.profile_image:null}};d.defaultProps={fetchAuthorData:!1},d.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=d,b=function(e){var t=e.image;return n.a.createElement(p.a,null,n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:image",content:t}),n.a.createElement("meta",{property:"og:image",content:t}),n.a.createElement("meta",{property:"og:image:width",content:"1000"}),n.a.createElement("meta",{property:"og:image:height",content:"523"}))};b.propTypes={image:s.a.string.isRequired};var y=b,v=function(e){var t=e.data,i=e.canonical,a=e.fetchAuthorData,r=e.title,s=e.overwriteDefaultImage,l=e.image,o=t.ghostPost,m=t.site.siteMetadata,g=h(o.primary_author,a),d=u.a.map(Object(c.tags)(o,{visibility:"public",fn:function(e){return e}}),"name"),b=d[0]||{name:"General",slug:"general"},v=s&&o.feature_image?o.feature_image:l;return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,null,n.a.createElement("title",null,o.meta_title||r||o.title),n.a.createElement("meta",{name:"description",content:o.meta_description||o.excerpt}),n.a.createElement("link",{rel:"canonical",href:i}),n.a.createElement("meta",{property:"og:site_name",content:m.title}),n.a.createElement("meta",{name:"og:type",content:"article"}),n.a.createElement("meta",{name:"og:title",content:o.og_title||r||o.meta_title||o.title}),n.a.createElement("meta",{name:"og:description",content:o.og_description||o.excerpt||o.meta_description}),n.a.createElement("meta",{property:"og:url",content:i}),n.a.createElement("meta",{property:"article:published_time",content:o.published_at}),n.a.createElement("meta",{property:"article:modified_time",content:o.updated_at}),d.map(function(e,t){return n.a.createElement("meta",{property:"article:tag",content:e,key:t})}),n.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/vwalamarketing/"}),n.a.createElement("meta",{name:"twitter:title",content:o.twitter_title||r||o.meta_title||o.title}),n.a.createElement("meta",{name:"twitter:description",content:o.twitter_description||o.excerpt||o.meta_description}),n.a.createElement("meta",{name:"twitter:url",content:i}),n.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),n.a.createElement("meta",{name:"twitter:data1",content:g.name}),n.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),n.a.createElement("meta",{name:"twitter:data2",content:b}),n.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),n.a.createElement("meta",{name:"twitter:creator",content:"@vwalamarketing"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+g.name+'",\n                            '+(g.image?g.sameAsArray?'"image": "'+g.image+'",':'"image": "'+g.image+'"':"")+"\n                            "+(g.sameAsArray?'"sameAs": '+g.sameAsArray:"")+"\n                        },\n                        "+(d.length?'"keywords": "'+u.a.join(d,", ")+'",':"")+'\n                        "headline": "'+(o.meta_title||r||o.title)+'",\n                        "url": "'+i+'",\n                        "datePublished": "'+o.published_at+'",\n                        "dateModified": "'+o.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+v+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(o.meta_description||o.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.siteUrl+'"\n                        }\n                    }\n                ')),n.a.createElement(y,{image:v}))};v.defaultProps={fetchAuthorData:!1},v.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var f=v,E=function(e){var t=e.data,i=e.canonical,a=t.markdownRemark,r=a.frontmatter,s=t.site.siteMetadata,l=r.date?new Date(r.date).toISOString():new Date("2018-10-15").toISOString(),o=r.keywords&&r.keywords.length?r.keywords[0]:null,c=C();return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,null,n.a.createElement("title",null,r.meta_title||r.title),n.a.createElement("meta",{name:"description",content:r.meta_description||a.excerpt}),n.a.createElement("link",{rel:"canonical",href:i}),n.a.createElement("meta",{property:"og:site_name",content:s.title}),n.a.createElement("meta",{name:"og:type",content:"article"}),n.a.createElement("meta",{name:"og:title",content:r.meta_title||r.title}),n.a.createElement("meta",{name:"og:description",content:r.meta_description||a.excerpt}),n.a.createElement("meta",{property:"og:url",content:i}),n.a.createElement("meta",{property:"article:published_time",content:l}),r.keywords&&r.keywords.length?r.keywords.map(function(e,t){return n.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,n.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),n.a.createElement("meta",{name:"twitter:title",content:r.meta_title||r.title}),n.a.createElement("meta",{name:"twitter:description",content:r.meta_description||a.excerpt}),n.a.createElement("meta",{name:"twitter:url",content:i}),n.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),n.a.createElement("meta",{name:"twitter:data1",content:a.timeToRead+" min read"}),o?n.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,o?n.a.createElement("meta",{name:"twitter:data2",content:o}):null,n.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),n.a.createElement("meta",{name:"twitter:creator",content:"@vwalamarketing"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://vwa.la/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/vwalamarketing/"\n                            ]\n                        },\n                        '+(r.keywords&&r.keywords.length?'"keywords": "'+u.a.join(r.keywords,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+i+'",\n                        "datePublished": "'+l+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+c+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(r.meta_description||a.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),n.a.createElement(y,{image:c}))};E.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var w=E,R=function(e){var t=e.data,i=e.canonical,a=e.title,r=e.description,s=e.image,l=e.type;return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:r}),n.a.createElement("link",{rel:"canonical",href:i}),n.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:title",content:a}),n.a.createElement("meta",{property:"og:description",content:r}),n.a.createElement("meta",{property:"og:url",content:i}),n.a.createElement("meta",{name:"twitter:title",content:a}),n.a.createElement("meta",{name:"twitter:description",content:r}),n.a.createElement("meta",{name:"twitter:url",content:i}),n.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(l&&"series"===l?'"Series"':'"WebSite"')+',\n                        "url": "'+i+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+r+'"\n                    }\n                ')),n.a.createElement(y,{image:s}))};R.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var q=R,k=function(e){var t=e.data,i=e.type,a=e.title,r=e.description,s=e.image,l=e.fetchAuthorData,c=e.overwriteDefaultImage,m=e.location,u=t||{},g=u.ghostPost,p=u.markdownRemark,d=t.site.siteMetadata,h=o.a.resolve(d.siteUrl,m.pathname,"/");if("article"===i){if(g)return n.a.createElement(f,{data:t,canonical:h,fetchAuthorData:l,title:a,image:s,overwriteDefaultImage:c});if(p)return n.a.createElement(w,{data:t,canonical:h})}else if("website"===i||"series"===i)return n.a.createElement(q,{data:t,canonical:h,title:a,description:r,image:s,type:i});return null};k.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var S=k,_={default:o.a.resolve("https://docs.vwa.la","/images/meta/hero.png")},A=function(e){return _[e=e||"default"]};A.proptypes={section:s.a.string.isRequired};var C=A;i.d(t,"a",function(){return S}),i.d(t,"b",function(){return C})},309:function(e,t,i){"use strict";i.d(t,"a",function(){return o});i(53);var a=i(4),n=i.n(a),r=i(160),s=i.n(r),l=i(175),o=function(e,t){var i=[];return t=/^(?:\/?)([a-zA-Z\d-]*)(?:\/?)/i.exec(t)[1],s.a.forEach(e,function(e){var t=e.node,a=Object(l.tags)(t,{visibility:"public",fn:function(e){return e}});i.push(a)}),i=s.a.flattenDeep(i),s.a.map(i,function(e){e.link=t?"/"+t+"/"+e.slug+"/":"/"+e.slug+"/"}),s.a.sortedUniqBy(s.a.sortBy(s.a.flattenDeep(i),"name"),"name")};o.proptypes={posts:n.a.arrayOf(n.a.shape({node:n.a.shape({tags:n.a.arrayOf(n.a.shape({name:n.a.string.isRequired,slug:n.a.string.isRequired})).isRequired}).isRequired})).isRequired,linkPrefix:n.a.string}},904:function(e){e.exports={data:{allGhostPost:{edges:[{node:{tags:[{name:"Automation",slug:"automation",visibility:"public"},{name:"Utility",slug:"utility",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Analytics",slug:"analytics",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Community",slug:"community",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Community",slug:"community",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Automation",slug:"automation",visibility:"public"},{name:"Utility",slug:"utility",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"#integration",slug:"hash-integration",visibility:"internal"},{name:"Content",slug:"content",visibility:"public"}]}},{node:{tags:[{name:"Social",slug:"social",visibility:"public"},{name:"Content",slug:"content",visibility:"public"},{name:"SEO",slug:"seo",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Email",slug:"email",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Marketing",slug:"marketing",visibility:"public"},{name:"Content",slug:"content",visibility:"public"},{name:"SEO",slug:"seo",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Ecommerce",slug:"ecommerce",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Surveys & Forms",slug:"surveys-forms",visibility:"public"},{name:"Card",slug:"card",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Card",slug:"card",visibility:"public"},{name:"Ecommerce",slug:"ecommerce",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Community",slug:"community",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Community",slug:"community",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Analytics",slug:"analytics",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Automation",slug:"automation",visibility:"public"},{name:"Social",slug:"social",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Utility",slug:"utility",visibility:"public"},{name:"Storage",slug:"storage",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Email",slug:"email",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Community",slug:"community",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Social",slug:"social",visibility:"public"},{name:"Content",slug:"content",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Card",slug:"card",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Storage",slug:"storage",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Storage",slug:"storage",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Community",slug:"community",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"Social",slug:"social",visibility:"public"},{name:"Card",slug:"card",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Storage",slug:"storage",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"#integration",slug:"hash-integration",visibility:"internal"},{name:"Storage",slug:"storage",visibility:"public"}]}},{node:{tags:[{name:"Card",slug:"card",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Social",slug:"social",visibility:"public"},{name:"Content",slug:"content",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"Card",slug:"card",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"#integration",slug:"hash-integration",visibility:"internal"},{name:"Card",slug:"card",visibility:"public"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Marketing",slug:"marketing",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Surveys & Forms",slug:"surveys-forms",visibility:"public"},{name:"Card",slug:"card",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"Card",slug:"card",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Analytics",slug:"analytics",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Email",slug:"email",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Email",slug:"email",visibility:"public"},{name:"Marketing",slug:"marketing",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Surveys & Forms",slug:"surveys-forms",visibility:"public"},{name:"Card",slug:"card",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Utility",slug:"utility",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Analytics",slug:"analytics",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Marketing",slug:"marketing",visibility:"public"},{name:"Utility",slug:"utility",visibility:"public"},{name:"Automation",slug:"automation",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Surveys & Forms",slug:"surveys-forms",visibility:"public"},{name:"Card",slug:"card",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Content",slug:"content",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Social",slug:"social",visibility:"public"},{name:"Content",slug:"content",visibility:"public"},{name:"Community",slug:"community",visibility:"public"},{name:"SEO",slug:"seo",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Storage",slug:"storage",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Email",slug:"email",visibility:"public"},{name:"Marketing",slug:"marketing",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Email",slug:"email",visibility:"public"},{name:"Marketing",slug:"marketing",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Ecommerce",slug:"ecommerce",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Marketing",slug:"marketing",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Surveys & Forms",slug:"surveys-forms",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"}]}},{node:{tags:[{name:"Utility",slug:"utility",visibility:"public"},{name:"Automation",slug:"automation",visibility:"public"},{name:"Content",slug:"content",visibility:"public"},{name:"Marketing",slug:"marketing",visibility:"public"},{name:"Email",slug:"email",visibility:"public"},{name:"Analytics",slug:"analytics",visibility:"public"},{name:"Storage",slug:"storage",visibility:"public"},{name:"Community",slug:"community",visibility:"public"},{name:"Surveys & Forms",slug:"surveys-forms",visibility:"public"},{name:"SEO",slug:"seo",visibility:"public"},{name:"#integration",slug:"hash-integration",visibility:"internal"},{name:"Social",slug:"social",visibility:"public"},{name:"Ecommerce",slug:"ecommerce",visibility:"public"}]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-integrations-js-2c0ec04a583192a9f240.js.map