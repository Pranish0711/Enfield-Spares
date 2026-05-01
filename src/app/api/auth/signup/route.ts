import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { setSession } from "@/lib/auth";

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "").toLowerCase();
  const password = String(form.get("password") || "");
  if (!email || !password) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ error: "Email already registered" }, { status: 409 });

  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash: await bcrypt.hash(password, 10),
      role: email === "admin@enfieldspares.com" ? "ADMIN" : "USER",
    },
  });

  await setSession({ userId: user.id, email: user.email, role: user.role });
  return NextResponse.redirect(new URL(user.role === "ADMIN" ? "/admin" : "/account", request.url), 303);
}
