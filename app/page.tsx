// @ts-nocheck
"use client";

import { Playfair_Display, Outfit } from "next/font/google";
import content from "../data/content.json";

const display = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const body = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const ACCENT = "#7C8F6C";
const ACCENT_DEEP = "#3D5142";
const GOLD = "#C8A858";
const BG = "#F8F5EE";
const BG_DARK = "#1F2823";
const TEXT = "#1F2823";
const TEXT_MUTED = "#5C6B5E";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-up { animation: fadeUp 0.95s ease-out forwards; }
        .fade-up-d1 { animation: fadeUp 0.95s 0.2s ease-out both; }
        .fade-up-d2 { animation: fadeUp 0.95s 0.4s ease-out both; }
        .fade-in { animation: fadeIn 1.2s ease-out forwards; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(248,245,238,0.92)", borderBottom: `1px solid ${ACCENT}22` }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className={display.className} style={{ fontSize: "1.4rem", fontWeight: 500, color: ACCENT_DEEP, fontStyle: "italic" }}>Bouvardia</span>
          <div className="flex items-center gap-7">
            <a href="#dining" className="hidden md:inline text-sm hover:opacity-70">Dining</a>
            <a href="#events" className="hidden md:inline text-sm hover:opacity-70">Events</a>
            <a href="#visit" className="hidden md:inline text-sm hover:opacity-70">Visit</a>
            <a href={phoneTel} className="px-6 py-2.5 rounded-full text-sm font-medium text-white transition-transform hover:scale-105" style={{ backgroundColor: ACCENT_DEEP }}>Reservations</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(31,40,35,0.85) 0%, rgba(31,40,35,0.4) 60%, rgba(31,40,35,0.7) 100%)" }} />
        <div className="relative max-w-6xl mx-auto px-6 z-10 text-center fade-up">
          <p className="uppercase tracking-[0.45em] text-xs font-medium mb-8" style={{ color: GOLD }}>An establishment in Burbank</p>
          <h1 className={display.className} style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white", fontWeight: 400, lineHeight: 1.0, fontStyle: "italic", letterSpacing: "-0.02em" }}>{content.hero.heading}</h1>
          <div className="my-10 mx-auto w-24 h-px" style={{ backgroundColor: GOLD }} />
          <p className="text-lg md:text-xl max-w-2xl mx-auto fade-up-d1" style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>{content.hero.subheading}</p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center fade-up-d2">
            <a href={content.hero.ctaLink} className="px-9 py-4 rounded-full text-sm font-medium uppercase tracking-widest transition-transform hover:scale-105" style={{ backgroundColor: GOLD, color: BG_DARK }}>{content.hero.ctaText}</a>
            <a href="#dining" className="px-9 py-4 rounded-full text-sm font-medium uppercase tracking-widest border-2 transition-all hover:bg-white/10" style={{ borderColor: "white", color: "white" }}>The Restaurant</a>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-28 md:py-36 text-center">
        <p className="uppercase tracking-[0.4em] text-xs font-medium mb-6" style={{ color: GOLD }}>About</p>
        <h2 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: ACCENT_DEEP, lineHeight: 1.1, fontStyle: "italic" }}>{content.about.heading}</h2>
        <div className="my-10 mx-auto w-16 h-px" style={{ backgroundColor: ACCENT }} />
        <div className="space-y-6 text-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
          {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section id="dining" className="py-28 md:py-36" style={{ backgroundColor: ACCENT_DEEP, color: BG }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-xs font-medium mb-5" style={{ color: GOLD }}>Service</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, color: BG, fontStyle: "italic" }}>What we offer.</h2>
            <div className="my-8 mx-auto w-16 h-px" style={{ backgroundColor: GOLD }} />
          </div>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12 max-w-5xl mx-auto">
            {content.services.map((s, i) => (
              <div key={i} className="border-b pb-10" style={{ borderColor: `${GOLD}55` }}>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className={display.className} style={{ fontWeight: 500, fontSize: "1.65rem", color: BG, fontStyle: "italic" }}>{s.title}</h3>
                  {s.price && <span className="text-sm uppercase tracking-wider font-medium" style={{ color: GOLD }}>{s.price}</span>}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(248,245,238,0.75)" }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="max-w-6xl mx-auto px-6 py-28 md:py-36">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-xs font-medium mb-5" style={{ color: GOLD }}>Testimonials</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, color: ACCENT_DEEP, fontStyle: "italic" }}>From our guests.</h2>
          <div className="my-8 mx-auto w-16 h-px" style={{ backgroundColor: ACCENT }} />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {content.reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white" style={{ border: `1px solid ${ACCENT}22` }}>
              <div className="flex gap-1 mb-4" style={{ color: GOLD }}>
                {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className={display.className} style={{ fontSize: "1.05rem", lineHeight: 1.6, color: TEXT, fontStyle: "italic", fontWeight: 400 }}>"{r.text}"</p>
              <p className="mt-6 text-xs uppercase tracking-widest" style={{ color: ACCENT_DEEP }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="py-28 md:py-36" style={{ backgroundColor: "#EBE5D8", borderTop: `1px solid ${ACCENT}22` }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs font-medium mb-5" style={{ color: GOLD }}>Visit</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, color: ACCENT_DEEP, lineHeight: 1.05, fontStyle: "italic" }}>137 S Glenoaks.</h2>
            <div className="my-8 w-16 h-px" style={{ backgroundColor: ACCENT }} />
            <p className="text-lg" style={{ color: TEXT_MUTED }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className + " block mt-2 text-3xl font-medium transition-opacity hover:opacity-80"} style={{ color: ACCENT_DEEP, fontStyle: "italic" }}>{content.contact.phone}</a>
            <table className="mt-10 w-full text-sm">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} style={{ borderBottom: `1px solid ${ACCENT}33` }}>
                    <td className="py-3.5 font-medium uppercase tracking-wider text-xs">{day}</td>
                    <td className="py-3.5 text-right" style={{ color: TEXT_MUTED }}>{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ minHeight: "500px", border: `1px solid ${ACCENT}33` }}>
            <iframe title="Bouvardia Venues Location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "500px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-28 md:py-36 text-center">
        <h3 className={display.className} style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", fontWeight: 400, color: ACCENT_DEEP, lineHeight: 1.05, fontStyle: "italic" }}>Plan something worth remembering.</h3>
        <div className="my-8 mx-auto w-16 h-px" style={{ backgroundColor: GOLD }} />
        <a href={phoneTel} className="inline-block mt-4 px-12 py-5 rounded-full text-sm font-medium uppercase tracking-widest transition-transform hover:scale-105" style={{ backgroundColor: ACCENT_DEEP, color: BG }}>{content.contact.phone}</a>
      </section>

      <footer style={{ borderTop: `1px solid ${ACCENT}22`, backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm" style={{ color: TEXT_MUTED }}>
          <div>
            <p className={display.className} style={{ fontSize: "1.4rem", fontWeight: 500, color: ACCENT_DEEP, fontStyle: "italic" }}>Bouvardia Venues</p>
            <p className="mt-3">{content.contact.address}</p>
            <p className="mt-1"><a href={phoneTel} className="hover:text-black">{content.contact.phone}</a></p>
          </div>
          <div className="text-xs uppercase tracking-widest">© {new Date().getFullYear()} Bouvardia</div>
        </div>
      </footer>
    </main>
  );
}