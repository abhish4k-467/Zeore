import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import {
  collectionMeta,
  formatPrice,
  getProductBySlug,
  type CollectionKey,
} from "@/lib/catalog";

type Params = {
  collection: CollectionKey;
  category: string;
  slug: string;
};

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { collection, category, slug } = await params;
  const decodedCategory = decodeURIComponent(category);
  const product = getProductBySlug(collection, slug);

  if (!collectionMeta[collection] || !product || product.category !== decodedCategory) {
    notFound();
  }

  return (
    <div className="page-shell grid gap-6 py-10 lg:grid-cols-[1.02fr_0.98fr]">
      <section className="surface-card p-4 lg:p-6">
        <div className="relative h-[560px] overflow-hidden rounded-2xl bg-[var(--surface-soft)]">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover object-center"
            />
          ) : null}
        </div>
      </section>

      <section className="surface-card p-8 lg:p-10">
        <p className="kicker">
          {collectionMeta[collection].title} / {product.category}
        </p>
        <h1 className="mt-4 text-6xl font-light tracking-tight">{product.name}</h1>
        <p className="mt-4 text-base font-normal leading-8 text-[var(--text-soft)]">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-5">
          <p className="text-2xl font-medium">{formatPrice(product.price)}</p>
          <p className="kicker">{product.badge}</p>
        </div>

        <div className="mt-6 grid gap-3 border-y border-[var(--line)] py-6 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-[var(--text-soft)]">Color</span>
            <span>{product.color}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[var(--text-soft)]">Material</span>
            <span>{product.material}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[var(--text-soft)]">Fit</span>
            <span>{product.fit}</span>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <AddToCartButton productId={product.id} />
          <Link href="/cart" className="btn-light">
            View Cart
          </Link>
        </div>
      </section>

      <section className="surface-card p-8 lg:col-span-2">
        <div className="grid gap-4 md:grid-cols-3">
          <article>
            <p className="kicker">Fabric Care</p>
            <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">COLD WASH ONLY</p>
          </article>
          <article>
            <p className="kicker">Styling Tip</p>
            <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">PAIR WITH CLEAN DENIM</p>
          </article>
          <article>
            <p className="kicker">Delivery</p>
            <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">3-5 BUSINESS DAYS</p>
          </article>
        </div>
      </section>
    </div>
  );
}
