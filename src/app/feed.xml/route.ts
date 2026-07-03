import { getAllArticles } from '@/lib/articles'
const BASE_URL = 'https://furusato-media.vercel.app'
export async function GET() {
  const articles = getAllArticles().slice(0, 20)
  const items = articles.map(a => `<item><title><![CDATA[]]></title><link>/article/</link><guid>/article/</guid><pubDate></pubDate><description><![CDATA[]]></description></item>`).join('')
  const rss = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>ふるさと納税ナビ</title><link></link><description>返礼品・やり方・比較</description><language>ja</language></channel></rss>`  
  return new Response(rss, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}