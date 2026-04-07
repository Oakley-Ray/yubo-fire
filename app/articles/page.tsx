import Link from "next/link";
import { ShieldIcon, CalendarIcon, FileTextIcon } from "../icons";
import { MobileNav } from "../mobile-nav";
import { articles } from "./data";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <ShieldIcon className="w-7 h-7 text-amber" />
          <span className="text-white font-bold text-lg tracking-wide">
            昱保消防
          </span>
        </Link>
        <div className="hidden sm:flex items-center gap-8 text-sm">
          <Link
            href="/#services"
            className="text-slate-200 hover:text-amber transition-colors"
          >
            服務項目
          </Link>
          <Link
            href="/articles"
            className="text-amber font-medium"
          >
            消防知識
          </Link>
          <Link
            href="/#about"
            className="text-slate-200 hover:text-amber transition-colors"
          >
            關於我們
          </Link>
          <Link
            href="/#contact"
            className="text-slate-200 hover:text-amber transition-colors"
          >
            聯絡資訊
          </Link>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block bg-amber/10 text-amber text-xs font-semibold px-3 py-1 rounded-full">
      {category}
    </span>
  );
}

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <section className="bg-navy pt-16">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-amber" />
            <span className="text-amber text-sm font-medium tracking-widest uppercase">
              Articles
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            消防知識專欄
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl leading-relaxed">
            分享消防法規、設備維護及安全知識，幫助您了解消防安全的重要細節。
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {articles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-amber/30 transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <CategoryBadge category={article.category} />
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <CalendarIcon className="w-3.5 h-3.5" />
                        {article.date}
                      </div>
                    </div>
                    <h2 className="font-bold text-slate-800 text-lg leading-snug mb-3 group-hover:text-navy transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                    <div className="mt-4 text-amber text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                      閱讀更多 &rarr;
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileTextIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 text-lg">文章準備中，敬請期待</p>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-navy-dark py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ShieldIcon className="w-5 h-5 text-amber" />
            <span className="text-white font-semibold">昱保消防工程行</span>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} 昱保消防工程行. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
