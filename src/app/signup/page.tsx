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
  const [success, setSuccess] = useState("");

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

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
      router.push("/");
      return;
    }

    setSuccess("Account created. Check your email to confirm your account.");
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
            <in