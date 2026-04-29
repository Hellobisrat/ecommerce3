import express from 'express';
import Stripe from 'stripe';
import {protect} from '../middlewares/authMiddleware.js';

const router =express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session",protect,async(requestAnimationFrame,res)=>{
  try {
    const {items}= req.body;

    const lineItems = items.map((item)=>({
      price_data:{
        currency:"usd",
        product_data:{
          name:item.name,
          images:[item.image]
        },
        unit_amount:Math.round(item.price * 100)
      },
      quantity: item.quantity
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      line_items:lineItems,
      mode:"payment",
      success_url:`${process.env.CLIENT_URL}/payment-success`,
      cancel_url:`${process.env.CLIENT_URL}/payment-cancel`
    })
    res.json({url: session.url})
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

export default router;