import { NextResponse } from "next/server";
import portfolios from "@/content/portfolios.json";
import { delay } from "@/utils";

// export async function GET() {
//   await delay(2000)
//   return NextResponse.json({ data: portfolios });
// }

export async function GET() {
  const res = await fetch("http://localhost:3001/api/portfolios");

  if (!res.ok) {
    return Response.json({ message: "Fetch Failed!" }, { status: 400 });
  }

  const portfolios = await res.json();

  return Response.json(portfolios);
}