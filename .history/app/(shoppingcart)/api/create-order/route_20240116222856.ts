import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "@/app/(auth)/actions/getCurrentUser";
import prisma from "@/lib/prismadb"
import Stripe from "stripe";
import { CartEntry } from "use-shopping-cart/core";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16"
});

