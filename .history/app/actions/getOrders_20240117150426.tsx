import prisma from "@/lib/prismadb";

export const getOrders = async (user: any) => {
  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    include: { items: true },
  });

  return orders;
};
