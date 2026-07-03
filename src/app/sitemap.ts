import { getAllArticles } from '@/lib/articles'
import type { MetadataRoute } from 'next'
const BASE_URL = 'https://furusato-media.vercel.app'
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: "https://furusato-media.vercel.app/category/ranking", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://furusato-media.vercel.app/category/portal", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://furusato-media.vercel.app/category/howto", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: "https://furusato-media.vercel.app/category/beginner", lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    ...articles.map(a => ({ url: `/article/`, lastModified: new Date(a.date), changeFrequency: 'weekly' as const, priority: 0.8 })),
  ]
}