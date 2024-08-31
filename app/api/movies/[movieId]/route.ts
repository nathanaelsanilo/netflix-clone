import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/app/lib/prismadb";
import serverAuth from "@/app/lib/server-auth";

interface IParams {
  movieId: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: IParams }
) {
  try {
    const { movieId } = params;

    if (typeof movieId !== "string") {
      throw new Error("Invalid ID");
    }

    if (!movieId) {
      throw new Error("Invalid ID");
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      throw new Error("Invalid ID");
    }

    return NextResponse.json(movie);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}
