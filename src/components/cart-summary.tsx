"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { formatPrice, products } from "@/lib/catalog";

export function CartSummary() {
  const { items, subtotal, updateItem, removeItem } = useCart();
  const lineItems = items.flatMap((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return product ? [{ item, product }] : [];
  });

  if (lineItems.length === 0) {
    return (
      <div className="surface-card p-8">
        <p className="text-sm leading-8 text-[var(--text-soft)]">
          Your cart is empty. Start from the{" "}
          <Link href="/new-arrivals" className="font-bold text-[var(--text)]">
            new arrivals
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-4">
        {lineItems.map(({ item, product }) => (
          <article
            key={product.id}
            className="surface-card grid gap-4 p-4 md:grid-cols-[150px_1fr]"
          >
            <div className="relative h-40 overflow-hidden rounded-xl bg-[var(--surface-soft)]">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                />
              ) : null}
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="kicker">{product.collection.replace("-", " ")}</p>
                <h2 className="headline mt-2 text-3xl">{product.name}</h2>
                <p className="mt-2 text-sm text-[var(--text-soft)]">
                  {product.color} | {product.fit}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-[0.15em]">
                  {formatPrice(product.price)}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateItem(product.id, item.quantity - 1)}
                    className="h-8 w-8 rounded-full border border-[var(--line)] bg-white text-sm"
                  >
                    -
                  </button>
                  <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateItem(product.id, item.quantity + 1)}
                    className="h-8 w-8 rounded-full border border-[var(--line)] bg-white text-sm"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(product.id)}
                  className="text-xs uppercase tracking-[0.18em] text-[var(--text-soft)]"
                >
                  Remove
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="surface-card h-fit p-6">
        <p className="kicker">Summary</p>
        <div className="mt-6 space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span>{subtotal > 0 ? "Free" : "$0"}</span>
          </div>
          <div className="flex items-center justify-between border-t border-[var(--line)] pt-4 font-bold">
            <span>Total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
