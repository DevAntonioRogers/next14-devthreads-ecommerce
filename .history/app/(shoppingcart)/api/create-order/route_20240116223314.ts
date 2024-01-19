import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "@/app/(auth)/actions/getCurrentUser";
import prisma from "@/lib/prismadb"
import Stripe from "stripe";
import { CartEntry } from "use-shopping-cart/core";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16"
});

const manageStripePaymentIntent = async (payment_intent_id: string, total: number) => {
  
  if (payment_intent_id) {
    return await stripe.paymentIntents.update(payment_intent_id, {amount: total})
  }

  return await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    automatic_payment_methods: {enabled: true}
  })
}