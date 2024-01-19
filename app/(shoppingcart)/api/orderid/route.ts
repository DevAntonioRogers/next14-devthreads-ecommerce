import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prismadb"

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const latestOrder = await prisma.order.findFirst({
      orderBy: {
        createdDate: "desc"
      },
      select: {
        id: true
      }
    })

    if (!latestOrder){
      return
    }
    
    return NextResponse.json({orderId: latestOrder.id})
  } catch (error){
    console.error(error)
    return
  }
}