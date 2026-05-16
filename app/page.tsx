// @ts-nocheck
"use client";

import { Great_Vibes, Cormorant_Infant } from "next/font/google";
import content from "../data/content.json";

const script = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const display = Cormorant_Infant({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

// Romantic pink + elegant gold — Soft UI Evolution (gentle elevations, soft surfaces)
const BLUSH = "#F8E4DA";
const BLUSH_SOFT = "#FDF2EC";
const PINK = "#D88FA8";
const PINK_DEEP = "#9C4F6E";
const GOLD = "#C9A961";
const GOLD_DEEP = "#8B7536";
const CHARCOAL = "#2E2128";
const TEXT_SOFT = "#6B5560";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={display.className} style={{ backgroundColor: BLUSH_SOFT, color: CHARCOAL, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scriptDraw { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
        .fade-up { animation: fadeUp 1s cubic-bezier(.2,.9,.2,1) forwards; }
        .fade-up-d1 { animation: fadeUp 1s 0.25s cubic-bezier(.2,.9,.2,1) both; }
        .fade-up-d2 { animation: fadeUp 1s 0.5s cubic-bezier(.2,.9,.2,1) both; }
        .script-draw { animation: scriptDraw 1.5s cubic-bezier(.2,.9,.2,1) forwards; }
        .soft-card {
          background: linear-gradient(145deg, #ffffff, ${BLUSH_SOFT});
          box-shadow: 12px 12px 28px ${PINK}22, -6px -6px 16px #ffffff;
          transition: box-shadow 300ms, transform 300ms;
        }
        .soft-card:hover { transform: translateY(-4px); box-shadow: 16px 16px 36px ${PINK}33, -8px -8px 20px #ffffff; }
        .soft-btn {
          background: linear-gradient(135deg, ${PINK_DEEP}, ${PINK});
          box-shadow: 6px 6px 16px ${PINK}44, inset 0 1px 0 #ffffff66;
          transition: all 250ms;
        }
        .soft-btn:hover { box-shadow: 8px 8px 22px ${PINK}55; transform: translateY(-2px); }
        .gold-divider { background: linear-gradient(90deg, transparent, ${GOLD}, transparent); }
      `}</style>

      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: BLUSH_SOFT + "DD", borderBottom: `1px solid ${GOLD}22` }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className={script.className} style={{ fontSize: "1.9rem", color: PINK_DEEP, lineHeight: 1 }}>Bouvardia</span>
            <span style={{ fontSize: "0.7rem", color: GOLD, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 500 }}>venues</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#events" className="hidden md:inline text-sm" style={{ color: CHARCOAL, fontStyle: "italic" }}>Events</a>
            <a href="#dining" className="hidden md:inline text-sm" style={{ color: CHARCOAL, fontStyle: "italic" }}>Dining</a>
            <a href="#visit" className="hidden md:inline text-sm" style={{ color: CHARCOAL, fontStyle: "italic" }}>Visit</a>
            <a href={phoneTel} className="soft-btn px-6 py-2.5 text-sm font-medium text-white tracking-wider" style={{ borderRadius: "999px" }}>Inquire</a>
          </div>
        </div>
      </nav>

      {/* HERO — Event landing: dreamy soft surface */}
      <section className="relative pt-16 pb-24 md:pt-28 md:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-40" style={{ background: `radial-gradient(circle, ${PINK} 0%, transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`, filter: "blur(80px)" }} />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="fade-up text-xs font-medium tracking-[0.5em] uppercase mb-8" style={{ color: GOLD_DEEP }}>★ Burbank · Established</p>
          <div className="script-draw">
            <p className={script.className} style={{ fontSize: "clamp(4rem, 12vw, 9rem)", color: PINK_DEEP, lineHeight: 0.85, letterSpacing: "-0.01em" }}>Unforgettable</p>
          </div>
          <h1 className="fade-up-d1" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 300, color: CHARCOAL, lineHeight: 1.0, letterSpacing: "-0.02em", marginTop: "1rem" }}>
            evenings, in <span style={{ fontStyle: "italic", color: GOLD_DEEP }}>Burbank.</span>
          </h1>
          <div className="gold-divider h-px w-32 mx-auto my-10 fade-up-d1" />
          <p className="fade-up-d1 max-w-2xl mx-auto text-xl" style={{ color: TEXT_SOFT, lineHeight: 1.6, fontStyle: "italic" }}>{content.hero.subheading}</p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center fade-up-d2">
            <a href={content.hero.ctaLink} className="soft-btn px-10 py-4 text-base font-medium text-white tracking-wide" style={{ borderRadius: "999px" }}>{content.hero.ctaText}</a>
            <a href="#dining" className="px-10 py-4 text-base font-medium tracking-wide transition-all hover:bg-white" style={{ border: `1.5px solid ${GOLD}`, color: GOLD_DEEP, borderRadius: "999px", backgroundColor: `${BLUSH_SOFT}88` }}>Explore the Room</a>
          </div>
        </div>
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 mt-20 fade-up-d2">
          <div className="aspect-[3/2] bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")`, borderRadius: "32px", boxShadow: `0 30px 80px ${PINK}33`, border: `1px solid ${GOLD}33` }} />
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        <p className="text-xs font-medium tracking-[0.5em] uppercase mb-6" style={{ color: GOLD_DEEP }}>The Room</p>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: CHARCOAL, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          {content.about.heading.split(".").map((s, i) => <span key={i} style={{ display: "block", color: i === 1 ? GOLD_DEEP : CHARCOAL, fontStyle: i === 1 ? "italic" : "normal" }}>{s}.</span>)}
        </h2>
        <div className="gold-divider h-px w-24 mx-auto my-10" />
        <div className="space-y-6 text-lg" style={{ color: TEXT_SOFT, lineHeight: 1.7, fontStyle: "italic" }}>
          {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* SERVICES — soft cards, event-package style */}
      <section id="events" className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.5em] uppercase mb-6" style={{ color: GOLD_DEEP }}>Our Services</p>
          <p className={script.className} style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: PINK_DEEP, lineHeight: 0.9 }}>Tailored experiences</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 300, color: CHARCOAL, lineHeight: 1.1, marginTop: "0.5rem", fontStyle: "italic" }}>for every occasion.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {content.services.map((s, i) => (
            <div key={i} className="soft-card p-9" style={{ borderRadius: "24px" }}>
              <div className="flex items-baseline justify-between mb-6">
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: GOLD_DEEP, letterSpacing: "0.3em", textTransform: "uppercase" }}>0{i + 1}</span>
                {s.price && <span style={{ fontSize: "0.9rem", color: PINK_DEEP, fontStyle: "italic", fontWeight: 500 }}>{s.price}</span>}
              </div>
              <h3 style={{ fontWeight: 500, fontSize: "1.6rem", color: CHARCOAL, letterSpacing: "-0.01em", lineHeight: 1.1 }}>{s.title}</h3>
              <div className="gold-divider h-px w-12 my-5" />
              <p className="text-base leading-relaxed" style={{ color: TEXT_SOFT, fontStyle: "italic" }}>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS — testimonials with quote ornaments */}
      <section className="py-24 md:py-32" style={{ background: `linear-gradient(180deg, ${BLUSH_SOFT}, ${BLUSH}, ${BLUSH_SOFT})` }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs font-medium tracking-[0.5em] uppercase mb-6" style={{ color: GOLD_DEEP }}>Whispered Reviews</p>
          <p className={script.className} style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: PINK_DEEP, lineHeight: 0.9 }}>What they say</p>
          <div className="gold-divider h-px w-32 mx-auto my-12" />
          <div className="space-y-16">
            {content.reviews.map((r, i) => (
              <div key={i} className="soft-card p-10 md:p-14" style={{ borderRadius: "32px" }}>
                <p className={script.className} style={{ fontSize: "4rem", color: GOLD, lineHeight: 0.5, marginBottom: "1rem" }}>"</p>
                <p style={{ fontSize: "clamp(1.25rem, 2.3vw, 1.7rem)", color: CHARCOAL, lineHeight: 1.55, fontWeight: 400, fontStyle: "italic" }}>{r.text}</p>
                <div className="gold-divider h-px w-16 mx-auto my-7" />
                <p className="text-sm uppercase tracking-[0.4em]" style={{ color: PINK_DEEP, fontWeight: 500 }}>— {r.name}</p>
                <div className="mt-4 flex gap-1 justify-center" style={{ color: GOLD }}>{Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="soft-card p-8 md:p-14 grid md:grid-cols-12 gap-10" style={{ borderRadius: "32px" }}>
          <div className="md:col-span-5">
            <p className="text-xs font-medium tracking-[0.5em] uppercase mb-6" style={{ color: GOLD_DEEP }}>Visit Us</p>
            <p className={script.className} style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: PINK_DEEP, lineHeight: 0.9 }}>137 S Glenoaks</p>
            <p className="mt-3 text-lg" style={{ color: TEXT_SOFT, fontStyle: "italic" }}>{content.contact.address}</p>
            <a href={phoneTel} className="block mt-6 transition-opacity hover:opacity-70" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", color: CHARCOAL, fontWeight: 500, letterSpacing: "-0.02em" }}>{content.contact.phone}</a>
            <div className="gold-divider h-px w-full my-8" />
            <div className="space-y-1">
              {Object.entries(content.contact.hours).map(([day, time]) => (
                <div key={day} className="flex justify-between py-2.5 text-sm" style={{ borderBottom: `1px dashed ${GOLD}55` }}>
                  <span className="uppercase tracking-widest text-xs font-medium" style={{ color: PINK_DEEP }}>{day}</span>
                  <span style={{ color: time === "Closed" ? `${TEXT_SOFT}99` : TEXT_SOFT, fontStyle: "italic" }}>{String(time)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 overflow-hidden" style={{ borderRadius: "24px", minHeight: "500px", border: `1px solid ${GOLD}33` }}>
            <iframe title="Bouvardia" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "500px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-36 text-center">
        <p className={script.className} style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", color: PINK_DEEP, lineHeight: 0.9 }}>Reserve the night.</p>
        <div className="gold-divider h-px w-32 mx-auto my-10" />
        <a href={phoneTel} className="soft-btn inline-block px-14 py-5 text-base font-medium text-white tracking-wide" style={{ borderRadius: "999px" }}>{content.contact.phone}</a>
      </section>

      <footer style={{ borderTop: `1px solid ${GOLD}33`, backgroundColor: BLUSH_SOFT }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm" style={{ color: TEXT_SOFT }}>
          <p className={script.className} style={{ fontSize: "1.5rem", color: PINK_DEEP, lineHeight: 1 }}>Bouvardia Venues</p>
          <p style={{ fontStyle: "italic" }}>{content.contact.address}</p>
          <p className="text-xs uppercase tracking-widest">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
