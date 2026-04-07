export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  content: string;
};

export const articles: Article[] = [];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
