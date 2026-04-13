import Image from "next/image";
import Link from "next/link";
import { HomeAuthCta } from "@/components/home-auth-cta";
import { ProductCard } from "@/components/product-card";
import { getCollectionProducts, products } from "@/lib/catalog";

const quickLinks = [
  { title: "Women", subtitle: "Elevated everyday looks", href: "/women" },
  { title: "Men", subtitle: "Smart casual essentials", href: "/men" },
  { title: "New Arrivals", subtitle: "Latest weekly drop", href: "/new-arrivals" },
];

export default function Home() {
  const trendyProducts = products.filter((product) =>
    ["m-1", "w-1", "m-5", "w-5"].includes(product.id),
  );
  const newCollectionProducts = getCollectionProducts("new-arrivals").slice(0, 4);

  return (
    <div className="pb-14">
      <section className="page-shell grid gap-8 py-10 lg:grid-cols-[1.06fr_0.94fr] lg:py-14">
        <div className="surface-card p-8 lg:p-10">
          <p className="kicker">Zeore Spring 2026</p>
          <h1 className="headline mt-5 text-5xl leading-[1.04] md:text-6xl">
            UNFILTERED
          </h1>
          <h1 className="headline mt-5 text-5xl leading-[1.04] md:text-6xl">
            CONFIDENT
          </h1>
          <h1 className="headline mt-5 text-5xl leading-[1.04] md:text-6xl">
            ZEORE
          </h1>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-[var(--text-soft)]">
            TRENDY. CLEAN. EVERYDAY.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/new-arrivals" className="btn-dark">
              Shop New Drop
            </Link>
            <HomeAuthCta />
          </div>
        </div>
        <div className="surface-card grid-backdrop p-4">
          <div className="relative min-h-[470px] overflow-hidden rounded-2xl bg-[var(--surface-soft)]">
            <Image
              src="/image.png"
              alt="Zeore hero product"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-5 pb-8 md:grid-cols-3">
        {quickLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="surface-card p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.05)]"
          >
            <p className="kicker">Shop</p>
            <h2 className="headline mt-4 text-3xl">{item.title}</h2>
            <p className="mt-3 text-sm text-[var(--text-soft)]">{item.subtitle}</p>
          </Link>
        ))}
      </section>

      <section className="page-shell py-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="kicker">Trendy Right Now</p>
            <h2 className="headline mt-2 text-4xl">Most wanted edits</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trendyProducts.map((product) => (
            <ProductCard key={product.id} product={product} hoverOverlay />
          ))}
        </div>
      </section>

      <section className="page-shell py-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="kicker">New Collection</p>
            <h2 className="headline mt-2 text-4xl">Fresh arrivals this week</h2>
          </div>
          <Link href="/new-arrivals" className="text-xs font-bold uppercase tracking-[0.2em]">
            View All
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {newCollectionProducts.map((product) => (
            <ProductCard key={product.id} product={product} hoverOverlay />
          ))}
        </div>
      </section>

      <section className="page-shell py-10">
        <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[linear-gradient(120deg,#ffffff_0%,#f7f6f2_45%,#f3e4e7_100%)] p-8 md:p-12">
          <p className="kicker">Trend Forecast</p>
          <h3 className="headline mt-4 text-5xl md:text-6xl">Street Minimal is in.</h3>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">
            NEW FITS | CLEAN PALETTE | DAILY DROP
          </p>
        </div>
      </section>
    </div>
  );
}
