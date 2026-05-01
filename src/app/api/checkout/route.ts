import { NextResponse } from "next/server";

const shippingByRegion: Record<string, number> = {
  IN: 399,
  US: 1800,
  EU: 2200,
  ME: 2000,
  APAC: 1700,
};

export async function POST(request: Request) {
  const body = await request.json();
  const region = String(body.regionCode || "US");
  const shipping = shippingByRegion[region] ?? 2500;
  return NextResponse.json({ shipping, currency: body.currency || "USD" });
}
