"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nextPath = (() => {
    const raw = searchParams.get("next");
    return raw && raw.startsWith("/") ? raw : "/";
  })();

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!supabase) {
      setError(
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
      );
      return;
    }

    setLoading(true);
    const { error: signinError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (signinError) {
      setError(signinError.message);
      return;
    }

    router.push(nextPath);
    router.refresh();
  }

  return (
    <div className="page-shell grid gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="surface-card p-8 lg:p-10">
        <p className="kicker">Welcome Back</p>
        <h1 className="headline mt-4 text-5xl">Sign in to Zeore</h1>
        <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">FASTER CHECKOUT. QUICK TRACKING.</p>
      </section>

      <section className="surface-card p-8 lg:p-10">
        <form className="grid gap-4" onSubmit={handleLogin}>
          <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em]">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none"
            />
          </label>
          <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em]">
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none"
            />
          </label>
          <button type="submit" className="btn-dark mt-3" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </button>
          {error ? <p className="text-sm text-red-700">{error}</p> : null}
        </form>
        <p className="mt-5 text-sm text-[var(--text-soft)]">
          New to Zeore?{" "}
          <Link
            href={`/signup${nextPath !== "/" ? `?next=${encodeURIComponent(nextPath)}` : ""}`}
            className="font-bold text-[var(--text)]"
          >
            Create an account
          </Link>
        </p>
      </section>
    </div>
  );
}
