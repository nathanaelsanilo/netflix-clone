import prismadb from "@/app/lib/prismadb";
import serverAuth from "@/app/lib/server-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await serverAuth();

    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return NextResponse.json(randomMovies[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json({}, { status: 400 });
  }
}
