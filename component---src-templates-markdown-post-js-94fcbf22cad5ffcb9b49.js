(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{157:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(52),l=a.n(r),s=a(4),o=a.n(s),c=a(0),m=a.n(c),u=a(197),p=a(304),d=a(302),g=(a(182),a(885),a(53),a(301)),h=a.n(g),f=(a(74),a(161)),k=function(e){var t=e.link,a=e.title,n=e.linkClasses;return t?t.match(/^\s?http(s?)/gi)?m.a.createElement("a",{href:t,className:"link db pv6px pr2 lh-1-5 pl0 "+n,target:"_blank",rel:"noopener noreferrer"},a):m.a.createElement(f.Link,{to:t,className:"link db pv6px pr2 lh-1-5 pl0 "+n},a):m.a.createElement(m.a.Fragment,null,(void 0).props.title)};k.propTypes={link:o.a.string.isRequired,title:o.a.string.isRequired,linkClasses:o.a.string.isRequired};var w=k,E=function(e){var t=e.items,a=e.location;return m.a.createElement("ul",{className:"relative sidebar-list ma0 pa0 list mb5 pl6 mt1"},t.map(function(e,t){return m.a.createElement("li",{key:t},m.a.createElement(w,{link:e.link,title:e.title,linkClasses:e.link===a.pathname?"sidebarlink-active blue fw6":"midgrey fw4 hover-blue-l2"}))}))};E.propTypes={items:o.a.arrayOf(o.a.shape({title:o.a.string.isRequired,link:o.a.string.isRequired}).isRequired).isRequired,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired};var y=E,b=function(e){try{var t=a(886)("./"+e+".yaml")[0]}catch(n){throw n}return t};b.propTypes={sidebar:o.a.string.isRequired};var v=b,R=function(e){var t=e.sidebar,a=e.location,n=v(t);return t&&n&&n.groups?m.a.createElement("nav",{className:"mt5 mb5 mt10-ns mb0-ns relative","data-cy":"sidebar"},n.groups.map(function(e,t){return m.a.createElement("div",{key:t,className:"mt1"},e.items.some(function(e){return e.link===a.pathname})?m.a.createElement(m.a.Fragment,null,m.a.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?m.a.createElement(w,{link:e.items[0].link,title:e.group,linkClasses:"midgrey link"}):e.group),m.a.createElement(y,{key:t,items:e.items,location:a})):m.a.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?m.a.createElement(w,{link:e.items[0].link,title:e.group,linkClasses:"midgrey hover-blue-l2 link"}):e.group))})):null};R.defaultProps={location:{pathname:"/"}},R.propTypes={sidebar:o.a.string.isRequired,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired};var q=R,x=(a(76),a(162)),N=a(199),I=function(e){if(e&&e.length>40){var t=e.split(" ");return t.splice(0,t.length>5?5:t.length).join(" ")+".."}return e},j=function(e){var t=e.prev,a=e.next;return m.a.createElement("div",{className:"grid-12"},t?m.a.createElement(f.Link,{to:t.link,className:"col-6 flex pa10 pl0 tdn justify-start items-center blue nudge-left--1 prevnext-hover ba b--transparent"},m.a.createElement(N.a,{name:"arrow-left",className:"w5 h5 fill-blue"}),m.a.createElement("div",{className:"ml4"},t.group?m.a.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},t.group):null,m.a.createElement("p",{className:x.a.excerpt+" nt1 di fw5"},I(t.title)))):m.a.createElement("div",{className:"col-6"}),a?m.a.createElement(f.Link,{to:a.link,className:"col-6 flex pr0 pa10 tdn justify-end items-center blue prevnext-hover ba b--transparent"},m.a.createElement("div",{className:"tr mr4"},a.group?m.a.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},a.group):null,m.a.createElement("p",{className:x.a.excerpt+" nt1 di fw5"},I(a.title))),m.a.createElement(N.a,{name:"arrow-right",className:"w5 h5 fill-blue"})):m.a.createElement("div",{className:"col-6"}))};j.propTypes={prev:o.a.shape({title:o.a.string.isRequired,link:o.a.string.isRequired,group:o.a.string}),next:o.a.shape({title:o.a.string.isRequired,link:o.a.string.isRequired,group:o.a.string,description:o.a.string})};var O=j,T=function(e){var t=e.sidebar,a=e.location,n=e.next;if(t){var i=v(t);if(!i)return null;var r=i.groups,l=[];h.a.forEach(r,function(e){h.a.forEach(e.items,function(t){t.group=e.group,l.push(t)})});var s=h.a.findIndex(l,function(e){return e.link===a.pathname}),o=l[s-1],c=l[s+1];return c||"concepts"!==t||(c={group:"Setup",link:"/setup/",title:"Install Ghost"}),m.a.createElement(O,{prev:o,next:c})}if(n&&n.title&&n.url){var u={title:u.title,link:u.url,description:u.description||""};return m.a.createElement(O,{next:u})}return null};T.propTypes={sidebar:o.a.string,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired,next:o.a.shape({title:o.a.string,url:o.a.string})};var _=T;a.d(t,"articleQuery",function(){return S});var M=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isToggleOn:!1},a.toggleMobileMenu=a.toggleMobileMenu.bind(l()(l()(a))),a}i()(t,e);var a=t.prototype;return a.toggleMobileMenu=function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}})},a.render=function(){var e=this,t=this.props.location,a=this.props.data.markdownRemark,n=Object(d.b)(),i={},r=(a.frontmatter||"").sidebar,l=!1!==a.frontmatter.toc;return r&&l?(i.leftSidebar=m.a.createElement(q,{location:t,sidebar:r}),i.rightSidebar=m.a.createElement("div",{className:"nr3 sticky top-25"},m.a.createElement(u.e,{className:"pr4",listClasses:"mt2"})),i.justification="justify-between"):r||l?(i.leftSidebar=r?m.a.createElement(q,{location:t,sidebar:r}):m.a.createElement("div",{className:"nr3 sticky top-25"},m.a.createElement(u.e,{listClasses:"lefty",className:"mt5 mb5 mt10-ns mb0-ns",showHeading:!1})),i.justification="justify-start"):i.justification="justify-center",m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{data:this.props.data,location:t,type:"article",image:n}),m.a.createElement(p.a,this.props,m.a.createElement(u.d,{location:t}),m.a.createElement("div",{className:x.a.page.xl+" flex flex-column flex-row-ns "+i.justification+" relative"},m.a.createElement("button",{onClick:function(){return e.toggleMobileMenu()},className:"bg-transparent bn appearance-none absolute right-7 db dn-ns",style:{top:"-40px"}},m.a.createElement(u.a,{name:"hamburger",className:"w6 h-auto stroke-white db dn-ns"})),i.leftSidebar?m.a.createElement("div",{className:(this.state.isToggleOn?"mobile-nav-open":"")+" w-100 w-sidebar-ns pr10 pl5 pl0-ns flex-shrink-0-l relative left-sidebar"},i.leftSidebar):null,m.a.createElement("div",null,m.a.createElement("div",{className:"w-100 mw-content bg-white shadow-2 br4 "+(this.state.isToggleOn?"":" br--bottom")},m.a.createElement("article",{className:"flex-auto pa5 pa8-m pa15-l pt10-ns pb10-ns pt10-l pb10-l"},m.a.createElement("h1",{className:x.a.h1+" darkgrey"},a.frontmatter.title),m.a.createElement("section",{className:"post-content external-scripts",dangerouslySetInnerHTML:{__html:a.html}})),m.a.createElement("div",{className:"mw-content pl5 pr5 pl15-ns pr15-ns bt b--whitegrey mt5"},m.a.createElement(_,{location:t,sidebar:r,next:a.frontmatter.next})))),i.rightSidebar?m.a.createElement("div",{className:"order-3 w-sidebar flex-shrink-0 dn db-l pt10 pl7"},i.rightSidebar):null)))},t}(m.a.Component);M.propTypes={data:o.a.shape({site:o.a.shape({siteMetadata:o.a.shape({siteUrl:o.a.string.isRequired,title:o.a.string.isRequired,description:o.a.string.isRequired}).isRequired}).isRequired,markdownRemark:o.a.shape({frontmatter:o.a.shape({toc:o.a.bool,sidebar:o.a.string,title:o.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:o.a.object.isRequired};t.default=M;var S="4080165082"},302:function(e,t,a){"use strict";var n=a(4),i=a.n(n),r=a(0),l=a.n(r),s=a(249),o=a.n(s),c=a(301),m=a.n(c),u=a(181),p=a.n(u),d=function(e){var t=e.image;return l.a.createElement(p.a,null,l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.a.createElement("meta",{name:"twitter:image",content:t}),l.a.createElement("meta",{property:"og:image",content:t}),l.a.createElement("meta",{property:"og:image:width",content:"1000"}),l.a.createElement("meta",{property:"og:image:height",content:"523"}))};d.propTypes={image:i.a.string.isRequired};var g=d,h=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,i=n.frontmatter,r=t.site.siteMetadata,s=i.date?new Date(i.date).toISOString():new Date("2018-10-15").toISOString(),o=i.keywords&&i.keywords.length?i.keywords[0]:null,c=R();return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement("title",null,i.meta_title||i.title),l.a.createElement("meta",{name:"description",content:i.meta_description||n.excerpt}),l.a.createElement("link",{rel:"canonical",href:a}),l.a.createElement("meta",{property:"og:site_name",content:r.title}),l.a.createElement("meta",{name:"og:type",content:"article"}),l.a.createElement("meta",{name:"og:title",content:i.meta_title||i.title}),l.a.createElement("meta",{name:"og:description",content:i.meta_description||n.excerpt}),l.a.createElement("meta",{property:"og:url",content:a}),l.a.createElement("meta",{property:"article:published_time",content:s}),i.keywords&&i.keywords.length?i.keywords.map(function(e,t){return l.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,l.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),l.a.createElement("meta",{name:"twitter:title",content:i.meta_title||i.title}),l.a.createElement("meta",{name:"twitter:description",content:i.meta_description||n.excerpt}),l.a.createElement("meta",{name:"twitter:url",content:a}),l.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),l.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),o?l.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,o?l.a.createElement("meta",{name:"twitter:data2",content:o}):null,l.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),l.a.createElement("meta",{name:"twitter:creator",content:"@vwalamarketing"}),l.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://vwa.la/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/vwalamarketing/"\n                            ]\n                        },\n                        '+(i.keywords&&i.keywords.length?'"keywords": "'+m.a.join(i.keywords,", ")+'",':"")+'\n                        "headline": "'+(i.meta_title||i.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+s+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+c+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(i.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+r.siteUrl+'"\n                        }\n                    }\n                ')),l.a.createElement(g,{image:c}))};h.propTypes={data:i.a.shape({markdownRemark:i.a.shape({frontmatter:i.a.shape({title:i.a.string.isRequired,keywords:i.a.arrayOf(i.a.string),meta_title:i.a.string,meta_description:i.a.string,date:i.a.string}).isRequired,excerpt:i.a.string.isRequired,timeToRead:i.a.number}).isRequired,site:i.a.shape({siteMetadata:i.a.shape({siteUrl:i.a.string.isRequired,title:i.a.string.isRequired,description:i.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:i.a.string.isRequired};var f=h,k=function(e){var t=e.data,a=e.canonical,n=e.title,i=e.description,r=e.image,s=e.type;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement("title",null,n),l.a.createElement("meta",{name:"description",content:i}),l.a.createElement("link",{rel:"canonical",href:a}),l.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:title",content:n}),l.a.createElement("meta",{property:"og:description",content:i}),l.a.createElement("meta",{property:"og:url",content:a}),l.a.createElement("meta",{name:"twitter:title",content:n}),l.a.createElement("meta",{name:"twitter:description",content:i}),l.a.createElement("meta",{name:"twitter:url",content:a}),l.a.createElement("meta",{name:"twitter:site",content:"@vwalamarketing"}),l.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(s&&"series"===s?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+r+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+i+'"\n                    }\n                ')),l.a.createElement(g,{image:r}))};k.propTypes={data:i.a.shape({site:i.a.shape({siteMetadata:i.a.shape({siteUrl:i.a.string.isRequired,title:i.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:i.a.string.isRequired,title:i.a.string.isRequired,description:i.a.string.isRequired,image:i.a.string.isRequired,type:i.a.oneOf(["website","series"]).isRequired};var w=k,E=function(e){var t=e.data,a=e.type,n=e.title,i=e.description,r=e.image,s=(e.fetchAuthorData,e.overwriteDefaultImage,e.location),c=t||{},m=c.ghostPost,u=c.markdownRemark,p=t.site.siteMetadata,d=o.a.resolve(p.siteUrl,s.pathname,"/");if("article"===a){if(m)return null;if(u)return l.a.createElement(f,{data:t,canonical:d})}else if("website"===a||"series"===a)return l.a.createElement(w,{data:t,canonical:d,title:n,description:i,image:r,type:a});return null};E.propTypes={data:i.a.shape({site:i.a.shape({siteMetadata:i.a.shape({siteUrl:i.a.string.isRequired,title:i.a.string.isRequired,description:i.a.string.isRequired}).isRequired}).isRequired,ghostPost:i.a.object,markdownRemark:i.a.object}).isRequired,location:i.a.shape({pathname:i.a.string.isRequired}).isRequired,type:i.a.oneOf(["website","series","article"]).isRequired,title:i.a.string,description:i.a.string,image:i.a.string,fetchAuthorData:i.a.bool,overwriteDefaultImage:i.a.bool};var y=E,b={default:o.a.resolve("https://docs.vwa.la","/images/meta/hero.png")},v=function(e){return b[e=e||"default"]};v.proptypes={section:i.a.string.isRequired};var R=v;a.d(t,"a",function(){return y}),a.d(t,"b",function(){return R})},885:function(e,t,a){"use strict";var n=a(11),i=a(75)(6),r="findIndex",l=!0;r in[]&&Array(1)[r](function(){l=!1}),n(n.P+n.F*l,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(33)(r)},886:function(e,t,a){var n={"./influencer.yaml":887,"./merchant.yaml":888,"./releases.yaml":889,"./user.yaml":890};function i(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=886},887:function(e,t){e.exports=[{groups:[{group:"Help",items:[{title:"Getting started",link:"/influencer/getting-started/"},{title:"How do I earn commission?",link:"/influencer/how-do-i-earn-commission/"},{title:"So Im an influencer, what now?",link:"/influencer/so-im-an-influencer-what-now/"},{title:"Free product",link:"/influencer/free-product/"},{title:"What are store promotions?",link:"/influencer/what-are-store-promotions/"}]}]}]},888:function(e,t){e.exports=[{groups:[{group:"Help",items:[{title:"Is referral, affiliate and influencer marketing the same thing?",link:"/merchant/is-referral-affiliate-influencer-marketing-the-same-thing/"},{title:"How our pricing works",link:"/merchant/how-our-pricing-works/"},{title:"Getting started",link:"/merchant/getting-started/"},{title:"Installation Guide",link:"/merchant/installation-guide/"},{title:"Customising vwa.la",link:"/merchant/customisation/"},{title:"Adding a page to your store",link:"/merchant/adding-a-page-to-your-store/"},{title:"How to create a test influencer account or bulk upload influencers from another platform?",link:"/merchant/how-to-create-a-test-account-or-bulk-upload-data/"},{title:"How do influencer links work?",link:"/merchant/how-do-influencer-links-work/"},{title:"Inviting influencers",link:"/merchant/inviting-influencers/"},{title:"Promotions",link:"/merchant/promotions/"},{title:"Influencer commission",link:"/merchant/influencer-commission/"},{title:"Influencer/group specific commission",link:"/merchant/influencer-group-specific-commission/"},{title:"Paying commission",link:"/merchant/paying-commission/"},{title:"Can I have multiple stores?",link:"/merchant/can-i-have-multiple-stores/"},{title:"Integrating with other apps",link:"/merchant/integrating-with-other-apps/"},{title:"Influencer discount code / link misuse",link:"/merchant/influencer-discount-code-link-misuse/"},{title:"Exporting your data",link:"/merchant/exporting-your-data/"}]}]}]},889:function(e,t){e.exports=[{groups:[{group:"Releases",items:[{title:"2019-05-31",link:"/releases/2019-05-31/"},{title:"2019-01-31",link:"/releases/2019-01-31/"},{title:"2018-12-07",link:"/releases/2018-12-07/"},{title:"2018-10-15",link:"/releases/2018-10-15/"},{title:"2018-09-15",link:"/releases/2018-09-15/"},{title:"2018-08-30",link:"/releases/2018-08-30/"},{title:"2018-07-20",link:"/releases/2018-07-20/"},{title:"2018-07-08",link:"/releases/2018-07-08/"},{title:"2018-07-01",link:"/releases/2018-07-01/"},{title:"2018-04-20",link:"/releases/2018-04-20/"},{title:"2018-03-25",link:"/releases/2018-03-25/"},{title:"2018-02-10",link:"/releases/2018-02-10/"},{title:"2018-01-25",link:"/releases/2018-01-25/"},{title:"2018-01-20",link:"/releases/2018-01-20/"},{title:"2018-01-14",link:"/releases/2018-01-14/"},{title:"2017-12-24",link:"/releases/2017-12-24/"},{title:"2017-12-06",link:"/releases/2017-12-06/"},{title:"2017-10-18",link:"/releases/2017-10-18/"},{title:"2017-09-30",link:"/releases/2017-09-30/"},{title:"2017-09-16",link:"/releases/2017-09-16/"},{title:"2017-08-30",link:"/releases/2017-08-30/"},{title:"2017-08-17",link:"/releases/2017-08-17/"},{title:"2017-08-06",link:"/releases/2017-08-06/"},{title:"2017-07-20",link:"/releases/2017-07-20/"},{title:"2017-07-01",link:"/releases/2017-07-01/"},{title:"2017-06-24",link:"/releases/2017-06-24/"},{title:"2017-06-13",link:"/releases/2017-06-13/"},{title:"2017-06-01",link:"/releases/2017-06-01/"},{title:"2017-05-05",link:"/releases/2017-05-05/"},{title:"2017-05-01",link:"/releases/2017-05-01/"},{title:"2017-03-20",link:"/releases/2017-03-20/"},{title:"2017-03-10",link:"/releases/2017-03-10/"}]}]}]},890:function(e,t){e.exports=[{groups:[{group:"User account help",items:[{title:"I can't log in",link:"/user/i-cant-log-in/"},{title:"How do I change my email?",link:"/user/how-do-i-change-my-email/"},{title:"How to pronounce vwa.la?",link:"/user/how-to-pronounce-vwala/"}]}]}]}}]);
//# sourceMappingURL=component---src-templates-markdown-post-js-94fcbf22cad5ffcb9b49.js.map