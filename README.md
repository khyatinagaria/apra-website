# APRA store: new website

Files
- `index.html`: the whole store (home, search, product pages, cart, cash-on-delivery checkout).
- `products.js` / `products.json`: all 32 products copied from apraworld.com (titles, prices, descriptions, categories).
- `images/`: 148 product and brand photos, converted to fast-loading WebP.
- `google-sheet-orders.gs`: script that emails every order to apradairy@gmail.com and saves it in a Google Sheet.

## Go live (about 20 minutes, free)
1. **Order emails + sheet**: signed in as apradairy@gmail.com, follow the steps at the top of `google-sheet-orders.gs`, then paste the web-app URL into `SHEET_URL` near the top of the script in `index.html`.
2. **Host**: drag this whole folder onto https://app.netlify.com/drop (or Cloudflare Pages / Vercel). You get a live link right away.
3. **Domain**: in Netlify, add the custom domain apraworld.com. In your domain registrar (or Shopify > Settings > Domains if Shopify manages it), point the domain to Netlify as Netlify instructs. Cancel the Shopify plan only after the new site works on apraworld.com.

Delivery is free and there is no PIN-code restriction: every product can be ordered from anywhere in India.

## How orders reach you
- Each order is emailed to apradairy@gmail.com and added to your Google Sheet (once `SHEET_URL` is set).
- The thank-you page also lets the customer send the order on WhatsApp to +91 95060 35702.
- Change the WhatsApp number or phone in `CONFIG` at the top of the script in `index.html`.

## Updating products
Edit `products.js` (price, title, description) and re-upload the folder.
