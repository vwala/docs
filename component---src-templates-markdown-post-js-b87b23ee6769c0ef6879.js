(self.webpackChunkam_docs=self.webpackChunkam_docs||[]).push([[683],{78131:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return C}});var n=l(63349),i=l(41788),r=l(67294),a=l(22175),s=l(41212),o=l(66191),c=l(30998),m=l.n(c),u=l(84486),p=l.n(u),k=l(25444),d=function(e){var t=e.link,l=e.title,n=e.linkClasses;return t?t.match(/^\s?http(s?)/gi)?r.createElement("a",{href:t,className:"link db pv6px pr2 lh-1-5 pl0 "+n,target:"_blank",rel:"noopener noreferrer"},l):r.createElement(k.Link,{to:t,className:"link db pv6px pr2 lh-1-5 pl0 "+n},l):r.createElement(r.Fragment,null,undefined.props.title)},f=function(e){var t=e.items,l=e.location;return r.createElement("ul",{className:"relative sidebar-list ma0 pa0 list mb5 pl6 mt1"},t.map((function(e,t){return r.createElement("li",{key:t},r.createElement(d,{link:e.link,title:e.title,linkClasses:e.link===l.pathname?"sidebarlink-active blue fw6":"midgrey fw4 hover-blue-l2"}))})))},g=l(45697),h=function(e){try{var t=l(74500)("./"+e+".yaml")[0]}catch(n){throw n}return t};h.propTypes={sidebar:l.n(g)().string.isRequired};var b=h,v=function(e){var t=e.sidebar,l=e.location,n=b(t);return t&&n&&n.groups?r.createElement("nav",{className:"mt5 mb5 mt10-ns mb0-ns relative","data-cy":"sidebar"},n.groups.map((function(e,t){return r.createElement("div",{key:t,className:"mt1"},e.items.some((function(e){return e.link===l.pathname}))?r.createElement(r.Fragment,null,r.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?r.createElement(d,{link:e.items[0].link,title:e.group,linkClasses:"midgrey link"}):e.group),r.createElement(f,{key:t,items:e.items,location:l})):r.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?r.createElement(d,{link:e.items[0].link,title:e.group,linkClasses:"midgrey hover-blue-l2 link"}):e.group))}))):null};v.defaultProps={location:{pathname:"/"}};var w=v,E=l(44897),N=l(13321),y=function(e){if(e&&e.length>40){var t=e.split(" ");return t.splice(0,t.length>5?5:t.length).join(" ")+".."}return e},x=function(e){var t=e.prev,l=e.next;return r.createElement("div",{className:"grid-12"},t?r.createElement(k.Link,{to:t.link,className:"col-6 flex pa10 pl0 tdn justify-start items-center blue nudge-left--1 prevnext-hover ba b--transparent"},r.createElement(N.Z,{name:"arrow-left",className:"w5 h5 fill-blue"}),r.createElement("div",{className:"ml4"},t.group?r.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},t.group):null,r.createElement("p",{className:E.O.excerpt+" nt1 di fw5"},y(t.title)))):r.createElement("div",{className:"col-6"}),l?r.createElement(k.Link,{to:l.link,className:"col-6 flex pr0 pa10 tdn justify-end items-center blue prevnext-hover ba b--transparent"},r.createElement("div",{className:"tr mr4"},l.group?r.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},l.group):null,r.createElement("p",{className:E.O.excerpt+" nt1 di fw5"},y(l.title))),r.createElement(N.Z,{name:"arrow-right",className:"w5 h5 fill-blue"})):r.createElement("div",{className:"col-6"}))},O=function(e){var t=e.sidebar,l=e.location,n=e.next;if(t){var i=b(t);if(!i)return null;var a=i.groups,s=[];p()(a,(function(e){p()(e.items,(function(t){t.group=e.group,s.push(t)}))}));var o=m()(s,(function(e){return e.link===l.pathname})),c=s[o-1],u=s[o+1];return u||"concepts"!==t||(u={group:"Setup",link:"/setup/",title:"Install Ghost"}),r.createElement(x,{prev:c,next:u})}if(n&&n.title&&n.url){var k={title:k.title,link:k.url,description:k.description||""};return r.createElement(x,{next:k})}return null},C=function(e){function t(t){var l;return(l=e.call(this,t)||this).state={isToggleOn:!1},l.toggleMobileMenu=l.toggleMobileMenu.bind((0,n.Z)(l)),l}(0,i.Z)(t,e);var l=t.prototype;return l.toggleMobileMenu=function(){this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))},l.render=function(){var e=this,t=this.props.location,l=this.props.data.markdownRemark,n=(0,o.A)(),i={},c=(l.frontmatter||"").sidebar,m=!1!==l.frontmatter.toc;return c&&m?(i.leftSidebar=r.createElement(w,{location:t,sidebar:c}),i.rightSidebar=r.createElement("div",{className:"nr3 sticky top-25"},r.createElement(a.Nt,{className:"pr4",listClasses:"mt2"})),i.justification="justify-between"):c||m?(i.leftSidebar=c?r.createElement(w,{location:t,sidebar:c}):r.createElement("div",{className:"nr3 sticky top-25"},r.createElement(a.Nt,{listClasses:"lefty",className:"mt5 mb5 mt10-ns mb0-ns",showHeading:!1})),i.justification="justify-start"):i.justification="justify-center",r.createElement(r.Fragment,null,r.createElement(o.U,{data:this.props.data,location:t,type:"article",image:n}),r.createElement(s.A,this.props,r.createElement(a.mV,{location:t}),r.createElement("div",{className:E.O.page.xl+" flex flex-column flex-row-ns "+i.justification+" relative"},r.createElement("button",{onClick:function(){return e.toggleMobileMenu()},className:"bg-transparent bn appearance-none absolute right-7 db dn-ns",style:{top:"-40px"}},r.createElement(a.JO,{name:"hamburger",className:"w6 h-auto stroke-white db dn-ns"})),i.leftSidebar?r.createElement("div",{className:(this.state.isToggleOn?"mobile-nav-open":"")+" w-100 w-sidebar-ns pr10 pl5 pl0-ns flex-shrink-0-l relative left-sidebar"},i.leftSidebar):null,r.createElement("div",null,r.createElement("div",{className:"w-100 mw-content bg-white shadow-2 br4 "+(this.state.isToggleOn?"":" br--bottom")},r.createElement("article",{className:"flex-auto pa5 pa8-m pa15-l pt10-ns pb10-ns pt10-l pb10-l"},r.createElement("h1",{className:E.O.h1+" darkgrey"},l.frontmatter.title),r.createElement("section",{className:"post-content external-scripts",dangerouslySetInnerHTML:{__html:l.html}})),r.createElement("div",{className:"mw-content pl5 pr5 pl15-ns pr15-ns bt b--whitegrey mt5"},r.createElement(O,{location:t,sidebar:c,next:l.frontmatter.next})))),i.rightSidebar?r.createElement("div",{className:"order-3 w-sidebar flex-shrink-0 dn db-l pt10 pl7"},i.rightSidebar):null)))},t}(r.Component)},17629:function(e){"use strict";e.exports=JSON.parse('[{"groups":[{"group":"Help","items":[{"title":"Getting started","link":"/influencer/getting-started/"},{"title":"How do I earn commission?","link":"/influencer/how-do-i-earn-commission/"},{"title":"How is commission paid?","link":"/influencer/how-is-commission-paid/"},{"title":"How do I promote the store?","link":"/influencer/how-do-i-promote-the-store/"},{"title":"Free product","link":"/influencer/free-product/"}]}]}]')},87131:function(e){"use strict";e.exports=JSON.parse('[{"groups":[{"group":"Help","items":[{"title":"Welcome","link":"/merchant/welcome/"},{"title":"Getting started","link":"/merchant/getting-started/"},{"title":"How our pricing works","link":"/merchant/how-our-pricing-works/"},{"title":"Installation Guide","link":"/merchant/installation-guide/"},{"title":"Customising vwa.la","link":"/merchant/customisation/"},{"title":"Inviting influencers","link":"/merchant/inviting-influencers/"},{"title":"Adding a page to your store","link":"/merchant/adding-a-page-to-your-store/"},{"title":"How do influencer links work?","link":"/merchant/how-do-influencer-links-work/"},{"title":"Creating a test influencer account or bulk importing influencers","link":"/merchant/how-to-create-a-test-account-or-bulk-upload-data/"},{"title":"Promotions","link":"/merchant/promotions/"},{"title":"Influencer commission","link":"/merchant/influencer-commission/"},{"title":"Influencer/group specific commission","link":"/merchant/influencer-group-specific-commission/"},{"title":"Paying commission","link":"/merchant/paying-commission/"},{"title":"Can I have multiple stores?","link":"/merchant/can-i-have-multiple-stores/"},{"title":"Integrating with other apps","link":"/merchant/integrating-with-other-apps/"},{"title":"Influencer discount code / link misuse","link":"/merchant/influencer-discount-code-link-misuse/"},{"title":"Exporting your data","link":"/merchant/exporting-your-data/"}]}]}]')},77124:function(e){"use strict";e.exports=JSON.parse('[{"groups":[{"group":"Releases","items":[{"title":"2022-01-23","link":"/releases/2022-01-23/"},{"title":"2021-07-15","link":"/releases/2021-07-15/"},{"title":"2021-06-15","link":"/releases/2021-06-15/"},{"title":"2021-04-21","link":"/releases/2021-04-21/"},{"title":"2021-01-20","link":"/releases/2021-01-20/"},{"title":"2020-11-10","link":"/releases/2020-11-10/"},{"title":"2020-09-30","link":"/releases/2020-09-30/"},{"title":"2020-05-30","link":"/releases/2020-05-30/"},{"title":"2020-04-30","link":"/releases/2020-04-30/"},{"title":"2020-02-01","link":"/releases/2020-02-01/"},{"title":"2019-12-10","link":"/releases/2019-12-10/"},{"title":"2019-08-10","link":"/releases/2019-08-10/"},{"title":"2019-05-31","link":"/releases/2019-05-31/"},{"title":"2019-01-31","link":"/releases/2019-01-31/"},{"title":"2018-12-07","link":"/releases/2018-12-07/"},{"title":"2018-10-15","link":"/releases/2018-10-15/"},{"title":"2018-09-15","link":"/releases/2018-09-15/"},{"title":"2018-08-30","link":"/releases/2018-08-30/"},{"title":"2018-07-20","link":"/releases/2018-07-20/"},{"title":"2018-07-08","link":"/releases/2018-07-08/"},{"title":"2018-07-01","link":"/releases/2018-07-01/"},{"title":"2018-04-20","link":"/releases/2018-04-20/"},{"title":"2018-03-25","link":"/releases/2018-03-25/"},{"title":"2018-02-10","link":"/releases/2018-02-10/"},{"title":"2018-01-25","link":"/releases/2018-01-25/"},{"title":"2018-01-20","link":"/releases/2018-01-20/"},{"title":"2018-01-14","link":"/releases/2018-01-14/"},{"title":"2017-12-24","link":"/releases/2017-12-24/"},{"title":"2017-12-06","link":"/releases/2017-12-06/"},{"title":"2017-10-18","link":"/releases/2017-10-18/"},{"title":"2017-09-30","link":"/releases/2017-09-30/"},{"title":"2017-09-16","link":"/releases/2017-09-16/"},{"title":"2017-08-30","link":"/releases/2017-08-30/"},{"title":"2017-08-17","link":"/releases/2017-08-17/"},{"title":"2017-08-06","link":"/releases/2017-08-06/"},{"title":"2017-07-20","link":"/releases/2017-07-20/"},{"title":"2017-07-01","link":"/releases/2017-07-01/"},{"title":"2017-06-24","link":"/releases/2017-06-24/"},{"title":"2017-06-13","link":"/releases/2017-06-13/"},{"title":"2017-06-01","link":"/releases/2017-06-01/"},{"title":"2017-05-05","link":"/releases/2017-05-05/"},{"title":"2017-05-01","link":"/releases/2017-05-01/"},{"title":"2017-03-20","link":"/releases/2017-03-20/"},{"title":"2017-03-10","link":"/releases/2017-03-10/"}]}]}]')},3309:function(e){"use strict";e.exports=JSON.parse('[{"groups":[{"group":"User account help","items":[{"title":"I can\'t log in","link":"/user/i-cant-log-in/"},{"title":"How do I change my email?","link":"/user/how-do-i-change-my-email/"},{"title":"How to pronounce vwa.la?","link":"/user/how-to-pronounce-vwala/"}]}]}]')},74500:function(e,t,l){var n={"./influencer.yaml":17629,"./merchant.yaml":87131,"./releases.yaml":77124,"./user.yaml":3309};function i(e){var t=r(e);return l(t)}function r(e){if(!l.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=74500}}]);
//# sourceMappingURL=component---src-templates-markdown-post-js-b87b23ee6769c0ef6879.js.map