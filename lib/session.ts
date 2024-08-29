import { getServerSession } from "next-auth/next"

// import { authOptions } from "@/lib/auth"

export async function getCurrentUser() {
  const session = await getServerSession()

  return session?.user
}
