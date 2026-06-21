import React from "react";

const heroImages = [
  { src: "/assets/0c4804b94_generated_image.png", alt: "Art" },
  { src: "/assets/938913a60_generated_image.png", alt: "Worship" },
  { src: "/assets/e9603ab0a_generated_image.png", alt: "Dance" },
  { src: "/assets/b7d0e2040_generated_image.png", alt: "Reflection" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0618]">
      {/* Background image panels */}
      <div className="absolute inset-0 flex">
        {heroImages.map((img, i) => (
          <div key={img.alt} className="relative flex-1 overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover object-center scale-110"
            />
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(transparent 20%, rgba(13,6,24,0.55) 60%, rgba(13,6,24,0.92) 100%)" }}
            />
            {/* Blend edges */}
            {i !== 0 && <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0d0618] to-transparent" />}
            {i !== heroImages.length - 1 && <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0d0618] to-transparent" />}
          </div>
        ))}
      </div>

      {/* Top & bottom gradients */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0d0618] to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0d0618] to-transparent z-10" />

      {/* Center content */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <img
          src="/assets/226dd3561_GiftedHandsWordsnobackground.png"
          alt="Gifted Hands"
          className="h-80 sm:h-[32rem] mx-auto object-contain mb-2 mt-16"
          style={{ filter: "drop-shadow(0 2px 20px rgba(201,168,76,0.4))" }}
        />
        <p className="font-heading text-4xl sm:text-6xl text-white/90 tracking-wide mb-10 drop-shadow-lg">
          Masterpieces in Progress
        </p>
        <a
          target="_blank"
          href="https://forms.gle/5fZA7cy4Aj5SDEEA9"
          className="inline-block bg-[#2d1548] text-white font-body text-sm tracking-[0.15em] px-8 py-3 hover:bg-[#3d1f60] transition-colors border border-[#c9a84c]/40"
        >
          JOIN THE TEAM
        </a>
      </div>
    </section>
  );
}
