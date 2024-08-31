import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { SafeUser } from "../types";
import prismadb from "./prismadb";

const serverAuth = async () => {
  const session = await getServerSession(authOptions);

  if (session === null || !session?.user?.email) {
    return { currentUser: null };
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    return { currentUser: null };
  }

  const safeUser: SafeUser = {
    ...currentUser,
    createdAt: currentUser.createdAt.toISOString(),
    updatedAt: currentUser.updatedAt.toISOString(),
    emailVerified: currentUser.emailVerified?.toISOString() ?? "",
  };

  return { currentUser: safeUser };
};

export default serverAuth;
