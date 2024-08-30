import prismadb from "@/app/lib/prismadb";
import serverAuth from "@/app/lib/server-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { currentUser } = await serverAuth();

    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    return NextResponse.json(favoriteMovies);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}
