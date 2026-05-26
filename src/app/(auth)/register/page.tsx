"use client";

import { register } from "@/actions/auth";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await register(formData);
      if (result && "error" in result) {
        setError(result.error);
      } else {
        router.push("/");
        router.refresh();
      }
    });
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-4xl">👑</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Create an account</h1>
          <p className="text-gray-500 text-sm mt-1">Track your orders and reorder favorites</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone (optional)</label>
              <input
                type="tel"
                name="phone"
                placeholder="(832) 000-0000"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="At least 8 characters"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 px-4 py-2 rounded-lg">{error}</p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-amber-600 text-white py-3 rounded-xl font-semibold hover:bg-amber-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-700 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
