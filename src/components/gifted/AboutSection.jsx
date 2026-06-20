import React from "react";

const values = [
  { title: "Creativity", desc: "Art is worship." },
  { title: "Harmony", desc: "Everyone matters." },
  { title: "Masterpiece", desc: "God has a plan for us." },
  { title: "Movement", desc: "The community is our canvas." },
];


export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#2d1548] relative overflow-hidden">
      {/* Decorative corner images */}
      <img
        src="/assets/030924e37_Untitleddesign3.png"
        alt=""
        aria-hidden="true"
        className="absolute -top-8 -left-8 w-72 h-72 pointer-events-none"
        style={{ filter: "invert(1) sepia(1) saturate(400%) hue-rotate(350deg) brightness(1.2)", mixBlendMode: "screen" }}
      />
      <img
        src="/assets/030924e37_Untitleddesign3.png"
        alt=""
        aria-hidden="true"
        className="absolute -bottom-8 -right-8 w-80 h-80 pointer-events-none"
        style={{ filter: "invert(1) sepia(1) saturate(400%) hue-rotate(350deg) brightness(1.2)", mixBlendMode: "screen", transform: "rotate(180deg)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-5xl text-white/90 italic leading-relaxed mb-3">
            Gifted Hands is not ordinary church.
          </h2>
          <p className="font-body text-lg text-white/60 tracking-wide">
            It is a creative worship movement where we value:
          </p>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
          {values.map(({ title, desc }) => (
            <div
              key={title}
              className="relative px-6 py-8 text-center flex flex-col items-center justify-center gap-2"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "4px 20px",
                border: "1px solid rgba(201,168,76,0.25)",
                minHeight: 110,
              }}
            >
              <p className="font-heading text-2xl text-[#c9a84c] font-semibold">{title}</p>
              <p className="font-body text-sm text-white/75 leading-snug">{desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}