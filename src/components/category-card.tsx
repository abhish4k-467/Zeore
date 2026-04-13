import Link from "next/link";

export function CategoryCard({
  collection,
  category,
  count,
}: {
  collection: string;
  category: string;
  count: number;
}) {
  return (
    <Link
      href={`/${collection}/${encodeURIComponent(category)}`}
      className="surface-card p-6 transition hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(0,0,0,0.05)]"
    >
      <p className="kicker">
        {count} pieces
      </p>
      <h2 className="headline mt-6 text-3xl">{category}</h2>
      <p className="mt-3 text-sm text-[var(--text-soft)]">Shop this category</p>
    </Link>
  );
}
