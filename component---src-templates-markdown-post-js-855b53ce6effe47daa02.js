(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,i){"use strict";i.r(t);var a=i(7),n=i.n(a),l=i(52),r=i.n(l),s=i(4),o=i.n(s),c=i(0),m=i.n(c),u=i(211),p=i(410),d=i(409),g=(i(174),i(878),i(53),i(408)),k=i.n(g),f=(i(74),i(157)),h=function(e){var t=e.link,i=e.title,a=e.linkClasses;return t?t.match(/^\s?http(s?)/gi)?m.a.createElement("a",{href:t,className:"link db pv6px pr2 lh-1-5 pl0 "+a,target:"_blank",rel:"noopener noreferrer"},i):m.a.createElement(f.Link,{to:t,className:"link db pv6px pr2 lh-1-5 pl0 "+a},i):m.a.createElement(m.a.Fragment,null,(void 0).props.title)};h.propTypes={link:o.a.string.isRequired,title:o.a.string.isRequired,linkClasses:o.a.string.isRequired};var b=h,v=function(e){var t=e.items,i=e.location;return m.a.createElement("ul",{className:"relative sidebar-list ma0 pa0 list mb5 pl6 mt1"},t.map(function(e,t){return m.a.createElement("li",{key:t},m.a.createElement(b,{link:e.link,title:e.title,linkClasses:e.link===i.pathname?"sidebarlink-active blue fw6":"midgrey fw4 hover-blue-l2"}))}))};v.propTypes={items:o.a.arrayOf(o.a.shape({title:o.a.string.isRequired,link:o.a.string.isRequired}).isRequired).isRequired,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired};var w=v,E=function(e){try{var t=i(879)("./"+e+".yaml")[0]}catch(a){throw a}return t};E.propTypes={sidebar:o.a.string.isRequired};var y=E,N=function(e){var t=e.sidebar,i=e.location,a=y(t);return t&&a&&a.groups?m.a.createElement("nav",{className:"mt5 mb5 mt10-ns mb0-ns relative","data-cy":"sidebar"},a.groups.map(function(e,t){return m.a.createElement("div",{key:t,className:"mt1"},e.items.some(function(e){return e.link===i.pathname})?m.a.createElement(m.a.Fragment,null,m.a.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?m.a.createElement(b,{link:e.items[0].link,title:e.group,linkClasses:"midgrey link"}):e.group),m.a.createElement(w,{key:t,items:e.items,location:i})):m.a.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?m.a.createElement(b,{link:e.items[0].link,title:e.group,linkClasses:"midgrey hover-blue-l2 link"}):e.group))})):null};N.defaultProps={location:{pathname:"/"}},N.propTypes={sidebar:o.a.string.isRequired,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired};var x=N,R=(i(76),i(154)),q=i(190),I=function(e){if(e&&e.length>40){var t=e.split(" ");return t.splice(0,t.length>5?5:t.length).join(" ")+".."}return e},T=function(e){var t=e.prev,i=e.next;return m.a.createElement("div",{className:"grid-12"},t?m.a.createElement(f.Link,{to:t.link,className:"col-6 flex pa10 pl0 tdn justify-start items-center blue nudge-left--1 prevnext-hover ba b--transparent"},m.a.createElement(q.a,{name:"arrow-left",className:"w5 h5 fill-blue"}),m.a.createElement("div",{className:"ml4"},t.group?m.a.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},t.group):null,m.a.createElement("p",{className:R.a.excerpt+" nt1 di fw5"},I(t.title)))):m.a.createElement("div",{className:"col-6"}),i?m.a.createElement(f.Link,{to:i.link,className:"col-6 flex pr0 pa10 tdn justify-end items-center blue prevnext-hover ba b--transparent"},m.a.createElement("div",{className:"tr mr4"},i.group?m.a.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},i.group):null,m.a.createElement("p",{className:R.a.excerpt+" nt1 di fw5"},I(i.title))),m.a.createElement(q.a,{name:"arrow-right",className:"w5 h5 fill-blue"})):m.a.createElement("div",{className:"col-6"}))};T.propTypes={prev:o.a.shape({title:o.a.string.isRequired,link:o.a.string.isRequired,group:o.a.string}),next:o.a.shape({title:o.a.string.isRequired,link:o.a.string.isRequired,group:o.a.string,description:o.a.string})};var j=T,C=function(e){var t=e.sidebar,i=e.location,a=e.next;if(t){var n=y(t);if(!n)return null;var l=n.groups,r=[];k.a.forEach(l,function(e){k.a.forEach(e.items,function(t){t.group=e.group,r.push(t)})});var s=k.a.findIndex(r,function(e){return e.link===i.pathname}),o=r[s-1],c=r[s+1];return c||"concepts"!==t||(c={group:"Setup",link:"/setup/",title:"Install Ghost"}),m.a.createElement(j,{prev:o,next:c})}if(a&&a.title&&a.url){var u={title:u.title,link:u.url,description:u.description||""};return m.a.createElement(j,{next:u})}return null};C.propTypes={sidebar:o.a.string,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired,next:o.a.shape({title:o.a.string,url:o.a.string})};var H=C;i.d(t,"articleQuery",function(){return O});var M=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={isToggleOn:!1},i.toggleMobileMenu=i.toggleMobileMenu.bind(r()(r()(i))),i}n()(t,e);var i=t.prototype;return i.toggleMobileMenu=function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}})},i.render=function(){var e=this,t=this.props.location,i=this.props.data.markdownRemark,a=Object(d.b)(),n={},l=(i.frontmatter||"").sidebar,r=!1!==i.frontmatter.toc;return l&&r?(n.leftSidebar=m.a.createElement(x,{location:t,sidebar:l}),n.rightSidebar=m.a.createElement("div",{className:"nr3 sticky top-25"},m.a.createElement(u.e,{className:"pr4",listClasses:"mt2"})),n.justification="justify-between"):l||r?(n.leftSidebar=l?m.a.createElement(x,{location:t,sidebar:l}):m.a.createElement("div",{className:"nr3 sticky top-25"},m.a.createElement(u.e,{listClasses:"lefty",className:"mt5 mb5 mt10-ns mb0-ns",showHeading:!1})),n.justification="justify-start"):n.justification="justify-center",m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{data:this.props.data,location:t,type:"article",image:a}),m.a.createElement(p.a,this.props,m.a.createElement(u.d,{location:t}),m.a.createElement("div",{className:R.a.page.xl+" flex flex-column flex-row-ns "+n.justification+" relative"},m.a.createElement("button",{onClick:function(){return e.toggleMobileMenu()},className:"bg-transparent bn appearance-none absolute right-7 db dn-ns",style:{top:"-40px"}},m.a.createElement(u.a,{name:"hamburger",className:"w6 h-auto stroke-white db dn-ns"})),n.leftSidebar?m.a.createElement("div",{className:(this.state.isToggleOn?"mobile-nav-open":"")+" w-100 w-sidebar-ns pr10 pl5 pl0-ns flex-shrink-0-l relative left-sidebar"},n.leftSidebar):null,m.a.createElement("div",null,m.a.createElement("div",{className:"w-100 mw-content bg-white shadow-2 br4 "+(this.state.isToggleOn?"":" br--bottom")},m.a.createElement("article",{className:"flex-auto pa5 pa8-m pa15-l pt10-ns pb10-ns pt10-l pb10-l"},m.a.createElement("h1",{className:R.a.h1+" darkgrey"},i.frontmatter.title),m.a.createElement("section",{className:"post-content external-scripts",dangerouslySetInnerHTML:{__html:i.html}})),m.a.createElement("div",{className:"mw-content pl5 pr5 pl15-ns pr15-ns bt b--whitegrey mt5"},m.a.createElement(H,{location:t,sidebar:l,next:i.frontmatter.next})))),n.rightSidebar?m.a.createElement("div",{className:"order-3 w-sidebar flex-shrink-0 dn db-l pt10 pl7"},n.rightSidebar):null)))},t}(m.a.Component);M.propTypes={data:o.a.shape({site:o.a.shape({siteMetadata:o.a.shape({siteUrl:o.a.string.isRequired,title:o.a.string.isRequired,description:o.a.string.isRequired}).isRequired}).isRequired,markdownRemark:o.a.shape({frontmatter:o.a.shape({toc:o.a.bool,sidebar:o.a.string,title:o.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:o.a.object.isRequired};t.default=M;var O="4080165082"},878:function(e,t,i){"use strict";var a=i(11),n=i(75)(6),l="findIndex",r=!0;l in[]&&Array(1)[l](function(){r=!1}),a(a.P+a.F*r,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(33)(l)},879:function(e,t,i){var a={"./influencer.yaml":880,"./merchant.yaml":881,"./releases.yaml":882,"./user.yaml":883};function n(e){var t=l(e);return i(t)}function l(e){var t=a[e];if(!(t+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return t}n.keys=function(){return Object.keys(a)},n.resolve=l,e.exports=n,n.id=879},880:function(e,t){e.exports=[{groups:[{group:"Help",items:[{title:"Getting started",link:"/influencer/getting-started/"},{title:"How do I earn commission?",link:"/influencer/how-do-i-earn-commission/"},{title:"How is commission paid?",link:"/influencer/how-is-commission-paid/"},{title:"So Im an influencer, what now?",link:"/influencer/so-im-an-influencer-what-now/"},{title:"Free product",link:"/influencer/free-product/"}]}]}]},881:function(e,t){e.exports=[{groups:[{group:"Help",items:[{title:"Welcome",link:"/merchant/welcome/"},{title:"Getting started",link:"/merchant/getting-started/"},{title:"How our pricing works",link:"/merchant/how-our-pricing-works/"},{title:"Installation Guide",link:"/merchant/installation-guide/"},{title:"Customising vwa.la",link:"/merchant/customisation/"},{title:"Adding a page to your store",link:"/merchant/adding-a-page-to-your-store/"},{title:"How to create a test influencer account or bulk upload influencers from another platform?",link:"/merchant/how-to-create-a-test-account-or-bulk-upload-data/"},{title:"How do influencer links work?",link:"/merchant/how-do-influencer-links-work/"},{title:"Inviting influencers",link:"/merchant/inviting-influencers/"},{title:"Promotions",link:"/merchant/promotions/"},{title:"Influencer commission",link:"/merchant/influencer-commission/"},{title:"Influencer/group specific commission",link:"/merchant/influencer-group-specific-commission/"},{title:"Paying commission",link:"/merchant/paying-commission/"},{title:"Can I have multiple stores?",link:"/merchant/can-i-have-multiple-stores/"},{title:"Integrating with other apps",link:"/merchant/integrating-with-other-apps/"},{title:"Influencer discount code / link misuse",link:"/merchant/influencer-discount-code-link-misuse/"},{title:"Exporting your data",link:"/merchant/exporting-your-data/"}]}]}]},882:function(e,t){e.exports=[{groups:[{group:"Releases",items:[{title:"2020-02-01",link:"/releases/2020-02-01/"},{title:"2019-12-10",link:"/releases/2019-12-10/"},{title:"2019-08-10",link:"/releases/2019-08-10/"},{title:"2019-05-31",link:"/releases/2019-05-31/"},{title:"2019-01-31",link:"/releases/2019-01-31/"},{title:"2018-12-07",link:"/releases/2018-12-07/"},{title:"2018-10-15",link:"/releases/2018-10-15/"},{title:"2018-09-15",link:"/releases/2018-09-15/"},{title:"2018-08-30",link:"/releases/2018-08-30/"},{title:"2018-07-20",link:"/releases/2018-07-20/"},{title:"2018-07-08",link:"/releases/2018-07-08/"},{title:"2018-07-01",link:"/releases/2018-07-01/"},{title:"2018-04-20",link:"/releases/2018-04-20/"},{title:"2018-03-25",link:"/releases/2018-03-25/"},{title:"2018-02-10",link:"/releases/2018-02-10/"},{title:"2018-01-25",link:"/releases/2018-01-25/"},{title:"2018-01-20",link:"/releases/2018-01-20/"},{title:"2018-01-14",link:"/releases/2018-01-14/"},{title:"2017-12-24",link:"/releases/2017-12-24/"},{title:"2017-12-06",link:"/releases/2017-12-06/"},{title:"2017-10-18",link:"/releases/2017-10-18/"},{title:"2017-09-30",link:"/releases/2017-09-30/"},{title:"2017-09-16",link:"/releases/2017-09-16/"},{title:"2017-08-30",link:"/releases/2017-08-30/"},{title:"2017-08-17",link:"/releases/2017-08-17/"},{title:"2017-08-06",link:"/releases/2017-08-06/"},{title:"2017-07-20",link:"/releases/2017-07-20/"},{title:"2017-07-01",link:"/releases/2017-07-01/"},{title:"2017-06-24",link:"/releases/2017-06-24/"},{title:"2017-06-13",link:"/releases/2017-06-13/"},{title:"2017-06-01",link:"/releases/2017-06-01/"},{title:"2017-05-05",link:"/releases/2017-05-05/"},{title:"2017-05-01",link:"/releases/2017-05-01/"},{title:"2017-03-20",link:"/releases/2017-03-20/"},{title:"2017-03-10",link:"/releases/2017-03-10/"}]}]}]},883:function(e,t){e.exports=[{groups:[{group:"User account help",items:[{title:"I can't log in",link:"/user/i-cant-log-in/"},{title:"How do I change my email?",link:"/user/how-do-i-change-my-email/"},{title:"How to pronounce vwa.la?",link:"/user/how-to-pronounce-vwala/"}]}]}]}}]);
//# sourceMappingURL=component---src-templates-markdown-post-js-855b53ce6effe47daa02.js.map