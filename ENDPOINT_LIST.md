# Endpoint List — Billing/POS → Thriftly

**Producer (this team):** Billing/POS
**Consumer:** Thriftly (Thrift Store) — Team 6

These are the endpoints Billing/POS exposes that Thriftly will call.

| Method | Path | Purpose | Maps to Need |
|---|---|---|---|
| GET | `/products` | Return available products for the thrift marketplace listing | "Thriftly needs to retrieve available products from the Billing System in order to display products that can be purchased through the thrift marketplace." |
| GET | `/products/{productId}` | Return a single product's name, price, category, and stock quantity | "Thriftly needs to retrieve product details from the Billing System in order to display accurate product names, prices, categories, and stock quantities to users." |
| GET | `/products?search={query}` | Search products by name or SKU | "Thriftly needs to search for products in the Billing System in order to allow users to find specific thrift products by name or SKU." |
| POST | `/sales` | Create a sales transaction, recording a completed purchase and updating the corresponding product's stock | "Thriftly needs to create a sales transaction in the Billing System in order to record a completed thrift purchase and update the corresponding product stock." |
| GET | `/invoices/{invoiceId}` | Return invoice details as a billing record for a completed purchase | "Thriftly needs to retrieve invoice details from the Billing System in order to provide users with a billing record for their completed purchase." |
| PATCH | `/invoices/{invoiceId}` | Update an invoice's billing status to keep it synchronized between the two systems | "Thriftly needs to update an invoice in the Billing System in order to keep the billing status of a thrift transaction synchronized between the two systems." |


	
