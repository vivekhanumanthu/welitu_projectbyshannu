export type Service = {
  slug: string;
  title: string;
  description: string;
  startingPrice: string;
  image: string;
};

export type WeddingPackage = {
  name: string;
  price: string;
  highlights: string[];
};

export type GalleryItem = {
  id: number;
  category: string;
  title: string;
  image: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  content: string;
};
