"use client";

import { useCart } from "@/components/cart-provider";

export function AddToCartButton({ productId }: { productId: string }) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(productId)}
      className="btn-dark px-5 py-3 text-xs"
    >
      Add To Cart
    </button>
  );
}
