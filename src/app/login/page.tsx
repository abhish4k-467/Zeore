import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="page-shell grid gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="surface-card p-8 lg:p-10">
        <p className="kicker">Welcome Back</p>
        <h1 className="headline mt-4 text-5xl">Sign in to Zeore</h1>
        <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">FASTER CHECKOUT. QUICK TRACKING.</p>
      </section>

      <section className="surface-card p-8 lg:p-10">
        <form className="grid gap-4">
          <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em]">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none"
            />
          </label>
          <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em]">
            Password
            <input
              type="password"
              placeholder="Enter your password"
              className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none"
            />
          </label>
          <button type="submit" className="btn-dark mt-3">
            Login
          </button>
        </form>
        <p className="mt-5 text-sm text-[var(--text-soft)]">
          New to Zeore?{" "}
          <Link href="/signup" className="font-bold text-[var(--text)]">
            Create an account
          </Link>
        </p>
      </section>
    </div>
  );
}
