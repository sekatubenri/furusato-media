import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: { default: 'ふるさと納税ナビ | 返礼品・やり方・比較サイト', template: '%s | ふるさと納税ナビ' },
  description: 'ふるさと納税の返礼品ランキング・やり方・おすすめポータルサイトを比較。節税しながらお得な返礼品をゲット。',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-green-600 text-white shadow">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight">🎁 ふるさと納税ナビ</a>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="/category/ranking" className="hover:text-green-200">返礼品ランキング</a>
              <a href="/category/portal" className="hover:text-green-200">サイト比較</a>
              <a href="/category/howto" className="hover:text-green-200">やり方</a>
              <a href="/category/beginner" className="hover:text-green-200">入門ガイド</a>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-gray-400 text-sm mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 text-center">
            <p>© 2025 ふるさと納税ナビ | 返礼品・やり方・比較</p>
            <p className="mt-1 text-xs">※本サイトにはアフィリエイト広告が含まれます</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
