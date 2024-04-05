import { redirect } from 'next/navigation'

export async function POST(
  req: Request,
) {
  const formData = await req.formData()
  const productsData = formData.get("products");

  if (productsData === null) {
    throw new Error("Products data is missing");
  }

  const products = JSON.parse(productsData as string);

  let lineItems = [];
  for (let price in products){
    lineItems.push({"price": price, "quantity": products[price].qty})
  }
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  let session;
 try {
      // Create Checkout Sessions from body params.
      const requestHeaders = new Headers(req.headers)
      console.log("my products in the route are", products)
      console.log("my line items in the route are", lineItems)

      session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        shipping_address_collection: {
          allowed_countries: ["US"],
        },
        mode: 'payment',
        success_url: `${requestHeaders.get('origin')}/checkout?status=true`,
        cancel_url: `${requestHeaders.get('origin')}/`,
      });

    } catch (err) {
      console.log(err)
         return new Response('Generic Server Error', {
      status: 500
      })
    }
    redirect(session.url);
}
