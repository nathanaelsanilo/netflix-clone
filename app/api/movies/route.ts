import prismadb from "@/app/lib/prismadb";
import serverAuth from "@/app/lib/server-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await serverAuth();

    const movies = await prismadb.movie.findMany();

    return NextResponse.json(movies);
  } catch (error) {
    console.log(error);
    return NextResponse.json({}, { status: 400 });
  }
}
