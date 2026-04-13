import Link from "next/link";
import { CartSummary } from "@/components/cart-summary";

export default function CartPage() {
  return (
    <div className="page-shell space-y-8 py-10">
      <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="surface-card p-8 lg:p-10">
          <p className="kicker">Shopping Bag</p>
          <h1 className="headline mt-5 text-5xl">Your selected products</h1>
          <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">REVIEW. EDIT. CHECKOUT.</p>
        </div>
        <div className="surface-card p-8 lg:p-10">
          <p className="kicker">Need Help?</p>
          <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">FAST DELIVERY. EASY RETURNS.</p>
        </div>
      </section>

      <CartSummary />

      <div className="flex items-center justify-between gap-4">
        <Link href="/new-arrivals" className="btn-light">
          Continue Shopping
        </Link>
        <Link href="/checkout" className="btn-dark">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
