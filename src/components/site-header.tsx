"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/cart-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(244,244,242,0.95)] backdrop-blur">
      <div className="page-shell flex items-center justify-between gap-5 overflow-x-auto py-5">
        <Link href="/" className="shrink-0 text-4xl font-extrabold tracking-[0.08em] text-[var(--brand)]">
          ZEORE
        </Link>
        <nav className="flex min-w-max items-center gap-5">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "text-[var(--text)] font-bold" : "text-[var(--text-soft)]"
                } hover:text-[var(--text)]`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex min-w-max items-center gap-3">
          <Link
            href="/login"
            className="text-sm uppercase tracking-[0.18em] text-[var(--text-soft)] transition hover:text-[var(--text)]"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm uppercase tracking-[0.18em] text-[var(--text-soft)] transition hover:text-[var(--text)]"
          >
            Sign Up
          </Link>
          <Link href="/cart" className="btn-dark px-4 py-2 text-xs">
            Cart (<span suppressHydrationWarning>{itemCount}</span>)
          </Link>
        </div>
      </div>
    </header>
  );
}
