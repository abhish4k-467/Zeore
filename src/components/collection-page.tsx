import Image from "next/image";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import {
  categoriesByCollection,
  collectionMeta,
  getCollectionProducts,
  type CollectionKey,
} from "@/lib/catalog";

export function CollectionPage({ collection }: { collection: CollectionKey }) {
  const meta = collectionMeta[collection];
  const collectionProducts = getCollectionProducts(collection);
  const heroImage = collectionProducts.find((item) => item.image)?.image;
  const categoryCounts = categoriesByCollection[collection].map((category) => ({
    category,
    count: collectionProducts.filter((product) => product.category === category).length,
  }));
  const featuredProducts = collectionProducts.slice(0, 8);

  return (
    <div className="page-shell space-y-10 py-10">
      <section className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="surface-card p-8 lg:p-10">
          <p className="kicker">{meta.title}</p>
          <h1 className="headline mt-4 text-6xl">{meta.title} Edit</h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">
            TREND FIRST | CLEAN SHAPE
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[var(--surface-soft)] p-4">
              <p className="kicker">Mood</p>
              <p className="mt-2 text-lg">Urban Soft</p>
            </div>
            <div className="rounded-xl bg-[var(--surface-soft)] p-4">
              <p className="kicker">Drop</p>
              <p className="mt-2 text-lg">Season 26</p>
            </div>
          </div>
        </div>
        <div className="surface-card p-4">
          <div className="relative min-h-[340px] overflow-hidden rounded-2xl bg-[var(--surface-soft)]">
            {heroImage ? (
              <Image src={heroImage} alt={`${meta.title} featured`} fill className="object-cover" />
            ) : null}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker">Categories</p>
            <h2 className="headline mt-2 text-4xl">Explore by type</h2>
          </div>
          <p className="hidden max-w-sm text-right text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--text-soft)] lg:block">
            QUICK NAVIGATION
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categoryCounts.map((entry) => (
            <CategoryCard
              key={entry.category}
              collection={collection}
              category={entry.category}
              count={entry.count}
            />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <p className="kicker">Products</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
