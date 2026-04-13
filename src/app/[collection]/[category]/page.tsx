import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import {
  collectionMeta,
  getCategoryProducts,
  type CollectionKey,
} from "@/lib/catalog";

type Params = {
  collection: CollectionKey;
  category: string;
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { collection, category } = await params;
  const decodedCategory = decodeURIComponent(category);

  if (!collectionMeta[collection]) {
    notFound();
  }

  const items = getCategoryProducts(collection, decodedCategory);
  if (items.length === 0) {
    notFound();
  }

  return (
    <div className="page-shell space-y-10 py-10">
      <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="surface-card p-8 lg:p-10">
          <p className="kicker">{collectionMeta[collection].title}</p>
          <h1 className="headline mt-5 text-5xl">{decodedCategory}</h1>
        </div>
        <div className="surface-card p-8 lg:p-10">
          <p className="kicker">Collection Note</p>
          <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">
            TREND FOCUSED. STREET READY.
          </p>
        </div>
      </section>

      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-soft)]">
          {items.length} styles
        </p>
        <Link
          href={`/${collection}`}
          className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text)]"
        >
          Back to {collectionMeta[collection].title}
        </Link>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="surface-card p-8">
          <p className="kicker">Fit Guidance</p>
          <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">
            SIZE UP FOR OVERSIZED FIT.
          </p>
        </article>
        <article className="surface-card p-8">
          <p className="kicker">Style Pairing</p>
          <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)]">
            KEEP IT CLEAN. KEEP IT SHARP.
          </p>
        </article>
      </section>
    </div>
  );
}
