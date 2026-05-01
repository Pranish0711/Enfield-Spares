import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || "dev-secret-change-me");

async function getRole(token?: string) {
  if (!token) return null;
  try {
    const payload = await jwtVerify(token, secret);
    return payload.payload.role as "USER" | "ADMIN";
  } catch {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("session")?.value;
  const role = await getRole(token);
  const path = req.nextUrl.pathname;

  if ((path.startsWith("/account") || path.startsWith("/orders") || path.startsWith("/checkout")) && !role) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (path.startsWith("/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*", "/orders/:path*", "/checkout/:path*", "/admin/:path*"],
};
