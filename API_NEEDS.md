# API Needs

## Billing/POS ↔ Thriftly (Thrift Store)

Format: *"[Consumer team] needs to [verb] [resource] in order to [reason]."*

### Thriftly → Billing/POS

1. **Thriftly needs to create an invoice** for a marketplace purchase in order to charge a buyer for items bought from a thrift stall.
2. **Thriftly needs to retrieve payment status** in order to confirm a buyer's payment has cleared before releasing the order to the vendor.
3. **Thriftly needs to retrieve invoice details** in order to display the purchase amount and receipt information on the buyer's order page.

### Billing/POS → Thriftly

4. **Billing/POS needs to retrieve vendor information** in order to associate an invoice with the correct thrift stall.
5. **Billing/POS needs to retrieve a vendor's category and market** in order to apply the correct commission rate when generating an invoice.
6. **Billing/POS needs to retrieve user account details** in order to verify the buyer's identity before processing a payment.

## Reflection

Interviewing Thriftly as our downstream partner showed that they mainly need our system to handle the money side of a sale — creating invoices and confirming payment status — since Thriftly's own schema has no billing logic of its own. Going the other way, checking what's actually available from Thriftly as our upstream partner, we found that vendor, category, and market data already exist in their schema and can be exposed to us, which lets us tie an invoice to the right stall and apply the correct commission without duplicating that data in our own system. Sanity-checking these statements against our Week 1 audit confirmed that everything we're asking Thriftly for (vendor, category, market, user info) maps to resources they already store, and everything they're asking us for (invoice creation, payment status, invoice detail) maps to actions our schema already supports — so none of these needs statements require either team to build something net-new.

