import { NextResponse } from "next/server";
import portfolios from "@/content/portfolios.json";
import { delay } from "@/utils";

export async function GET() {
  await delay(2000)
  return NextResponse.json({ data: portfolios });
}