"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nextPath =
    typeof window !== "undefined"
      ? (() => {
          const params = new URLSearchParams(window.location.search);
          const raw = params.get("next");
          return raw && raw.startsWith("/") ? raw : "/";
        })()
      : "/";

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!supabase) {
      setError(
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
      );
      return;
    }

    setLoading(true);

    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    setLoading(false);

    if (signupError) {
      setError(signupError.message);
      return;
    }

    if (data.session) {
      router.push(nextPath);
      return;
    }

    setError(
      "Email confirmation is enabled in Supabase. Disable it in Authentication > Providers > Email to allow instant signup/login."
    );
  }

  return (
    <div className="page-shell grid gap-6 py-10 lg:grid-cols-[1fr_1fr]">
      <section className="surface-card p-8 lg:p-10">
        <p className="kicker">Join Zeore</p>
        <h1 className="headline mt-4 text-5xl">Create your account</h1>
        <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">GET DROPS FIRST. SHOP FASTER.</p>
      </section>

      <section className="surface-card p-8 lg:p-10">
        <form className="grid gap-4" onSubmit={handleSignup}>
          <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em]">
            Full Name
            <input
              type="text"
              placeholder="Your full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
              className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none"
            />
          </label>
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
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={6}
              required
              className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none"
            />
          </label>
          <button type="submit" className="btn-dark mt-3" disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>
          {error ? <p className="text-sm text-red-700">{error}</p> : null}
        </form>
        <p className="mt-5 text-sm text-[var(--text-soft)]">
          Already have an account?{" "}
          <Link
            href={`/login${nextPath !== "/" ? `?next=${encodeURIComponent(nextPath)}` : ""}`}
            className="font-bold text-[var(--text)]"
          >
            Login
          </Link>
        </p>
      </section>
    </div>
  );
}
