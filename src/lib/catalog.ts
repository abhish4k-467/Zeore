export type CollectionKey = "men" | "women" | "new-arrivals";

export type Product = {
  id: string;
  name: string;
  collection: CollectionKey;
  category: string;
  slug: string;
  price: number;
  color: string;
  material: string;
  fit: string;
  description: string;
  imageTone: string;
  badge: string;
  image?: string;
};

export const collectionMeta: Record<
  CollectionKey,
  { title: string; description: string; intro: string }
> = {
  men: {
    title: "Men",
    description: "Relaxed tailoring, structured layers, and understated essentials.",
    intro: "Clean shapes designed for movement, repeat wear, and quiet confidence.",
  },
  women: {
    title: "Women",
    description: "Soft statement dressing with a calm, editorial mood.",
    intro: "Layered silhouettes and warm neutrals shaped for effortless styling.",
  },
  "new-arrivals": {
    title: "New Arrivals",
    description: "Fresh drops shaped by soft tailoring and modern street minimalism.",
    intro: "The latest Zeore release built around premium ease and everyday impact.",
  },
};

export const products: Product[] = [
  {
    id: "m-1",
    name: "Contour Overshirt",
    collection: "men",
    category: "Outerwear",
    slug: "contour-overshirt",
    price: 98,
    color: "Warm taupe",
    material: "Cotton twill",
    fit: "Relaxed fit",
    description: "A clean overshirt with soft structure for daily layering.",
    imageTone: "Taupe sand",
    badge: "Bestseller",
    image: "/contour%20overshirt.png",
  },
  {
    id: "m-2",
    name: "Transit Bomber",
    collection: "men",
    category: "Outerwear",
    slug: "transit-bomber",
    price: 124,
    color: "Stone grey",
    material: "Matte nylon",
    fit: "Boxy fit",
    description: "Lightweight volume with minimal seams and a crisp silhouette.",
    imageTone: "Soft graphite",
    badge: "New",
    image: "/Transit%20Bomber.avif",
  },
  {
    id: "m-3",
    name: "Gallery Shirt",
    collection: "men",
    category: "Shirts",
    slug: "gallery-shirt",
    price: 72,
    color: "Butter cream",
    material: "Brushed cotton",
    fit: "Easy straight fit",
    description: "An everyday shirt cut with a clean collar and fluid drape.",
    imageTone: "Cream light",
    badge: "Essential",
    image: "/Gallery%20Shirt.webp",
  },
  {
    id: "m-4",
    name: "Frame Knit Polo",
    collection: "men",
    category: "Knitwear",
    slug: "frame-knit-polo",
    price: 84,
    color: "Muted olive",
    material: "Light merino blend",
    fit: "Trim relaxed fit",
    description: "A minimal knit polo that sharpens casual looks instantly.",
    imageTone: "Olive sand",
    badge: "New",
    image: "/Frame%20knit%20polo.avif",
  },
  {
    id: "m-5",
    name: "Studio Trousers",
    collection: "men",
    category: "Trousers",
    slug: "studio-trousers",
    price: 92,
    color: "Dune grey",
    material: "Wool blend",
    fit: "Wide straight fit",
    description: "Soft-tailored trousers built for easy styling and all-day comfort.",
    imageTone: "Dune stone",
    badge: "Core",
    image: "/Studio%20Trousers.png",
  },
  {
    id: "w-1",
    name: "Aura Slip Dress",
    collection: "women",
    category: "Dresses",
    slug: "aura-slip-dress",
    price: 88,
    color: "Honey beige",
    material: "Satin blend",
    fit: "Skimming fit",
    description: "An elegant slip dress with a fluid line and understated glow.",
    imageTone: "Golden cream",
    badge: "Bestseller",
    image: "/Aura%20slip%20dress.png",
  },
  {
    id: "w-2",
    name: "Form Blazer",
    collection: "women",
    category: "Tailoring",
    slug: "form-blazer",
    price: 128,
    color: "Soft mocha",
    material: "Viscose suiting",
    fit: "Relaxed tailored fit",
    description: "A minimal blazer that balances structure with gentle movement.",
    imageTone: "Mocha sand",
    badge: "New",
    image: "/Form%20Blazer.jpg",
  },
  {
    id: "w-3",
    name: "Dune Straight Denim",
    collection: "women",
    category: "Denim",
    slug: "dune-straight-denim",
    price: 86,
    color: "Washed ivory",
    material: "Rigid denim",
    fit: "Straight fit",
    description: "Clean-lined denim designed to anchor soft neutral wardrobes.",
    imageTone: "Ivory chalk",
    badge: "Core",
    image: "/Dune%20Straight%20Denim.webp",
  },
  {
    id: "w-4",
    name: "Line Rib Tank",
    collection: "women",
    category: "Basics",
    slug: "line-rib-tank",
    price: 42,
    color: "Clay beige",
    material: "Stretch rib jersey",
    fit: "Close fit",
    description: "A premium essential tank with a refined neckline and soft hold.",
    imageTone: "Clay glow",
    badge: "Essential",
    image: "/Line%20Rib%20Tank.avif",
  },
  {
    id: "w-5",
    name: "Ease Trench Coat",
    collection: "women",
    category: "Outerwear",
    slug: "ease-trench-coat",
    price: 146,
    color: "Warm sand",
    material: "Cotton blend",
    fit: "Loose fit",
    description: "A fluid trench coat for layered mornings and cool evenings.",
    imageTone: "Sand matte",
    badge: "New",
    image: "/Ease%20Trench%20Coat.png",
  },
  {
    id: "n-1",
    name: "Lightform Knit",
    collection: "new-arrivals",
    category: "Knitwear",
    slug: "lightform-knit",
    price: 74,
    color: "Butter cream",
    material: "Airy knit",
    fit: "Relaxed fit",
    description: "A light knit layer with warm texture and easy drape.",
    imageTone: "Soft cream",
    badge: "Drop 01",
    image: "/Lighform%20Knit.png",
  },
  {
    id: "n-2",
    name: "Contour Shirt",
    collection: "new-arrivals",
    category: "Shirts",
    slug: "contour-shirt",
    price: 68,
    color: "Soft sand",
    material: "Cotton poplin",
    fit: "Relaxed fit",
    description: "Minimal shirting cut to feel easy, fresh, and elevated.",
    imageTone: "Sand light",
    badge: "Drop 01",
    image: "/Contour%20shirt.png",
  },
  {
    id: "n-3",
    name: "Transit Jacket",
    collection: "new-arrivals",
    category: "Outerwear",
    slug: "transit-jacket",
    price: 110,
    color: "Warm taupe",
    material: "Technical cotton",
    fit: "Boxy fit",
    description: "A transitional layer with a clean front and soft utility mood.",
    imageTone: "Taupe wash",
    badge: "Drop 01",
    image: "/Transit%20Jacket.jpg",
  },
  {
    id: "n-4",
    name: "Muse Wide Pants",
    collection: "new-arrivals",
    category: "Trousers",
    slug: "muse-wide-pants",
    price: 94,
    color: "Desert oat",
    material: "Tailored twill",
    fit: "Wide fit",
    description: "Fluid trousers designed for movement and understated presence.",
    imageTone: "Oat matte",
    badge: "Drop 01",
    image: "/Muse%20wide%20pants.webp",
  },
];

export const categoriesByCollection: Record<CollectionKey, string[]> = {
  men: ["Outerwear", "Shirts", "Knitwear", "Trousers"],
  women: ["Dresses", "Tailoring", "Denim", "Basics", "Outerwear"],
  "new-arrivals": ["Knitwear", "Shirts", "Outerwear", "Trousers"],
};

export function getCollectionProducts(collection: CollectionKey) {
  return products.filter((product) => product.collection === collection);
}

export function getCategoryProducts(collection: CollectionKey, category: string) {
  return products.filter(
    (product) => product.collection === collection && product.category === category,
  );
}

export function getProductBySlug(collection: CollectionKey, slug: string) {
  return products.find(
    (product) => product.collection === collection && product.slug === slug,
  );
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
