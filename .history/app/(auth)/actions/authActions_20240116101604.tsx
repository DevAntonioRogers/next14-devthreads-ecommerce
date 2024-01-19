"use server"
import prisma from "@/lib/prismadb"
import { revalidatePath } from "next/cache"
import bcrypt from "bcrypt"

export async function createUser(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const name = formData.get("name") as string
    const password = formData.get("password") as string
  }
}