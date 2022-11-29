---
title: "Integrating with other apps"
meta_title: "How to integrate vwa.la with other apps?"
meta_description: ""
keywords:
    - merchant
    - help
sidebar: "merchant"
rank: 15
---
We've had quite a few merchants ask us how to integrate with other apps. We're going to start documenting integration set-ups here.

## Email marketing

#### Mailchimp

You can automatically sync your influencer list (and their marketing performance stats) to Mailchimp. You can set this up via `my account > store settings > mailchimp`. Your data will be automatically synced twice per day.

Your mailchimp list will contain the following influencer fields:

    First name
    Last name 
    Email
    Group
    Code

    Stats
    vCount: Number of leads
    vuCount: Number of unique leads
    oCount: Number of orders
    oSum: Total sum of all orders
    oConvPc: Lead to Order conversation ratio
    cSum: Total commission earned for all orders
    cunCont: Number of orders by new customers
    curCount:  Number of orders by returning customers
    cuRatioPc: Ratio of new to returning customers 
    mrCount: Number of social media followers

#### Klaviyo

You can automatically sync your influencer list (and their marketing performance stats) to Klaviyo. You can set this up via `my account > store settings > klaviyo`. Your data will be automatically synced twice per day.

#### ActiveCampaign

You can automatically sync your influencer list (and their marketing performance stats) to ActiveCampaign. You can set this up via `my account > store settings > ActiveCampaign`. Your data will be automatically synced twice per day.

#### Other

If your provider is not supported let us know. Otherwise, we have solved integration with 3rd party email solutions in a general way. All you need to do is export your influencers from vwa.la and import them into your email program of choice. See [exporting your data](/merchant/exporting-your-data/) for details on how to do this.

## ReCharge

We support integration with ReCharge. To enable integration, you must create a ReCharge API token. This token is a credential that allows vwa.la to listen to your ReCharge orders. We do this, so that we can track influencer commission. 

- Log into your ReCharge account and create an API token. Please follow their documentation carefully https://docs.rechargepayments.com/docs/recharge-api-key. 
- A API token has 2 parts. A key (public ID) and a secret (i.e. password). 
- In ReCharge, after you have created your token, you must set the token's permissions to match the screenshot below. Otherwise our integration will not work.
- After you have created your ReCharge API token, you must copy and paste the key and secret into your vwa.la > my account > store settings > ReCharge form. 
- In vwa.la, click TEST to confirm your token is valid. Then click SAVE. 

#### Figure 1: Your token KEY

![](/images/merchant/recharge-token-key.png)

#### Figure 2: Your token SECRET and permissions

Your permissions must match this screenshot

![](/images/merchant/recharge-token-secret.png)

### Limitations

Due to limitations with ReCharge, some vwa.la functionality is limited. 

- ReCharge does not use the standard Shopify checkout, so things like Shopify discount codes and Shopify customer IP order tracking are broken. We depend on both of these Shopify features to track discount code and link based influencer commission. 
- As a workaround, you can enable our ReCharge integration (via `my account > store settings > ReCharge`). This will give us access to listen to your ReCharge subscription events. We use this information to restore link and code based commission tracking for initial charges (not recurring charges^). If you want discount code commission tracking to work, the caveat is that you must manually re-create influencer codes in ReCharge^ (you must use the exact same name as in Shopify and keep them up to date). Because the discount codes for ReCharge subscription orders are created in ReCharge, you will need to set the customer discount of those codes in your ReCharge configuration.

^ We continue to assess the ReCharge API with the goal of fully automating these features. 

## Wordpress

If your store front is a Wordpress website and not a fully featured Shopify store, it is important to note that vwa.la will work, but will work with limited functionality. This is because Wordpress lacks the integration capabilities that we require to provide our full suite of features. 

The following features will work with wordpress:

- Influencer commission tracking via discount code
- Influencer sign ups via a URL
- Influencer dashboard / management 

The following features will not work with wordpress:

- Influencer links and link based commission tracking
- Embedding our influencer signup/login/marketing dashboard within your store front. 

## Other
We also support the following 3rd party services:

- Selly
