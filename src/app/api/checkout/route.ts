import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/actions/orders";

export async function POST(req: NextRequest) {
  const { items, orderType, address, specialNotes } = await req.json();
  const result = await createCheckoutSession(items, orderType, address, specialNotes);
  return NextResponse.json(result);
}
