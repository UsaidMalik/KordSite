import { redirect } from 'next/navigation'

export async function POST(
  req: Request,
) {
  console.log("body of req is",req);
  const formData = await req.formData()
  const products = await JSON.parse(formData.get("products"))
  let lineItems = Object.entries(products).map(([key, val]) => ({[key]: val}));
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  let session;
  console.log("my products are", products)

  console.log("my products are", lineItems)
 try {
      // Create Checkout Sessions from body params.
      const requestHeaders = new Headers(req.headers)
      console.log(products)
      session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${requestHeaders.get('origin')}/?success=true`,
        cancel_url: `${requestHeaders.get('origin')}/?canceled=true`,
      });
      console.log(session.url)
    } catch (err) {
      console.log(err)
         return new Response('Generic Server Error', {
      status: 500
      })
    }
    redirect(session.url);
}
