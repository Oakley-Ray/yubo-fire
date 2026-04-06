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

const services = [
  {
    icon: ClipboardCheckIcon,
    title: "消防安全檢修",
    description:
      "依法定期進行消防安全設備檢修申報，確保各類場所符合消防法規，保障人員安全。",
  },
  {
    icon: WrenchIcon,
    title: "消防改善工程",
    description:
      "針對消防缺失項目進行專業改善工程，從規劃設計到施工驗收，一條龍服務。",
  },
  {
    icon: ShieldIcon,
    title: "消防設備安裝",
    description:
      "各類消防安全設備安裝工程，包含火警自動警報、滅火設備、避難逃生設備等。",
  },
  {
    icon: PackageIcon,
    title: "消防器材買賣",
    description:
      "提供滅火器、偵煙探測器、緩降機、消防栓設備等各式消防器材銷售與諮詢。",
  },
];

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
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-amber/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy/5 group-hover:bg-amber/10 rounded-lg flex items-center justify-center mb-5 transition-colors">
                <service.icon className="w-6 h-6 text-navy group-hover:text-amber transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
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
      <About />
      <Contact />
      <Footer />
    </>
  );
}
