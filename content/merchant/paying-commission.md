---
title: "Paying commission"
meta_title: "How to pay your influencers their commission?"
meta_description: ""
keywords:
   - merchant
   - help
sidebar: "merchant"
rank: 13
---
We've designed [vwa.la](https://www.vwa.la) to make paying your influencer's their commission fast and simple.

We support multiple payment methods. You can pay influencer commission by cash or in-store credit. We also implement a number of security safeguards to ensure that you do not pay commissions on orders incorrectly.

**Supported cash payment methods**

- Paypal
- Manual bank account transfers

**Supported in-store credit payment methods**

- Gift cards
- Fixed price discount codes

## How to pay

You can start a payment from either:

- The influencers table or influencer profile page
- The influencer orders table or;
- The payment history table

This is done by clicking on the `actions` drop-down menu.

![](/images/merchant/pay-ux-launch.png)

#### Who/how to pay
The payment form will ask you which payment method you want to use and who you want to pay. If you only want to pay commission to specific influencers or for specific orders, you should first make a table selection, then start the payment.
![](/images/merchant/pay-ux-initial.png)

#### Payment filters
You can use payment filters for fine grained control over payment targeting. You can also leave a note for the influencer(s).
![](/images/merchant/pay-ux-filters.png)

####Payment preview
You can review the payment before confirming the transaction. Note: You must `accept` the checkbox to confirm you understand how the payment feature works. Click the `how does it work?` down arrow for more info.
![](/images/merchant/pay-ux-preview.png)

#### Payment processing and receipt
When you click `pay`, **please wait**. We will update the UI once the payment is complete. Once complete, you will be shown a payment receipt. The receipt is viewable on the `payments` page.

Note: The `PayPal` `simple` payment method, **opens a popup window** that must not be blocked as it is required to authorise the payment.

## PayPal

The simplest and recommended payment method to use is our PayPal integration. PayPal provides the ability to pay multiple influencers in a single secure transaction.

We have two PayPal payment integrations.

1. Simple and;
2. Advanced

You can configure your preferred method via `my account > store settings > payments`.

### Simple

This is the default setting.

Benefits:

- This approach does not require any initial setup.
- PayPal does not charge you (the sender) a transaction fee. Instead, the recipient (the influencer) pays a small fee to PayPal.

Limitations:

- You can only pay 6 influencers at a time. This is a limitation of `PayPal adaptive payments`, the technology that this payment method uses. The `advanced` solution does not have this limitation.

**How it works**

When you pay using this payment method:

- We automatically create a PayPal payment and open a PayPal `popup window`. Your browser must **allow popups** from vwa.la.
- You will be prompted to log in and `approve the payment`.
- Once the transaction is approved, your influencers will be notified of their payment via email (from both us and PayPal).
- Your orders and payment history pages will automatically update to show the current status of the payment (i.e. completed, pending recipient action etc.)

To cancel the payment, **DO NOT** close the window. Instead, click the cancel button on the PayPal payment form (the grey button in the screenshot below). Otherwise the order commission that was to be paid via the payment will be locked. This lock is automatically released after 24 hours. 

![](/images/merchant/2018-12-03-21-38-51.png)

**Important notes about the `simple` method**

- We pay influencers using the currency of your store. 
- If the payment does not transfer immediately, the recipient has 14 days to accept the payment before PayPal will reverse their payment and return funds to your account.
- PayPal limits us to paying a maximum of 6 people at a time. This is a limitation that affects all users of PayPal's adaptive payments broker solution. To work around this issue, simply replay the "Pay all by PayPal" step until all influencers are paid. If you are making payments each month, this should not be an issue. For larger merchants, we are looking at implementing a PayPal per-approval step which will allow you to grant vwa.la the ability to automate payments from your PayPal account.


### Advanced

Benefits:

- You can pay an unlimited number of influencers in a single transaction.

Limitations:

- One time setup step.
- Requires a PayPal business account with the `PayPal Payouts` feature enabled.
- Requires that you share with us a PayPal API key that allows us to send payments on your behalf. Note: See our notes section below for more information on how we securely store your data.
- PayPal will charge you (the sender) a [transaction fee](https://developer.paypal.com/docs/payouts/reference/fees/). The recipient (the influencer) will not pay any fees. 

**How it works**

When you pay using this payment method:

- We use your PayPal API key to automatically pay your influencers the amount that you have specified in the payment form. There is no additional PayPal login/authorisation form as you have pre-authorised us to make payments on your behalf.
- Once the transaction is approved, your influencers will be notified of their payment via email (from both us and PayPal).
- Your orders and payment history pages will automatically update to show the current status of the payment.

**How to set up the `advanced` method**

See the setup instructions below.

**Important notes about the `advanced` method**

- We pay influencers using the currency of your store. You must ensure that your PayPal account has funds in this currency.
- PayPal will charge you (the sender) a [transaction fee](https://developer.paypal.com/docs/payouts/reference/fees/). The recipient (the influencer) will not pay any fees. 
- If the payment does not transfer immediately, the recipient has 30 days to accept the payment before PayPal will reverse their payment and return funds to your account. 
- Your PayPal API key is secured stored in a network isolated database using 256-bit AES encryption. The encryption algorithm uses a randomly generated GUID and salt, both unique to your account. Furthermore, once received, we never transmit this key, hash or salt outside of our internet isolated subnet. 

### Important notes

#### Supported PayPal currencies 

PayPal supports the following currencies:

USD 
AUD 
EUR 
GBP 
CAD 
HKD 
JPY 
NZD 
SGD 
CHF 
MXN 
PHP 
TWD 
THB 
SEK 
PLN 
NOK 
DKK 
CZK

#### What if the recipient (influencer) doesn't have a PayPal account?
This isn't an issue. PayPal payments will work even if the recipient does not have a PayPal account. The influencer will simply need to create a PayPal account using the same email address that they use for vwa.la to receive their payments. 
 #### What if the recipient's PayPal account is invalid/restricted?
We (and PayPal) will notify any influencer if their PayPal account is incomplete and requires their attention before PayPal will complete payment. Our orders feature will exclude paying out problematic influencers for 1 week after such an event. This means you can continue paying out other influencers whilst they fix their issue. 
 #### Are there fees? Who pays them?
PayPal transactions incur a small transaction fee. The fee will be incurred by the recipient (the influencer). We recommend that you communicate this with your influencers to avoid confusion.

#### My PayPal transaction failed, PayPal says that I should verify my bank account...
PayPal takes security and fraud very seriously. If you see this message when trying to transfer money, you'll need to ensure that your bank account is linked to your PayPal account. This process is simple and is secure/safe. PayPal will make 2-3 small deposits into your bank account and will ask you to verify them. Once verified you'll be able to pay your influencers without issue.

#### vwa.la says that my commission payment is pending, what does that mean?
If the influencer does not yet have a PayPal account, payments will be marked as pending. Once the influencer creates their PayPal account, they will claim your payment and the transaction will be marked as `paid`. 
 #### I support multiple currencies, which one does vwa.la use?
Your store may allow for the user to change currency. However, Shopify only supports a single operating currency. This means that from Shopify's perspective, all products and customer orders are always in your operating currency. vwa.la only uses your operating currency when calculating commission calculations and making payments.

## Store credit

You can choose to pay your influencers their commission using store credit.

Limitations:

- You can pay only 1 influencer at a time with this method.

**How it works**

To pay using this payment method:

- Click `pay by commission` to open the payment form.
- Choose the `store credit` option in the `who to pay` field. Note: This option will only be visible if you have selected 1 influencer before opening the payment form.
- Click `next` to preview the commission amount that is to be paid.
- Shopify does not allow 3rd party applications to automatically create gift cards on your store's behalf. Therefore, you'll need to create a gift card or single use fixed amount discount code manually in your Shopify admin console for the displayed commission amount. Once you've created the gift card/discount code, you must copy and paste it into the payment form. Then click `pay`.
- We will then mark the affected orders as 'commission paid' and will send a notification to the influencer with their gift card / discount code information.
- You can track your payment history on the `payments` page.

## By Bank Account

You can choose to pay your influencers their commission outside of vwa.la, using your bank account or another means of manual transfer.

Limitations:

- Unlike our PayPal integration, this payment method is not automated.

**How it works**

To pay using this payment method:

- Click `pay by commission` to open the payment form.
- Choose the `manual` transfer option in the `who to pay` field.
- Click `next` to preview the commission amount that is to be paid.
- Click `pay` to complete the payment. This will update the status of the selected influencer orders as commission `paid` and will notify the affected influencers. You'll then need to handle the actual transfer of money yourself outside of [vwa.la.](https://vwa.la).
- We will then mark the affected orders as 'commission paid' and will send a notification to the influencer with their gift card / discount code information.
- You can track your payment history on the `payments` page.


## Transferwise

We are investigating the potential of using Transferwise to pay out influencer commission. Is this important to you? Feedback is highly welcome.

## Cryptocurrency

We are investigating the potential of using Cryptocurrency to pay out influencer commission. Is this important to you? Feedback is highly welcome.

## FAQ

### Why can't I pay commission?

When trying to pay commission, you may see the following message:

      You do not have any commission that is owed and payable at this time

This is normal behaviour. This occurs when:

- You do not owe any commission or;
- You owe commission, but it is not payable at this time. Payable commission is determined based on your payment rules (which are customisable).

### What are payment rules?

Payment rules ensure that you do not pay commission on orders that are cancelled, refunded or fraudulent. 

Therefore to prevent incorrect payments, you can only pay commission that are satisfy the following rules:

- Orders must be:
   - Paid
   - Fulfilled (delivered)
   - At least 15 days old
- Optionally, you can also require influencers to have met the following minimum criteria before they are eligible to be paid:
   - Earned a minimum commission amount or;
   - Generated a minimum number of orders

All of these rules are **customisable** (see below). 

### How can I customise my payable commission rules?

Commission payment rules can be customized via `my account > store settings`. Changing the rules here, will affect all future payments.

If you wish to override your payment rules for a single payment only, you can do so from within the payment form. E.g. from the `payment`, `influencer` or `orders` table, select `pay commission`. When the form opens, go to the `prepare payment` step and then click `customise` to reveal a list of payment customisation options. 

### How can I see payable commission?

You can see commission `owed`, `payable` and `paid` stats in the following places:

- The `stats` page. Switch the chart view to `commission`.
- The `influencer` page. The table has columns with these stats
- An `influencer`'s profile page. The `overview` section of their profile has a table with columns showing these stats

### I got an error from PayPal

If you are using our `simple` PayPal integration (default behaviour) to pay your influencer's their commission, then you may experience PayPal service outage issues. These issues are infrequent but they can occur. In this situation:

- The commission payment is in a `locked` status
- No money has or will be transferred from your PayPal account
- The lock prevents double payment of your commission and will be automatically released in a few hours once the PayPal transation expires. We will then automatically update our records to show that the payment was cancelled. 
- Once the lock is released you can repeat the payment.
- If you continue to experience PayPal errors, you should switch to our `advanced` PayPal integration (documented above). This uses a more advanced PayPal technology behind the scenes.

### Other

#### What about order changes, cancellations or refunds?
We track the life-cycle of your orders. This ensures that order changes (i.e. refunds / cancellations etc.) trigger re-calculations of influencer commissions.

## PayPal advanced setup

Overview:

- You must have a PayPal business account.
- The PayPal account must have `PayPal PayOuts` enabled.
- You must create a PayPal REST API app.
- You must then authorise vwa.la to use this application, by sharing the app's REST API client id and secret (via `my account > store settings > payments`). vwa.la will then securely store this information and use it to make payments to influencers on your behalf (only as requested).

#### PayPal business account setup

This can be done by logging into your [PayPal account](https://www.paypal.com) (or creating one). You will need to link and verify a bank account as well as specify your business number for tax purposes.

#### Enable `PayPal PayOuts`

- Go to https://developer.paypal.com/developer/accountStatus/
- Ensure that `PayOuts` is enabled (a green tick in both the sandbox and live columns of the table below). 
![](/images/merchant/pp-enable-payouts.png)
- Non-US customers will need to contact PayPal support by [phone](https://www.paypal.com/au/smarthelp/contact-us) or [email](https://www.paypal-support.com/s/contactsupport) to activate the `PayOuts` feature. This process usually takes 24 hours. If you choose to contact PayPal via email, use the following screenshot as an example of how to complete the form.
![](/images/merchant/pp-contact-support.png)

*Sample text*
> I run an online business. We have a team of influencer marketers who promote our products in exchange for commission. Please enable the PayPal payouts technology for my account. It is essential to simplifying the bulk payment of our influencers. Thankyou

#### Create a PayPal REST API app

**In vwa.la**

- Go to `my account > store settings > payments`.
- In the `PayPal setup` section, choose `advanced`. This will prompt you to enter a PayPal client Id and secret.
- To create these values, you must now go to https://developer.paypal.com/developer/applications/

**In PayPal**

- Go to the `REST API apps` section
![](/images/merchant/pp-apps.png)
- Click `Create App` to create a new PayPal REST application.
![](/images/merchant/pp-new-app.png)   
   - Name: `vwala commission payments` (optional)
   - Email: Your business account email address
   - Save the form
- Open the app that you have just created
   - On the top right, select `live`. You can ignore the `sandbox` section, this is for app testing only.
   - Copy and paste `client id` and `secret` fields into the `vwa.la > my account > store settings > payments` form.
   ![](/images/merchant/pp-live-credentials.png)
   - Ensure that the following options are enabled for the application.
   ![](/images/merchant/pp-live-settings.png)   
 
  


**In vwa.la**
- Click `test` within the vwa.la form to validate that the copied values are correct.
- Click `save`.
![](/images/merchant/pp-setup.png)   



