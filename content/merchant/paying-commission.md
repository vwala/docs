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
We've designed vwa.la to make paying your influencer's their commission fast and simple.

We support multiple payment methods. You can pay influencer commission by cash or store credit. We also implement a number of security safeguards to ensure that you do not pay commissions on orders incorrectly.

**Supported cash payment methods**

- Paypal (automated)
- Manual (i.e. a manual bank account transfer outside vwa.la with automated vwa.la record keeping)

**Supported store credit payment methods**

- Single use, fixed amount discount codes (automated)

These methods are explained in more detail below.

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
2. Advanced (recommended)

You can configure your preferred method via `my account > store settings > payments`.

### Simple

This is the default setting. It uses `PayPal adaptive payments` technology.

Benefits:

- This approach does not require any initial setup.
- PayPal does not charge you (the sender) a transaction fee. Instead, the recipient (the influencer) pays a small fee to PayPal.

Limitations:

- You can only pay 6 influencers at a time. This is a limitation of `PayPal adaptive payments`, the technology that this payment method uses. The `advanced` solution does not have this limitation. We recommend `advanced` for this reason.
- Some users have experienced intermittent outage or transaction rejection issues with PayPal's service when using `simple` (the solution is to use `advanced`). 

**How it works**

When you pay using this payment method:

- We automatically create a PayPal payment and open a PayPal `popup window`. Your browser must **allow popups** from vwa.la.
- Paypal will then ask you to log in and `approve the payment`. 
- Once the transaction is approved, your influencers will be notified of their payment via email (from both us and PayPal).
- Your orders and payment history pages will automatically update to show the current status of the payment (i.e. completed, pending recipient action etc.)

To cancel the payment, **DO NOT** close the window. Instead, click the cancel button on the PayPal payment form (the grey button in the screenshot below). Otherwise the order commission that was to be paid via the payment will be locked. This lock is automatically released after 24 hours. 

![](/images/merchant/2018-12-03-21-38-51.png)

**Important notes about the `simple` method**

- We pay influencers using the currency of your store. 
- If the payment does not transfer immediately, the recipient has 14 days to accept the payment before PayPal will reverse their payment and return funds to your account.
- PayPal limits us to paying a maximum of 6 people at a time. This is a limitation that affects all users of PayPal's adaptive payments broker solution. To work around this issue, simply replay the "Pay all by PayPal" step until all influencers are paid. If you are making payments each month, this should not be an issue. For larger merchants, we are looking at implementing a PayPal per-approval step which will allow you to grant vwa.la the ability to automate payments from your PayPal account.


### Advanced

This is our recommended approach. It uses `PayPal PayOuts API` technology.

Benefits:

- You can pay an unlimited number of influencers in a single transaction.
- No need to authorise every PayPal payment.
- PayPal's most reliable solution.

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

See the `PayPal advanced setup` section below for detailed instructions.

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

There are 2 ways this can be done. You can pay out unpaid commission as store credit manually via your dashboard; or you can allow your influencers to redeem their commission as store credit via their dashboard themselves. 

You can enable/disable store credit payment options, via `my account > store settings > commission payment methods` 

**How it works (allowing influencers to redeem store credit)**

If enabled via your store settings, this approach:

- Saves you time, as your influencers can redeem commission at their discretion. 
- Each influencer's dasbhoard will have a `commission` section with the ability to view their commission owed, paid as well as track their store credit usage.
- They can use the `commission > redeem commission as store credit` feature to redeem any unpaid commission
- This will generate a single use, fixed amount discount code that they can use during their next purchase
- If there is any balance remaining after their next purchase, they can use the remaining balance in a future purchase by acquiring a new credit code from their dashboard.

**How it works (paying manually)**

To pay using this payment method:

- Go to the influencer page and sort the table by the commission payable column (from most to least). This will allow you to see which influencers have unpaid commission that is payable at this time (Note: To learn more about payment rules and how to customise them, see the payment rules section below). 
- Select 1 or more influencers who you wish to pay commission. 
- Then in the `actions` menu above the table, click `pay commission`.
- Choose the `store credit` option in the `how to pay` field
- Click `next` to preview the commission amount that is to be paid. The preview will show all influencers that are to be paid commission and the amount they will receive. The `code` column will specify the credit code that we will automatically create for each influencer in the payment. This code is a single use, fixed amount shopify discount code. 
- Click `pay`.
- We will then automatically create the store credit codes and notify each influencer. 
- You can track your payment history on the `payments` page. 
- You can `cancel` a credit payment via the `payments` page.

## Manual (e.g. manual bank transfer)

You can choose to pay your influencers their commission outside of vwa.la, using your bank account or another means of manual transfer. 

This method is useful when you want to mark commission as paid within vwa.la, but perform the payment outside of vwa.la using your preferred method. 

Limitations:

- Unlike our PayPal integration, this payment method is not automated.

**How it works**

To pay using this payment method:

- Click `pay by commission` to open the payment form.
- Choose the `manual` transfer option in the `who to pay` field.
- Click `next` to preview the commission amount that is to be paid.
- Click `pay` to complete the payment. This will update the status of the selected influencer orders as commission `paid` and will notify the affected influencers. You'll then need to handle the actual transfer of money yourself outside of [vwa.la.](https://vwa.la).
- We will then mark the affected orders as 'commission paid' and will send a notification to the influencer.
- You can track your payment history on the `payments` page.


## Transferwise

We are investigating the potential of using Transferwise to pay out influencer commission. Is this important to you? Feedback is highly welcome.

## Cryptocurrency

We are investigating the potential of using Cryptocurrency to pay out influencer commission. Is this important to you? Feedback is highly welcome.

## FAQ

### How can I see payable commission?

You can see commission `owed`, `payable` and `paid` stats in the following places:

- The `stats` page. Switch the chart view to `commission`
- The `influencer` page. The table has columns that show these stats for each influencer
- An `influencer`'s profile page. The `chart` and the `overview` section of an influencer's profile also displays these stats

### What is the difference between commission owed and commission payable?

`Commission owed` is the total unpaid commission earned by your influencer(s).

`Commission payable` is <= `commission owed`. It is the amount of unpaid commission that can be paid to the influncer at this time. This amount is calculated using your `payment rules` (Payment rules are customisable. Please see the `payment rules` section below)

### Why can't I pay commission?

When trying to pay commission, you may see the following message:

      You do not have any commission that is owed and payable at this time

This is normal behaviour. This occurs when:

- You do not owe any commission or;
- You owe commission, but it is not payable at this time. Payable commission is determined based on your `payment rules` (Payment rules are customisable. Please see the `payment rules` section below).

### What are payment rules?

Payment rules ensure that you do not pay commission on newly created orders that may change (i.e. cancelled, refunded or amended). 

Therefore to prevent incorrect commission payments, you can only pay commission when the following `payment rules` are satisifed:

- An influencer referal order must be:
   - Paid (by customer)
   - Fulfilled (delivered)
   - At least 15 days old
- Optionally, you can also require influencers to have met the following minimum criteria before they are eligible to be paid:
   - Earned a minimum commission amount or;
   - Generated a minimum number of orders

All of these rules are **customisable** (see below). 

### How can I customise my payable commission rules?

Commission payment rules can be customized via `my account > store settings > commission payment rules`. Changing the rules here, will affect all future payments.

If you wish to override your payment rules for a single payment only, you can do so from within the `pay commission` form. E.g. from the `payment`, `influencer` or `orders` table, select `pay commission` in the actions menu. When the form opens, go to the `prepare payment` step and then click `customise` to reveal a list of payment customisation options. 

### I could not make a PayPal payment

If you are using our `simple` PayPal integration (default) to pay your influencer's their commission, then you may experience the following issue:

- Your payment is in a `pending approval` or `cancelled` state because you did not `approve` the PayPal transaction. This occurs when:
   - Your browser blocked vwa.la from opening the PayPal approval popup window or; 
   - The PayPal popup appeared, but you did not approve (or cancel) the payment approval form or; 
   - The PayPal popup appeared and you approved the payment, but PayPal gave an error when approving the payment;

If PayPal rejected your payment, you will receive either one of the following errors:

- PayPal displayed a `service outage` error or;
- PayPal displayed a `payment can not be made at this time` error.  

**What do I do If i get a `service outage` error from PayPal?**

- PayPal periodically experiences service outage issues. You should wait a few hours before attempting to make future payments.
- When you receive this error, your vwa.la `payments` page will list the failed payment, with a `pending approval` status. See the `pending approval` status explanation below for what this means,

**What do I do If i get a `payment can not be made at this time` error from PayPal?**

- It is likely that PayPal is rejecting the payment. PayPal will block any payment that it believes is atypical behaviour. You should contact PayPal customer support via your PayPal account and inform them that your payments are valid behaviour and that PayPal should stop blocking them. You should inform them that you are using PayPal's `apdative payments` technology and provide them with the time of the payment.
- When you receive this error, your vwa.la `payments` page will list the failed payment, with a `cancelled` status.

**What do I do If i get a `the receiver does not accept payments in this currency` error from PayPal?**

If you receive a `the receiver does not accept payments in this currency` error, this indicates that the influencer's PayPal account does not support your store's currency. To fix this issue, the influencer must go to their PayPal account and using the `currencies > add currency` page, add your store's currency.

**What does a `pending approval` payment status mean?**

This means that when you used the `pay commission` form, we created a PayPal payment but you did/could not approve it. As a result:

- No money has or will be transferred from your PayPal account
- The influencer orders affected by the commission payment are in a temporarilly `locked` status. The lock prevents double payment of your commission and will be automatically released in a few hours once the PayPal transation expires. When the lock is released we will automatically update our records to show that the payment was cancelled. 
- Once the lock is released you can retry the payment.
- If you continue to experience PayPal errors, you should switch to our `advanced` PayPal integration (documented above). This uses a more advanced PayPal technology behind the scenes.

### Do I need a PayPal account to pay commission?

If you want to use PayPal, then yes, you require a PayPal account.

Previously we supported the ability to pay anonymously using credit card (a `guest` checkout), however due to technical limitations with how PayPal works, we can no longer support it. 

### Other

#### What about order changes, cancellations or refunds?
We track the life-cycle of your orders. This ensures that order changes (i.e. refunds / cancellations etc.) trigger re-calculations of influencer commissions.

## PayPal advanced setup

Summary:

1. You must have a PayPal business account
1. The PayPal account must have `PayPal PayOuts` enabled
1. You must then create a `PayPal REST API application`. This allows 3rd party apps like vwa.la, to send payments on your behalf.
1. You must then authorise vwa.la to use the `PayPal REST API application`, by copying the `PayPal REST API application`'s credential (client id and secret) and pasting them into your vwa.la PayPal setup form (via `my account > store settings > payments`). vwa.la will then securely store this information and use it to make payments to influencers on your behalf (only as requested)

#### Step 1: PayPal business account setup

If your PayPal account is not a business account, you must: 

- Log into your [PayPal account](https://www.paypal.com) and;
- Upgrade it to a business account. This step will require you to link and verify your bank account as well as specify your business number for tax purposes.

#### Step 2: Enable `PayPal PayOuts`

- Go to https://developer.paypal.com/developer/accountStatus/
- Ensure that `PayOuts` is enabled (a green tick in both the sandbox and live columns of the table below). It make take 24 hours for this change to take effect. 
![](/images/merchant/pp-enable-payouts.png)
- Non-US customers will need to contact PayPal support by [phone](https://www.paypal.com/au/smarthelp/contact-us) or [email](https://www.paypal-support.com/s/contactsupport) to activate the `PayOuts` feature. This process usually takes 24 hours. If you choose to contact PayPal via email, use the following screenshot as an example of how to complete the form.
![](/images/merchant/pp-contact-support.png)

*Sample text*
> I run an online business. We have a team of influencer marketers who promote our products in exchange for commission. Please enable the PayPal payouts technology for my account. It is essential to simplifying the bulk payment of our influencers. Thankyou

#### Step 3: Create a `live` PayPal REST API app

**Go to PayPal**

- Go to https://developer.paypal.com/developer/applications/ and in the left menu, click `My Apps & Credentials`. 
![](/images/merchant/pp-apps.png)
- The main section header will say `My Apps & Credentials`. Below it, there will a `sandbox` and a `live` button. 
- Click the `live`  button.  
- Click `Create App` to create a new `live` PayPal REST application and enter the following:
![](/images/merchant/pp-new-app.png)   
   - Name: `vwala commission payments` (optional)
   - Email: *Your PayPal business account's email address*
   - Save the form
- Open the app that you have just created (make sure you are using the **live version**). You should now see the applications' `client id` and `secret`. You will need to click `show` to reveal the secret. 
   - Copy and paste the `client id` and `secret` fields into the `vwa.la > my account > store settings > payments` form (instructions below).
   ![](/images/merchant/pp-live-credentials.png)
   - Ensure that the following options are enabled for the application.
   ![](/images/merchant/pp-live-settings.png)   
 
  
**Go to vwa.la**

- Go to `my account > store settings > payments`.
- In the `PayPal setup` section, choose `advanced`. This will prompt you to copy & paste your PayPal `client Id` and `secret` from the previous step.
- Click `save` to save your changes.
- To verify that your setup is correct, click `test`
![](/images/merchant/pp-setup.png)   



