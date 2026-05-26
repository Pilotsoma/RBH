"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().optional(),
});

export type ActionResult = { error: string } | { success: string };

export async function register(formData: FormData): Promise<ActionResult> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    phone: formData.get("phone"),
  };

  const parsed = registerSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const { name, email, password, phone } = parsed.data;

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) return { error: "An account with this email already exists" };

  const hashed = await bcrypt.hash(password, 12);
  await db.user.create({
    data: { name, email, password: hashed, phone: phone || null },
  });

  await signIn("credentials", { email, password, redirect: false });
  return { success: "Account created!" };
}

export async function login(formData: FormData): Promise<ActionResult> {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return { success: "Logged in!" };
  } catch (err) {
    if (err instanceof AuthError) {
      return { error: "Invalid email or password" };
    }
    throw err;
  }
}

export async function logout() {
  const { signOut } = await import("@/lib/auth");
  await signOut({ redirectTo: "/" });
}
