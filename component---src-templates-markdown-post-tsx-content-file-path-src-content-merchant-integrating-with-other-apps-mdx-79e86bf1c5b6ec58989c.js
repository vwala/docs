"use strict";(self.webpackChunkam_docs=self.webpackChunkam_docs||[]).push([[5039],{1306:function(e,t,n){n.r(t),n.d(t,{Page:function(){return x},default:function(){return I}});var a=n(1151),r=n(7294);function i(e){const t=Object.assign({p:"p",h2:"h2",a:"a",h3:"h3",code:"code",ul:"ul",li:"li",span:"span"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"We've had quite a few merchants ask us how to integrate with other apps. We're going to start documenting integration set-ups here."),"\n",r.createElement(t.h2,{id:"email-marketing"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#email-marketing"},"Email marketing")),"\n",r.createElement(t.h3,{id:"mailchimp"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#mailchimp"},"Mailchimp")),"\n",r.createElement(t.p,null,"You can automatically sync your influencer list (and their marketing performance stats) to Mailchimp. You can set this up via ",r.createElement(t.code,null,"customise > mailchimp"),". Your data will be automatically synced twice per day."),"\n",r.createElement(t.p,null,"Your mailchimp list will contain the following influencer fields:"),"\n",r.createElement("code",null,r.createElement(t.p,null,"First name\nLast name\nEmail\nGroup\nCode"),r.createElement(t.p,null,"Stats\nvCount: Number of leads\nvuCount: Number of unique leads\noCount: Number of orders\noSum: Total sum of all orders\noConvPc: Lead to Order conversation ratio\ncSum: Total commission earned for all orders\ncunCont: Number of orders by new customers\ncurCount:  Number of orders by returning customers\ncuRatioPc: Ratio of new to returning customers\nmrCount: Number of social media followers")),"\n",r.createElement(t.h3,{id:"klaviyo"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#klaviyo"},"Klaviyo")),"\n",r.createElement(t.p,null,"You can automatically sync your influencer list (and their marketing performance stats) to Klaviyo. You can set this up via ",r.createElement(t.code,null,"customise > klaviyo"),". Your data will be automatically synced twice per day."),"\n",r.createElement(t.h3,{id:"activecampaign"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#activecampaign"},"ActiveCampaign")),"\n",r.createElement(t.p,null,"You can automatically sync your influencer list (and their marketing performance stats) to ActiveCampaign. You can set this up via ",r.createElement(t.code,null,"customise > ActiveCampaign"),". Your data will be automatically synced twice per day."),"\n",r.createElement(t.h3,{id:"omnisend"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#omnisend"},"Omnisend")),"\n",r.createElement(t.p,null,"You can automatically sync your influencer list (and their marketing performance stats) to Omnisend. You can set this up via ",r.createElement(t.code,null,"customise > Omnisend"),". Your data will be automatically synced twice per day."),"\n",r.createElement(t.h3,{id:"other"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#other"},"Other")),"\n",r.createElement(t.p,null,"If your provider is not supported let us know. Otherwise, we have solved integration with 3rd party email solutions in a general way. All you need to do is export your influencers from vwa.la and import them into your email program of choice. See ",r.createElement(t.a,{href:"/merchant/exporting-your-data/"},"exporting your data")," for details on how to do this."),"\n",r.createElement(t.h2,{id:"recharge"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#recharge"},"ReCharge")),"\n",r.createElement(t.p,null,"We support integration with ReCharge. To enable integration, you must 1) create a ReCharge API token and 2) sync your influencer shopify discount codes with ReCharge."),"\n",r.createElement(t.h3,{id:"step-1-recharge-api-token"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#step-1-recharge-api-token"},"Step 1: ReCharge API token")),"\n",r.createElement(t.p,null,"This token is a credential that allows vwa.la to listen to your ReCharge orders. Vwa.la requires this capability, so that we can track influencer commission by customer IP address and discount code."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Log into your ReCharge account and create an API token. Please follow their documentation carefully ",r.createElement(t.a,{href:"https://docs.rechargepayments.com/docs/recharge-api-key"},"https://docs.rechargepayments.com/docs/recharge-api-key"),"."),"\n",r.createElement(t.li,null,"A API token has 2 parts. A key (public ID) and a secret (i.e. password). We encrypt your password on save."),"\n",r.createElement(t.li,null,"In ReCharge, after you have created your token, you must set the token's permissions to match the screenshot below. Otherwise our integration will not work."),"\n",r.createElement(t.li,null,"After you have created your ReCharge API token, you must copy and paste the key and secret into your vwa.la ",r.createElement(t.code,null,"customise > ReCharge")," form."),"\n",r.createElement(t.li,null,"In vwa.la, click TEST to confirm your token is valid. Then click SAVE."),"\n"),"\n",r.createElement(t.h3,{id:"figure-1-your-token-key"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#figure-1-your-token-key"},"Figure 1: Your token KEY")),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/5379babcff59544465ac9475ee0ea2ae/2376a/recharge-token-key.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 41.717791411042946%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABeElEQVR42p3Oy0oCURwG8HmFICPL1CzJrtBOqJVJbSwIo13L6Fna1y5o0QOEFqHjWEZltKhFSGqFrsai0XGujjNH54vRXBjpogM/Dv8L3zmUf2kbcwsbnMO5Ujw4PEY6fWcyTBJXqRQYhkGcpkHTiR90q+7o9ONxGrEYjZvbNCivL4xRVwiDw2uIJx5gHZYtm4XiR1NRdGhaA7Ua+ZOqEhiE4O2Z4GS/gcgRAeWd3oR7ct202YPN08gl6pqGQuETb+8cXrIssjkWuXypLde+8z9a8yyLTIbF02MJ2ZcvUFMzYTg9IdjsQUSiKdP6Icfxr7quJ1S1ZgqiDElSIMttotSuJUmGYRgghLQ0mwbqugZqanYLrokN2EZWET27RoMQVCpVRRBkThQlVKtiT6IodxEECZTHu4oh+zIGBv2IRJOtV61lWVbB80LfQGv+G+UcD2DMHegKLJd5k+cFs19YL9Ts4h5887twTOzg/OIeul5HuVLFf8KswG9sfxiOVpLCTgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="recharge token key"\n        title=""\n        src="/static/5379babcff59544465ac9475ee0ea2ae/a6d36/recharge-token-key.png"\n        srcset="/static/5379babcff59544465ac9475ee0ea2ae/222b7/recharge-token-key.png 163w,\n/static/5379babcff59544465ac9475ee0ea2ae/ff46a/recharge-token-key.png 325w,\n/static/5379babcff59544465ac9475ee0ea2ae/a6d36/recharge-token-key.png 650w,\n/static/5379babcff59544465ac9475ee0ea2ae/e548f/recharge-token-key.png 975w,\n/static/5379babcff59544465ac9475ee0ea2ae/3c492/recharge-token-key.png 1300w,\n/static/5379babcff59544465ac9475ee0ea2ae/2376a/recharge-token-key.png 3138w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",r.createElement(t.h3,{id:"figure-2-your-token-secret-and-permissions"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#figure-2-your-token-secret-and-permissions"},"Figure 2: Your token SECRET and permissions")),"\n",r.createElement(t.p,null,"Your permissions must match this screenshot"),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/054ea73985d0e4db23429e755314472a/6e20d/recharge-token-secret.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 68.71165644171779%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAACGUlEQVR42o2STWsTQRzG994GEsGbgmKtVPDgtdgWPAlFRBGP6t2LXqIxsa1vSVqh+AXqCx78CH4E8dJa2gW1kVqsLabZZF9md153HpndpG1oavqHHzuwy2+fZ2as0UtXcWZodPvO3XtfZude4fmLsp6eeYap6acoTc0kFIpPUHhc6uJRh0IR+YdFPLhfQj5fhHV25CYGshOYf/0RZigVEEJByhhuw8XfP3XQkEFyAcHacIFYKiihIDjF1jrHp3cKm7UY1tC5axjMjemXlYWYMYp63UFjx4HTdLG+/EPbn1f16tJP2Es12Is1rCyuwf5aw5q9scv3lQ18W/6N7c0dWBcu3kb2+BVU5z5ACAHHaaHV8uC2PDguQUgFwoiDhAyRSS/jBC5UF1LFCEgIa/j8LWSOXUZl9j1kW9hsutr3CXyfNBhjvwANreOEvdH7numapMLryOTGUa4uJMJGWxgEITw/2PKCwDbJGeNdCCGTRukzJQgIrOGRG8jkJlCuvtkVmsqGKKJQKgY3ByJS9tYSUkpEEUt+YNamlXXy9CQGsmOoVN8eEBIS6TiO9/c8MEYcUQbzWVL5xKlJDGbHUemR0PMJGBfQGj1JrxlHs+kl4r7CMKTJndRaH0KakFIGpVR/oTkYsz//G/PeiI4kJCRKEnTq9RpzSAGJIOURhSZBp16vPexcI/ONadS3skcZuFSHJjRVTTojNAn/AeMR0QzFYqt7AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="recharge token secret"\n        title=""\n        src="/static/054ea73985d0e4db23429e755314472a/a6d36/recharge-token-secret.png"\n        srcset="/static/054ea73985d0e4db23429e755314472a/222b7/recharge-token-secret.png 163w,\n/static/054ea73985d0e4db23429e755314472a/ff46a/recharge-token-secret.png 325w,\n/static/054ea73985d0e4db23429e755314472a/a6d36/recharge-token-secret.png 650w,\n/static/054ea73985d0e4db23429e755314472a/e548f/recharge-token-secret.png 975w,\n/static/054ea73985d0e4db23429e755314472a/3c492/recharge-token-secret.png 1300w,\n/static/054ea73985d0e4db23429e755314472a/6e20d/recharge-token-secret.png 2902w"\n        sizes="(max-width: 650px) 100vw, 650px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",r.createElement(t.h3,{id:"step-2-sync-shopify-influencer-discount-codes-with-recharge"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#step-2-sync-shopify-influencer-discount-codes-with-recharge"},"Step 2: Sync Shopify influencer discount codes with ReCharge")),"\n",r.createElement(t.p,null,"ReCharge does not use your Shopify discount codes, instead it requires you to duplicate your discount codes in your ReCharge admin console."),"\n",r.createElement(t.p,null,"This requirement is documented here: ",r.createElement(t.a,{href:"https://support.rechargepayments.com/hc/en-us/articles/360008830533"},"https://support.rechargepayments.com/hc/en-us/articles/360008830533")),"\n",r.createElement("code",null,r.createElement(t.p,null,"From the ReCharge documentation above: If you are using the Shopify Checkout Integration, you must create your discount code in both Shopify and Recharge. If the settings in Shopify and Recharge are in conflict, on recurring orders Recharge will give precedence to the settings in Recharge.")),"\n",r.createElement(t.p,null,"Therefore, if you want your influencer's to earn commission when a ReCharge subscription order uses their code, you must manually re-create your influencer codes in ReCharge. The documentation above, documents the different ways your can do this. I.e. either manually, or using ReCharge's discount code CSV bulk import feature."),"\n",r.createElement(t.h3,{id:"limitations"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#limitations"},"Limitations")),"\n",r.createElement(t.h2,{id:"wordpress"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#wordpress"},"Wordpress")),"\n",r.createElement(t.p,null,"If your store front is a Wordpress website and not a fully featured Shopify store, it is important to note that vwa.la will work, but will work with limited functionality. This is because Wordpress lacks the integration capabilities that we require to provide our full suite of features."),"\n",r.createElement(t.p,null,"The following features will work with wordpress:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Influencer commission tracking via discount code"),"\n",r.createElement(t.li,null,"Influencer sign ups via a URL"),"\n",r.createElement(t.li,null,"Influencer dashboard / management"),"\n"),"\n",r.createElement(t.p,null,"The following features will not work with wordpress:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Influencer links and link based commission tracking"),"\n",r.createElement(t.li,null,"Embedding our influencer signup/login/marketing dashboard within your store front."),"\n"),"\n",r.createElement(t.h2,{id:"other-1"},r.createElement(t.a,{className:"autolinked-header",style:{color:"inherit"},href:"#other-1"},"Other")),"\n",r.createElement(t.p,null,"We also support the following 3rd party services:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Selly"),"\n"))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)},o=n(4316),s=n(8317),c=n(2499),u=n(9672),m=n(1748),d=n(3139),h=n(1466),p=n(6261),g=n(3179),y=n(6976),f=n(495),k=n(7842),w=n(2521),E=n(6651),b=n(593),v=n(917);const A=(0,o.Z)("div",{target:"e3sgk5a3"})("background-image:url(",b.Z,");background-size:cover;width:100%;height:15vh;filter:hue-rotate(-399deg);"),C=(0,o.Z)("h1",{target:"e3sgk5a2"})({name:"1a4vt9r",styles:"margin-top:0px;margin-bottom:0px"}),Z=(0,o.Z)("div",{target:"e3sgk5a1"})({name:"gmyyvj",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:200px"}),R=(0,o.Z)(h.Z,{target:"e3sgk5a0"})({name:"1idxjfv",styles:"& .gatsby-resp-image-wrapper{margin-top:100px;}&.gatsby-resp-image-wrapper{margin-top:100px;}.gatsby-resp-image-wrapper{margin-top:100px;}gatsby-resp-image-wrapper{margin-top:100px;}"});function x(e){var t,n,a;const{data:r,children:i,location:l,pageContext:o}=e,b=r.mdx.frontmatter.sidebar,x=(0,f.Z)(f.g),I=o.section,T=(null==r||null===(t=r.mdx)||void 0===t||null===(n=t.tableOfContents)||void 0===n||null===(a=n.items)||void 0===a?void 0:a.length)>0;return(0,v.tZ)(p.Z,null,(0,v.tZ)(A,null,(0,v.tZ)(E.Z,{location:l})),(0,v.tZ)("div",{style:{marginTop:-30,position:"relative",margin:"-60px 20px 0px 20px",background:"#fff",padding:"30px",borderRadius:"20px 20px 0px 0px"}},(0,v.tZ)(u.Z,{style:{alignItems:"center",marginBottom:20}},(0,v.tZ)(m.rU,{to:"/"},"Home"),(0,v.tZ)(w.rI,null,(0,v.tZ)(s.Z,null)),(0,v.tZ)(m.rU,{to:"/"+I},(0,k.Ig)(I)),(0,v.tZ)(w.rI,null,(0,v.tZ)(s.Z,null)),(0,v.tZ)(Z,null,r.mdx.frontmatter.title)),x?(0,v.tZ)(u.Z,null,(0,v.tZ)(y.W,{location:l,sidebar:b,style:{minWidth:"25%",marginRight:20}}),(0,v.tZ)("div",{style:{minWidth:"50%",marginRight:30}},(0,v.tZ)(C,null,r.mdx.frontmatter.title),(0,v.tZ)(R,null,i,(0,v.tZ)("div",{style:{marginTop:30}},(0,v.tZ)(g.Y,{location:l,sidebar:b,next:o.next})))),T?(0,v.tZ)("div",{style:{minWidth:"25%"}},(0,v.tZ)("div",{style:{position:"sticky",top:30}},T?(0,v.tZ)(d.Z,{items:(null==r||null===(Y=r.mdx)||void 0===Y||null===(S=Y.tableOfContents)||void 0===S?void 0:S.items)||[]}):null)):null):(0,v.tZ)(h.Z,null,(0,v.tZ)("div",{style:{margin:"30px 0px"}},(0,v.tZ)(c.Z,{header:(0,v.tZ)("strong",null,"Other pages")},(0,v.tZ)(y.W,{location:l,sidebar:b}))),(0,v.tZ)(C,null,r.mdx.frontmatter.title),(0,v.tZ)(R,null,i,(0,v.tZ)("div",{style:{marginTop:30}},(0,v.tZ)(g.Y,{location:l,sidebar:b,next:o.next}))))));var Y,S}function I(e){return r.createElement(x,e,r.createElement(l,e))}}}]);
//# sourceMappingURL=component---src-templates-markdown-post-tsx-content-file-path-src-content-merchant-integrating-with-other-apps-mdx-79e86bf1c5b6ec58989c.js.map