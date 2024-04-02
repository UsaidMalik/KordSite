import { redirect } from 'next/navigation'

export async function POST(
  req: Request,
) {
  const formData = await req.formData()
  const products = await JSON.parse(formData.get("products"))
  let lineItems = Object.entries(products).map(([key, val]) => ({price: key.toString(), quantity: val}));
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  let session;
 try {
      // Create Checkout Sessions from body params.
      const requestHeaders = new Headers(req.headers)
      console.log("my products in the route are", products)
      console.log("my line items in the route are", lineItems)

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
