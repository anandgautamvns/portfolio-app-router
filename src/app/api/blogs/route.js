import { NextResponse } from "next/server";
import blogs from "@/content/blogs.json";
import { delay } from "@/utils";

// export async function GET() {
//   await delay(2000)
//   return NextResponse.json({ data: blogs });
// }

export async function GET() {
  const res = await fetch("http://localhost:3001/api/blogs");

  if (!res.ok) {
    return Response.json({ message: "Fetch Failed!" }, { status: 400 });
  }

  const blogs = await res.json();

  return Response.json(blogs);
}