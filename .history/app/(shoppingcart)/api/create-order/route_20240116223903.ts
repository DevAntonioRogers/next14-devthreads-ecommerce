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

const manageOrderInDB = async (paymentIntent: any, total: number, items:CartEntry[], userId:string) => {
  
  const existingOrder = await prisma.order.findUnique({
    where: {paymentIntentID: paymentIntent.id}
  })

  if (existingOrder) {
    return await prisma.order.update(
    {
      where: {paymentIntentID: paymentIntent.id},
      data: {userId, amount:total, currency:"usd", status: "awaiting payment"}
    })
  }

  const createdOrder = await prisma.order.create({
    data: {
      userId,
      amount: total,
      currency: "usd",
      status: "awaiting payment",
      paymentIntentID: paymentIntent.id
    }
  })

  const orderItem = items.map(async (item) => {
    await prisma.orderItem.create({
      data: {
        orderId: createdOrder.id,
        name: item.name,
      }
    })
  })
}