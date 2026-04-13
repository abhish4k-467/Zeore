"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/components/auth-provider";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/catalog";

export default function CheckoutPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { subtotal, itemCount, clearCart } = useCart();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login?next=/checkout");
    }
  }, [loading, router, user]);

  if (loading || !user) {
    return (
      <div className="page-shell py-10">
        <div className="surface-card p-8">
          <p className="text-sm uppercase tracking-[0.14em] text-[var(--text-soft)]">
            Redirecting to login...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell grid gap-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
      <section className="surface-card p-8 lg:p-10">
        <p className="kicker">Checkout</p>
        <h1 className="headline mt-4 text-5xl">Complete your order</h1>
        <div className="mt-6 rounded-2xl border border-red-300 bg-red-50 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-red-700">
            Server Error
          </p>
          <p className="mt-2 text-sm text-red-700">
            Stripe server error. We are unable to process payments right now.
          </p>
        </div>
        <form className="mt-8 grid gap-4">
          <input
            placeholder="Full name"
            className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none"
          />
          <input
            placeholder="Email address"
            className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none"
          />
          <input
            placeholder="Shipping address"
            className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <input
              placeholder="City"
              className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none"
            />
            <input
              placeholder="Postal code"
              className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none"
            />
          </div>
          <button type="button" onClick={clearCart} className="btn-dark mt-2">
            Place Order
          </button>
        </form>
      </section>

      <aside className="surface-card h-fit p-8">
        <p className="kicker">Order Summary</p>
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span>Items</span>
            <span>{itemCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
        </div>
        <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">SECURE PAYMENT. FAST DELIVERY.</p>
        <Link href="/cart" className="btn-light mt-6">
          Return To Cart
        </Link>
      </aside>
    </div>
  );
}
