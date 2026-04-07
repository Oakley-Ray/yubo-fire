import {
  ShieldIcon,
  WrenchIcon,
  PackageIcon,
  ClipboardCheckIcon,
  PhoneIcon,
  MapPinIcon,
  BuildingIcon,
} from "./icons";
import { HeroIllustration } from "./hero-illustration";
import { ServiceCards } from "./service-cards";
import { ProcessFlow } from "./process-flow";
import { MobileNav } from "./mobile-nav";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <ShieldIcon className="w-7 h-7 text-amber" />
          <span className="text-white font-bold text-lg tracking-wide">
            昱保消防
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm">
          <a
            href="#services"
            className="text-slate-200 hover:text-amber transition-colors"
          >
            服務項目
          </a>
          <a
            href="#about"
            className="text-slate-200 hover:text-amber transition-colors"
          >
            關於我們
          </a>
          <a
            href="#contact"
            className="text-slate-200 hover:text-amber transition-colors"
          >
            聯絡資訊
          </a>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative bg-navy pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,145,46,0.08)_0%,_transparent_60%)]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_rgba(200,145,46,0.05)_0%,_transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32">
        <div className="grid sm:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-amber" />
              <span className="text-amber text-sm font-medium tracking-widest uppercase">
                Since 2001
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              專業消防安全
              <br />
              <span className="text-amber">守護每一刻</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
              昱保消防工程行深耕北北基桃竹超過二十年，提供消防安全設備檢修、改善工程及器材買賣，以專業與負責守護您的安全。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0224345129"
                className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-light text-navy-dark font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                立即來電諮詢
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/5 font-medium px-8 py-3.5 rounded-lg transition-colors"
              >
                了解服務項目
              </a>
            </div>
          </div>
          <div className="hidden sm:flex justify-center">
            <HeroIllustration className="w-full max-w-sm opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber text-sm font-semibold tracking-widest uppercase">
            Services
          </span>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">服務項目</h2>
          <div className="w-12 h-0.5 bg-amber mx-auto mt-4" />
        </div>
        <ServiceCards />
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-white py-20 sm:py-24 overflow-visible">
      <div className="max-w-6xl mx-auto px-6 overflow-visible">
        <div className="text-center mb-16">
          <span className="text-amber text-sm font-semibold tracking-widest uppercase">
            Process
          </span>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">服務流程</h2>
          <div className="w-12 h-0.5 bg-amber mx-auto mt-4" />
        </div>
        <ProcessFlow />
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "多久需要做一次消防安檢？",
    a: "依消防法規定，甲類場所（如百貨、醫院、旅館）每半年一次，乙類場所（如辦公室、工廠、住宅大樓）每年一次。",
  },
  {
    q: "消防安檢不合格會怎樣？",
    a: "主管機關會限期改善，逾期未改善可處罰鍰，嚴重者得停止使用或營業。我們可協助快速改善缺失項目。",
  },
  {
    q: "滅火器多久要更換？",
    a: "一般乾粉滅火器有效期限約10年，但建議每3-5年進行藥劑更換或充填檢查，確保緊急時能正常使用。",
  },
  {
    q: "報價需要費用嗎？",
    a: "來電諮詢與報價完全免費，我們會依據現場狀況提供透明合理的費用說明。",
  },
  {
    q: "服務範圍包含哪些地區？",
    a: "我們服務範圍涵蓋基隆、台北、新北以及桃園地區，歡迎來電確認您的地點。",
  },
  {
    q: "哪些場所需要消防安檢？",
    a: "包含商辦大樓、住宅社區、餐廳、工廠、補習班、幼兒園、旅館、KTV等各類公共場所及營業場所。",
  },
];

function FAQ() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber text-sm font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">常見問題</h2>
          <div className="w-12 h-0.5 bg-amber mx-auto mt-4" />
        </div>
        <div className="max-w-3xl mx-auto grid gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <h3 className="font-bold text-slate-800 mb-2">{faq.q}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber text-sm font-semibold tracking-widest uppercase">
              About Us
            </span>
            <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-6">
              關於昱保消防
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                昱保消防工程行自 2001
                年成立以來，專注於消防安全設備的檢修、安裝與改善工程，服務範圍涵蓋基隆、台北、新北以及桃園地區。
              </p>
              <p>
                我們深知消防安全的重要性，以專業技術、負責態度為每一位客戶提供最完善的消防安全解決方案，從法規諮詢、現場勘查到施工完成，全程把關。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "20+", label: "年專業經驗" },
              { number: "6", label: "項專業營業登記" },
              { number: "北北基桃", label: "服務範圍" },
              { number: "100%", label: "合格檢修率" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-50 rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-bold text-navy">{stat.number}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          歡迎來電詢問・報價
        </h2>
        <p className="text-slate-400 mx-auto mb-8 leading-relaxed">
          不論是消防安檢、設備改善或器材採購，歡迎隨時與我們聯繫詢問與報價。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0224345129"
            className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-light text-navy-dark font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            02-2434-5129
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/5 font-medium px-8 py-3.5 rounded-lg transition-colors"
          >
            查看聯絡資訊
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">聯絡資訊</h2>
          <div className="w-12 h-0.5 bg-amber mx-auto mt-4" />
        </div>
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
            <div className="flex items-start gap-4 p-6">
              <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                <BuildingIcon className="w-5 h-5 text-navy" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">昱保消防工程行</div>
                <div className="text-sm text-slate-500 mt-1">
                  統一編號：18307024
                </div>
                <div className="text-sm text-slate-500">負責人：王志雄</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6">
              <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                <PhoneIcon className="w-5 h-5 text-navy" />
              </div>
              <div>
                <div className="font-medium text-slate-700">聯絡電話</div>
                <a
                  href="tel:0224345129"
                  className="text-amber hover:text-amber-light font-semibold text-lg transition-colors"
                >
                  02-2434-5129
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6">
              <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                <MapPinIcon className="w-5 h-5 text-navy" />
              </div>
              <div>
                <div className="font-medium text-slate-700">公司地址</div>
                <div className="text-slate-600">
                  基隆市安樂區樂利三街8巷37號17樓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-dark py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <ShieldIcon className="w-5 h-5 text-amber" />
          <span className="text-white font-semibold">昱保消防工程行</span>
        </div>
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} 昱保消防工程行. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
