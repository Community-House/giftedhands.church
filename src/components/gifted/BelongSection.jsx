import React from "react";

const belongPeople = [
  "Creators belong here.",
  "Broken people belong here.",
  "Skeptics belong here.",
  "Dreamers belong here.",
  "Artists belong here.",
  "Imperfect people belong here.",
  "Your story belongs here.",
];

export default function BelongSection() {
  return (
    <section
      id="belong"
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #2d1548 50%, #1a0a2e 100%)" }}
    >
      {/* Decorative images */}
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
        <h2 className="font-display text-5xl text-[#c9a84c] text-center mb-4">You Belong Here</h2>
        <p className="font-heading text-xl text-white/70 text-center italic mb-14">
          This is not an exclusive club.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left: images */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/assets/87e117744_generated_image.png"
              alt="Creative worship"
              className="w-full h-56 object-cover rounded-lg"
              style={{ border: "1px solid rgba(201,168,76,0.2)" }}
            />
            <img
              src="/assets/6657722c7_generated_image.png"
              alt="Community gathering"
              className="w-full h-56 object-cover rounded-lg mt-8"
              style={{ border: "1px solid rgba(201,168,76,0.2)" }}
            />
          </div>

          {/* Right: list */}
          <div className="flex flex-col gap-3">
            {belongPeople.map((text) => (
              <div
                key={text}
                className="flex items-center gap-3 px-5 py-4 rounded-lg transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <p className="font-heading text-lg text-white/90">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}