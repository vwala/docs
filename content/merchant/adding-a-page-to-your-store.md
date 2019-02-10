---
title: "Adding a page to your store"
meta_title: "How to add a page that explains your influencer marketing program?"
meta_description: ""
keywords:
    - merchant
    - help
sidebar: "merchant"
rank: 6
---

Use this guide if you want to create a custom page for your influencer marketing program.

A custom page has the following benefits:

*   It educates your influencers about your influencer marketing program
*   It can explain your T&Cs
*   It can include a link or button that will trigger the influencer sign up / dashboard log in page to appear (these pages appear within your store as a modal window (a.k.a. overlay).

1\. Create a page
-----------------

To create a page:

*   Go to your shopify admin console
*   From the left side menu, choose _Sales Channels > Online Store > Pages_
*   Click 'add page'
*   Give the page a title i.e. referral program, affiliate program, influencer program
*   Add your page content (see below for an example HTML template).
*   Click save

#### Example HTML template

We recommend that you copy and paste the following HTML into your page content as a quick and easy way to get started.

**Important**  
When using the HTML template, you must switch the Shopify create/edit page's text box field from plain text to HTML before pasting the template. Otherwise it will not display correctly. You can do this as per the "show editor" tooltip in the below screenshot. **Note:** We do not provide HTML support. Please ask your web developer if you need help designing your page.   

![](/images/merchant/2018-03-13-18-16-25.png)

**HTML template to copy**

    <h1>Love our store? Want to promote our products and earn rewards?</h1><div class="page-content"> <p>We are looking for social media influencers and bloggers to help promote our brand and products.</p> <h2>What is an influencer?</h2> <p>An influencer is a person or company with a website, blog or social media channel that promotes brands like ours. If  you refer someone to our site and they then make a purchase, you will be paid a sales commission (%) of the total  order value. </p> <h2>What am I meant to do as an influencer?</h2> <p>Promote our brand / products on your website, blog or social media channels. For example.</p> <ul>  <li>Sharing our branding / ads </li>  <li>Sharing your referral link or discount code</li>  <li>Creating product review blogs / vlogs. </li> </ul> <h2>Benefits of our influencer program</h2> <ul>  <li>We pay a highly competitive base rate of   <strong>10%</strong> commission per sale (minus discount deductions and excluding shipping, taxes, refunds)  </li>  <li>It's free to join</li>  <li>You'll have exclusive access to influencer only offers and promotions</li> </ul> <h2>Great! How do I get started?</h2> <div>  <strong>  <a href="#" onclick="script:window.dispatchEvent(new Event('vwala-toggle'));">Simply click here to sign up!</a>  </strong> </div></div>

**Important**  
The template should be customised to suit your store. You must:

*   Change any text/URLs that do not match your store / promotion policy.
*   Optionally, change the word influencer. We have used the word influencer in this template, however you can change it to affiliate or influencer if that is preferred. [They mean the same thing](/merchant/is-referralaffiliateinfluencer-marketing-the-same-thing).

**How does this HTML open the sign-up page / dashboard?**

We want [vwa.la](http://vwa.la) to be as close to a 100% white label UX as possible. This means that when requested by the user, we dynamically embed the [vwa.la](http://vwa.la) influencer sign-up / login page and dashboard into your store front using some HTML magic. To open or close these [vwa.la](http://vwa.la) pages within your store, you must embed the following HTML snippet.

    <a href="#" onclick="script:window.dispatchEvent(new Event('vwala-toggle'));">sign up or log in</a>

This HTML triggers an event to fire, which our code is listening for. When we receive this event, we dynamically load the [vwa.la](http://vwa.la) app into your store and display it to the user. We take extra care to ensure we load the smallest amount of code possible and only when needed.

The in-line javascript in the onclick event above is what makes this possible. You don't have to use an A tag, you could use a button if you like. You can also use CSS to customise the appearance in any way that you like. 

Here is an example of using a button to trigger the [vwa.la](http://vwa.la) signup/login page to open.

    <button type="button" onclick="script:window.dispatchEvent(new Event('vwala-toggle'));">Signup or log in</button>

**Troubleshooting**

If your page isn't opening:

*   Re-check your html is correct (checking your browser log for errors is very helpful here i.e. chrome dev tools console).
*   The bootstrapping code may still be loading into your browser. On a slow network, this could take a few seconds before clicking the link will open the [vwa.la](http://vwa.la) sign-up page.

2\. Link your new page to your stores' menu
-------------------------------------------

Once your page is created, you'll need to add a link to the page in your menu.

*   Go to your shopify admin console
*   From the left side menu, choose Sales Channels > Online Store > Navigation
*   Select 'main menu' in the list
*   Click 'add menu item' at the bottom
*   Give the new menu item a title and select the page that you created previously.
*   Click 'add'
*   Click 'save menu'

![](/images/merchant/2017-09-11-14-58-41.png)

![](/images/merchant/2017-09-11-14-55-24.png)