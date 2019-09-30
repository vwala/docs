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

You can automatically sync your influencer list (and there marketing performance stats) to Mailchimp. You can set this up via `my account > store settings > mailchimp`. Your data will be automatically synced twice per day.

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

#### Klaviyo

You can automatically sync your influencer list (and there marketing performance stats) to Klaviyo. You can set this up via `my account > store settings > klaviyo`. Your data will be automatically synced twice per day.

#### Other

If your provider is not supported let us know. Otherwise, we have solved integration with 3rd party email solutions in a general way. All you need to do is export your influencers from vwa.la and import them into your email program of choice. See [exporting your data](/merchant/exporting-your-data/) for details on how to do this.

## ReCharge

To integrate with ReCharge, you'll need to ensure that ReCharge creates orders with the influencers discount code. You'll need to set this up manually for each ReCharge subscription using ReCharge.

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
