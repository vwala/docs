(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{155:function(e,t,a){"use strict";a.r(t);var i=a(7),n=a.n(i),r=a(52),l=a.n(r),s=a(4),o=a.n(s),c=a(0),m=a.n(c),p=a(181),u=a(202),h=a(174),d=(a(186),a(885),a(53),a(201)),g=a.n(d),k=(a(74),a(163)),f=function(e){var t=e.link,a=e.title,i=e.linkClasses;return t?t.match(/^\s?http(s?)/gi)?m.a.createElement("a",{href:t,className:"link db pv6px pr2 lh-1-5 pl0 "+i,target:"_blank",rel:"noopener noreferrer"},a):m.a.createElement(k.Link,{to:t,className:"link db pv6px pr2 lh-1-5 pl0 "+i},a):m.a.createElement(m.a.Fragment,null,(void 0).props.title)};f.propTypes={link:o.a.string.isRequired,title:o.a.string.isRequired,linkClasses:o.a.string.isRequired};var b=f,w=function(e){var t=e.items,a=e.location;return m.a.createElement("ul",{className:"relative sidebar-list ma0 pa0 list mb5 pl6 mt1"},t.map(function(e,t){return m.a.createElement("li",{key:t},m.a.createElement(b,{link:e.link,title:e.title,linkClasses:e.link===a.pathname?"sidebarlink-active blue fw6":"midgrey fw4 hover-blue-l2"}))}))};w.propTypes={items:o.a.arrayOf(o.a.shape({title:o.a.string.isRequired,link:o.a.string.isRequired}).isRequired).isRequired,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired};var v=w,y=function(e){try{var t=a(886)("./"+e+".yaml")[0]}catch(i){throw i}return t};y.propTypes={sidebar:o.a.string.isRequired};var E=y,R=function(e){var t=e.sidebar,a=e.location,i=E(t);return t&&i&&i.groups?m.a.createElement("nav",{className:"mt5 mb5 mt10-ns mb0-ns relative","data-cy":"sidebar"},i.groups.map(function(e,t){return m.a.createElement("div",{key:t,className:"mt1"},e.items.some(function(e){return e.link===a.pathname})?m.a.createElement(m.a.Fragment,null,m.a.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?m.a.createElement(b,{link:e.items[0].link,title:e.group,linkClasses:"midgrey link"}):e.group),m.a.createElement(v,{key:t,items:e.items,location:a})):m.a.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?m.a.createElement(b,{link:e.items[0].link,title:e.group,linkClasses:"midgrey hover-blue-l2 link"}):e.group))})):null};R.defaultProps={location:{pathname:"/"}},R.propTypes={sidebar:o.a.string.isRequired,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired};var q=R,x=(a(76),a(160)),N=a(203),_=function(e){if(e&&e.length>40){var t=e.split(" ");return t.splice(0,t.length>5?5:t.length).join(" ")+".."}return e},O=function(e){var t=e.prev,a=e.next;return m.a.createElement("div",{className:"grid-12"},t?m.a.createElement(k.Link,{to:t.link,className:"col-6 flex pa10 pl0 tdn justify-start items-center blue nudge-left--1 prevnext-hover ba b--transparent"},m.a.createElement(N.a,{name:"arrow-left",className:"w5 h5 fill-blue"}),m.a.createElement("div",{className:"ml4"},t.group?m.a.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},t.group):null,m.a.createElement("p",{className:x.a.excerpt+" nt1 di fw5"},_(t.title)))):m.a.createElement("div",{className:"col-6"}),a?m.a.createElement(k.Link,{to:a.link,className:"col-6 flex pr0 pa10 tdn justify-end items-center blue prevnext-hover ba b--transparent"},m.a.createElement("div",{className:"tr mr4"},a.group?m.a.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},a.group):null,m.a.createElement("p",{className:x.a.excerpt+" nt1 di fw5"},_(a.title))),m.a.createElement(N.a,{name:"arrow-right",className:"w5 h5 fill-blue"})):m.a.createElement("div",{className:"col-6"}))};O.propTypes={prev:o.a.shape({title:o.a.string.isRequired,link:o.a.string.isRequired,group:o.a.string}),next:o.a.shape({title:o.a.string.isRequired,link:o.a.string.isRequired,group:o.a.string,description:o.a.string})};var I=O,j=function(e){var t=e.sidebar,a=e.location,i=e.next;if(t){var n=E(t);if(!n)return null;var r=n.groups,l=[];g.a.forEach(r,function(e){g.a.forEach(e.items,function(t){t.group=e.group,l.push(t)})});var s=g.a.findIndex(l,function(e){return e.link===a.pathname}),o=l[s-1],c=l[s+1];return c||"concepts"!==t||(c={group:"Setup",link:"/setup/",title:"Install Ghost"}),m.a.createElement(I,{prev:o,next:c})}if(i&&i.title&&i.url){var p={title:p.title,link:p.url,description:p.description||""};return m.a.createElement(I,{next:p})}return null};j.propTypes={sidebar:o.a.string,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired,next:o.a.shape({title:o.a.string,url:o.a.string})};var S=j;a.d(t,"articleQuery",function(){return M});var T=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isToggleOn:!1},a.toggleMobileMenu=a.toggleMobileMenu.bind(l()(l()(a))),a}n()(t,e);var a=t.prototype;return a.toggleMobileMenu=function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}})},a.render=function(){var e=this,t=this.props.location,a=this.props.data.markdownRemark,i=Object(h.b)(),n={},r=(a.frontmatter||"").sidebar,l=!1!==a.frontmatter.toc;return r&&l?(n.leftSidebar=m.a.createElement(q,{location:t,sidebar:r}),n.rightSidebar=m.a.createElement("div",{className:"nr3 sticky top-25"},m.a.createElement(p.f,{className:"pr4",listClasses:"mt2"})),n.justification="justify-between"):r||l?(n.leftSidebar=r?m.a.createElement(q,{location:t,sidebar:r}):m.a.createElement("div",{className:"nr3 sticky top-25"},m.a.createElement(p.f,{listClasses:"lefty",className:"mt5 mb5 mt10-ns mb0-ns",showHeading:!1})),n.justification="justify-start"):n.justification="justify-center",m.a.createElement(m.a.Fragment,null,m.a.createElement(h.a,{data:this.props.data,location:t,type:"article",image:i}),m.a.createElement(u.a,this.props,m.a.createElement(p.e,{location:t}),m.a.createElement("div",{className:x.a.page.xl+" flex flex-column flex-row-ns "+n.justification+" relative"},m.a.createElement("button",{onClick:function(){return e.toggleMobileMenu()},className:"bg-transparent bn appearance-none absolute right-7 db dn-ns",style:{top:"-40px"}},m.a.createElement(p.b,{name:"hamburger",className:"w6 h-auto stroke-white db dn-ns"})),n.leftSidebar?m.a.createElement("div",{className:(this.state.isToggleOn?"mobile-nav-open":"")+" w-100 w-sidebar-ns pr10 pl5 pl0-ns flex-shrink-0-l relative left-sidebar"},n.leftSidebar):null,m.a.createElement("div",null,m.a.createElement("div",{className:"w-100 mw-content bg-white shadow-2 br4 "+(this.state.isToggleOn?"":" br--bottom")},m.a.createElement("article",{className:"flex-auto pa5 pa8-m pa15-l pt10-ns pb10-ns pt10-l pb10-l"},m.a.createElement("h1",{className:x.a.h1+" darkgrey"},a.frontmatter.title),m.a.createElement("section",{className:"post-content external-scripts",dangerouslySetInnerHTML:{__html:a.html}})),m.a.createElement("div",{className:"mw-content pl5 pr5 pl15-ns pr15-ns bt b--whitegrey mt5"},m.a.createElement(S,{location:t,sidebar:r,next:a.frontmatter.next})))),n.rightSidebar?m.a.createElement("div",{className:"order-3 w-sidebar flex-shrink-0 dn db-l pt10 pl7"},n.rightSidebar):null)))},t}(m.a.Component);T.propTypes={data:o.a.shape({site:o.a.shape({siteMetadata:o.a.shape({siteUrl:o.a.string.isRequired,title:o.a.string.isRequired,description:o.a.string.isRequired}).isRequired}).isRequired,markdownRemark:o.a.shape({frontmatter:o.a.shape({toc:o.a.bool,sidebar:o.a.string,title:o.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:o.a.object.isRequired};t.default=T;var M="4080165082"},174:function(e,t,a){"use strict";var i=a(4),n=a.n(i),r=a(0),l=a.n(r),s=a(169),o=a.n(s),c=a(201),m=a.n(c),p=a(161),u=a.n(p),h=function(e){var t=e.image;return l.a.createElement(u.a,null,l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.a.createElement("meta",{name:"twitter:image",content:t}),l.a.createElement("meta",{property:"og:image",content:t}),l.a.createElement("meta",{property:"og:image:width",content:"1000"}),l.a.createElement("meta",{property:"og:image:height",content:"523"}))};h.propTypes={image:n.a.string.isRequired};var d=h,g=function(e){var t=e.data,a=e.canonical,i=t.markdownRemark,n=i.frontmatter,r=t.site.siteMetadata,s=n.date?new Date(n.date).toISOString():new Date("2018-10-15").toISOString(),o=n.keywords&&n.keywords.length?n.keywords[0]:null,c=R();return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("title",null,n.meta_title||n.title),l.a.createElement("meta",{name:"description",content:n.meta_description||i.excerpt}),l.a.createElement("link",{rel:"canonical",href:a}),l.a.createElement("meta",{property:"og:site_name",content:r.title}),l.a.createElement("meta",{name:"og:type",content:"article"}),l.a.createElement("meta",{name:"og:title",content:n.meta_title||n.title}),l.a.createElement("meta",{name:"og:description",content:n.meta_description||i.excerpt}),l.a.createElement("meta",{property:"og:url",content:a}),l.a.createElement("meta",{property:"article:published_time",content:s}),n.keywords&&n.keywords.length?n.keywords.map(function(e,t){return l.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,l.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),l.a.createElement("meta",{name:"twitter:title",content:n.meta_title||n.title}),l.a.createElement("meta",{name:"twitter:description",content:n.meta_description||i.excerpt}),l.a.createElement("meta",{name:"twitter:url",content:a}),l.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),l.a.createElement("meta",{name:"twitter:data1",content:i.timeToRead+" min read"}),o?l.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,o?l.a.createElement("meta",{name:"twitter:data2",content:o}):null,l.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),l.a.createElement("meta",{name:"twitter:creator",content:"@vwalamarketing"}),l.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://vwa.la/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/vwalamarketing/"\n                            ]\n                        },\n                        '+(n.keywords&&n.keywords.length?'"keywords": "'+m.a.join(n.keywords,", ")+'",':"")+'\n                        "headline": "'+(n.meta_title||n.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+s+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+c+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(n.meta_description||i.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+r.siteUrl+'"\n                        }\n                    }\n                ')),l.a.createElement(d,{image:c}))};g.propTypes={data:n.a.shape({markdownRemark:n.a.shape({frontmatter:n.a.shape({title:n.a.string.isRequired,keywords:n.a.arrayOf(n.a.string),meta_title:n.a.string,meta_description:n.a.string,date:n.a.string}).isRequired,excerpt:n.a.string.isRequired,timeToRead:n.a.number}).isRequired,site:n.a.shape({siteMetadata:n.a.shape({siteUrl:n.a.string.isRequired,title:n.a.string.isRequired,description:n.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:n.a.string.isRequired};var k=g,f=function(e){var t=e.data,a=e.canonical,i=e.title,n=e.description,r=e.image,s=e.type;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("title",null,i),l.a.createElement("meta",{name:"description",content:n}),l.a.createElement("link",{rel:"canonical",href:a}),l.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:title",content:i}),l.a.createElement("meta",{property:"og:description",content:n}),l.a.createElement("meta",{property:"og:url",content:a}),l.a.createElement("meta",{name:"twitter:title",content:i}),l.a.createElement("meta",{name:"twitter:description",content:n}),l.a.createElement("meta",{name:"twitter:url",content:a}),l.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),l.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(s&&"series"===s?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+r+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+n+'"\n                    }\n                ')),l.a.createElement(d,{image:r}))};f.propTypes={data:n.a.shape({site:n.a.shape({siteMetadata:n.a.shape({siteUrl:n.a.string.isRequired,title:n.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:n.a.string.isRequired,title:n.a.string.isRequired,description:n.a.string.isRequired,image:n.a.string.isRequired,type:n.a.oneOf(["website","series"]).isRequired};var b=f,w=function(e){var t=e.data,a=e.type,i=e.title,n=e.description,r=e.image,s=(e.fetchAuthorData,e.overwriteDefaultImage,e.location),c=t||{},m=c.ghostPost,p=c.markdownRemark,u=t.site.siteMetadata,h=o.a.resolve(u.siteUrl,s.pathname,"/");if("article"===a){if(m)return null;if(p)return l.a.createElement(k,{data:t,canonical:h})}else if("website"===a||"series"===a)return l.a.createElement(b,{data:t,canonical:h,title:i,description:n,image:r,type:a});return null};w.propTypes={data:n.a.shape({site:n.a.shape({siteMetadata:n.a.shape({siteUrl:n.a.string.isRequired,title:n.a.string.isRequired,description:n.a.string.isRequired}).isRequired}).isRequired,ghostPost:n.a.object,markdownRemark:n.a.object}).isRequired,location:n.a.shape({pathname:n.a.string.isRequired}).isRequired,type:n.a.oneOf(["website","series","article"]).isRequired,title:n.a.string,description:n.a.string,image:n.a.string,fetchAuthorData:n.a.bool,overwriteDefaultImage:n.a.bool};var v=w,y={default:o.a.resolve("https://docs.vwa.la","/images/meta/hero.png")},E=function(e){return y[e=e||"default"]};E.proptypes={section:n.a.string.isRequired};var R=E;a.d(t,"a",function(){return v}),a.d(t,"b",function(){return R})},885:function(e,t,a){"use strict";var i=a(11),n=a(75)(6),r="findIndex",l=!0;r in[]&&Array(1)[r](function(){l=!1}),i(i.P+i.F*l,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a(33)(r)},886:function(e,t,a){var i={"./gatsby.yaml":887,"./ghost-cli.yaml":888,"./handlebars.yaml":889,"./influencer.yaml":890,"./merchant.yaml":891,"./releases.yaml":892,"./user.yaml":893};function n(e){var t=r(e);return a(t)}function r(e){var t=i[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=886},887:function(e,t){e.exports=[{title:"Gatsby",items:[{title:"Overview",link:"/api/gatsby/"}]}]},888:function(e,t){e.exports=[{groups:[{group:"Commands",items:[{title:"Overview",link:"/api/ghost-cli/"},{title:"Config",link:"/api/ghost-cli/config/"},{title:"Install",link:"/api/ghost-cli/install/"},{title:"Setup",link:"/api/ghost-cli/setup/"},{title:"Start",link:"/api/ghost-cli/start/"},{title:"Stop",link:"/api/ghost-cli/stop/"},{title:"Restart",link:"/api/ghost-cli/restart/"},{title:"Update",link:"/api/ghost-cli/update/"},{title:"Doctor",link:"/api/ghost-cli/doctor/"},{title:"Uninstall",link:"/api/ghost-cli/uninstall/"},{title:"Help",link:"/api/ghost-cli/help/"}]},{group:"Utilities",items:[{title:"ls",link:"/api/ghost-cli/ls/"},{title:"run",link:"/api/ghost-cli/run/"},{title:"log",link:"/api/ghost-cli/log/"}]},{group:"Advanced",items:[{title:"Knowledgebase",link:"/api/ghost-cli/knowledgebase/"}]}]}]},889:function(e,t){e.exports=[{groups:[{group:"Handlebars Themes",items:[{title:"Overview",link:"/api/handlebars-themes/"},{title:"Structure",link:"/api/handlebars-themes/structure/"},{title:"Package.json",link:"/api/handlebars-themes/packagejson/"}]},{group:"Contexts",items:[{title:"Context Overview",link:"/api/handlebars-themes/context/"},{title:"Index",link:"/api/handlebars-themes/context/index/"},{title:"Post",link:"/api/handlebars-themes/context/post/"},{title:"Page",link:"/api/handlebars-themes/context/page/"},{title:"Author",link:"/api/handlebars-themes/context/author/"},{title:"Tag",link:"/api/handlebars-themes/context/tag/"}]},{group:"Functional Helpers",items:[{title:"Overview",link:"/api/handlebars-themes/helpers/functional/"},{title:"is",link:"/api/handlebars-themes/helpers/is/"},{title:"foreach",link:"/api/handlebars-themes/helpers/foreach/"},{title:"has",link:"/api/handlebars-themes/helpers/has/"},{title:"if",link:"/api/handlebars-themes/helpers/if/"},{title:"unless",link:"/api/handlebars-themes/helpers/unless/"},{title:"get",link:"/api/handlebars-themes/helpers/get/"}]},{group:"Data Helpers",items:[{title:"Overview",link:"/api/handlebars-themes/helpers/data/"},{title:"@config",link:"/api/handlebars-themes/helpers/config/"},{title:"@site",link:"/api/handlebars-themes/helpers/site/"},{title:"navigation",link:"/api/handlebars-themes/helpers/navigation/"},{title:"post",link:"/api/handlebars-themes/helpers/post/"},{title:"url",link:"/api/handlebars-themes/helpers/url/"},{title:"title",link:"/api/handlebars-themes/helpers/title/"},{title:"img_url",link:"/api/handlebars-themes/helpers/img_url/"},{title:"excerpt",link:"/api/handlebars-themes/helpers/excerpt/"},{title:"content",link:"/api/handlebars-themes/helpers/content/"},{title:"date",link:"/api/handlebars-themes/helpers/date/"},{title:"tags",link:"/api/handlebars-themes/helpers/tags/"},{title:"authors",link:"/api/handlebars-themes/helpers/authors/"},{title:"twitter",link:"/api/handlebars-themes/helpers/twitter/"},{title:"facebook",link:"/api/handlebars-themes/helpers/facebook/"}]},{group:"Utility Helpers",items:[{title:"Overview",link:"/api/handlebars-themes/helpers/utility/"},{title:"asset",link:"/api/handlebars-themes/helpers/asset/"},{title:"ghost_head/foot",link:"/api/handlebars-themes/helpers/ghost_head_foot/"},{title:"body_class",link:"/api/handlebars-themes/helpers/body_class/"},{title:"post_class",link:"/api/handlebars-themes/helpers/post_class/"},{title:"reading_time",link:"/api/handlebars-themes/helpers/reading_time/"},{title:"pagination",link:"/api/handlebars-themes/helpers/pagination/"},{title:"prev/next_post",link:"/api/handlebars-themes/helpers/prev_next_post/"},{title:"plural",link:"/api/handlebars-themes/helpers/plural/"},{title:"lang",link:"/api/handlebars-themes/helpers/lang/"},{title:"translate",link:"/api/handlebars-themes/helpers/translate/"},{title:"encode",link:"/api/handlebars-themes/helpers/encode/"},{title:"log",link:"/api/handlebars-themes/helpers/log/"},{title:"@labs",link:"/api/handlebars-themes/helpers/labs/"}]},{group:"Features",items:[{title:"Editor",link:"/api/handlebars-themes/editor/"},{title:"Responsive Images",link:"/api/handlebars-themes/responsive-images/"},{title:"Google AMP",link:"/api/handlebars-themes/google-amp/"},{title:"Subscribers",link:"/api/handlebars-themes/subscribers/"}]}]}]},890:function(e,t){e.exports=[{groups:[{group:"Help",items:[{title:"Getting started",link:"/influencer/getting-started/"},{title:"How do I earn commission?",link:"/influencer/how-do-i-earn-commission/"},{title:"So Im an influencer, what now?",link:"/influencer/so-im-an-influencer-what-now/"},{title:"Free product",link:"/influencer/free-product/"},{title:"What are store promotions?",link:"/influencer/what-are-store-promotions/"}]}]}]},891:function(e,t){e.exports=[{groups:[{group:"Help",items:[{title:"Is referral, affiliate and influencer marketing the same thing?",link:"/merchant/is-referral-affiliate-influencer-marketing-the-same-thing/"},{title:"How our pricing works",link:"/merchant/how-our-pricing-works/"},{title:"Getting started",link:"/merchant/getting-started/"},{title:"Installation Guide",link:"/merchant/installation-guide/"},{title:"Customising vwa.la",link:"/merchant/customisation/"},{title:"Adding a page to your store",link:"/merchant/adding-a-page-to-your-store/"},{title:"How to create a test influencer account or bulk upload influencers from another platform?",link:"/merchant/how-to-create-a-test-account-or-bulk-upload-data/"},{title:"How do influencer links work?",link:"/merchant/how-do-influencer-links-work/"},{title:"Inviting influencers",link:"/merchant/inviting-influencers/"},{title:"Promotions",link:"/merchant/promotions/"},{title:"Influencer commission",link:"/merchant/influencer-commission/"},{title:"Influencer/group specific commission",link:"/merchant/influencer-group-specific-commission/"},{title:"Paying commission",link:"/merchant/paying-commission/"},{title:"Can I have multiple stores?",link:"/merchant/can-i-have-multiple-stores/"},{title:"Integrating with other apps",link:"/merchant/integrating-with-other-apps/"},{title:"Influencer discount code / link misuse",link:"/merchant/influencer-discount-code-link-misuse/"},{title:"Exporting your data",link:"/merchant/exporting-your-data/"}]}]}]},892:function(e,t){e.exports=[{groups:[{group:"Releases",items:[{title:"2019-05-31",link:"/releases/2019-05-31/"},{title:"2019-01-31",link:"/releases/2019-01-31/"},{title:"2018-12-07",link:"/releases/2018-12-07/"},{title:"2018-10-15",link:"/releases/2018-10-15/"},{title:"2018-09-15",link:"/releases/2018-09-15/"},{title:"2018-08-30",link:"/releases/2018-08-30/"},{title:"2018-07-20",link:"/releases/2018-07-20/"},{title:"2018-07-08",link:"/releases/2018-07-08/"},{title:"2018-07-01",link:"/releases/2018-07-01/"},{title:"2018-04-20",link:"/releases/2018-04-20/"},{title:"2018-03-25",link:"/releases/2018-03-25/"},{title:"2018-02-10",link:"/releases/2018-02-10/"},{title:"2018-01-25",link:"/releases/2018-01-25/"},{title:"2018-01-20",link:"/releases/2018-01-20/"},{title:"2018-01-14",link:"/releases/2018-01-14/"},{title:"2017-12-24",link:"/releases/2017-12-24/"},{title:"2017-12-06",link:"/releases/2017-12-06/"},{title:"2017-10-18",link:"/releases/2017-10-18/"},{title:"2017-09-30",link:"/releases/2017-09-30/"},{title:"2017-09-16",link:"/releases/2017-09-16/"},{title:"2017-08-30",link:"/releases/2017-08-30/"},{title:"2017-08-17",link:"/releases/2017-08-17/"},{title:"2017-08-06",link:"/releases/2017-08-06/"},{title:"2017-07-20",link:"/releases/2017-07-20/"},{title:"2017-07-01",link:"/releases/2017-07-01/"},{title:"2017-06-24",link:"/releases/2017-06-24/"},{title:"2017-06-13",link:"/releases/2017-06-13/"},{title:"2017-06-01",link:"/releases/2017-06-01/"},{title:"2017-05-05",link:"/releases/2017-05-05/"},{title:"2017-05-01",link:"/releases/2017-05-01/"},{title:"2017-03-20",link:"/releases/2017-03-20/"},{title:"2017-03-10",link:"/releases/2017-03-10/"}]}]}]},893:function(e,t){e.exports=[{groups:[{group:"User account help",items:[{title:"I can't log in",link:"/user/i-cant-log-in/"},{title:"How do I change my email?",link:"/user/how-do-i-change-my-email/"},{title:"How to pronounce vwa.la?",link:"/user/how-to-pronounce-vwala/"}]}]}]}}]);
//# sourceMappingURL=component---src-templates-markdown-post-js-a46ef866500c371bef33.js.map