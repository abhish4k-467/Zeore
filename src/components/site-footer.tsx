import Link from "next/link";

const footerLinks = [
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
  { href: "/login", label: "Login" },
];

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="page-shell grid gap-8 py-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-3">
          <p className="text-4xl font-extrabold tracking-[0.08em] text-[var(--brand)]">ZEORE</p>
          <p className="max-w-xl text-base leading-8 text-[var(--text-soft)]">
            Trend-led everyday fashion inspired by high-street minimalism. Clean edits,
            accessible price points, and fresh weekly drops.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.18em] text-[var(--text-soft)]">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
