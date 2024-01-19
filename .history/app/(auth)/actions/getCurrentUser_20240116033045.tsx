import prisma from "@/lib/prismadb"
import getUserSession from "./getUserSession"

const getCurrentUser = async () => {
  try {
    const session = await getUserSession()

    if (session?.user.emai) {
      return null
    }
  }
}