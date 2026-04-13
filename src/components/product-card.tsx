import Image from "next/image";
import Link from "next/link";
import { type Product, formatPrice } from "@/lib/catalog";

export function ProductCard({
  product,
  hoverOverlay = false,
}: {
  product: Product;
  hoverOverlay?: boolean;
}) {
  return (
    <article className="group surface-card p-4">
      <Link
        href={`/${product.collection}/${encodeURIComponent(product.category)}/${product.slug}`}
        className="block"
      >
        <div className="relative h-72 overflow-hidden rounded-2xl bg-[var(--surface-soft)]">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={`object-cover object-center transition duration-500 ${
                hoverOverlay ? "group-hover:scale-110" : ""
              }`}
            />
          ) : null}
          {hoverOverlay ? (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[11px] uppercase tracking-[0.22em]">{product.badge}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em]">{product.imageTone}</p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="headline text-2xl">{product.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--text-soft)]">
              {product.category} | {product.badge}
            </p>
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.14em]">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}
