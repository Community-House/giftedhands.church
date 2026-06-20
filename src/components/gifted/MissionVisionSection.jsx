import React from "react";

export default function MissionVisionSection() {
  return (
    <section
      id="programs"
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0618 0%, #1a0a2e 100%)" }}
    >
      {/* Paint splatter decorations */}
      <img
        src="/assets/030924e37_Untitleddesign3.png"
        alt="" aria-hidden="true"
        className="absolute -top-10 -right-10 w-64 h-64 pointer-events-none opacity-60"
        style={{ filter: "invert(1) sepia(1) saturate(400%) hue-rotate(350deg) brightness(1.2)", mixBlendMode: "screen" }}
      />
      <img
        src="/assets/030924e37_Untitleddesign3.png"
        alt="" aria-hidden="true"
        className="absolute -bottom-10 -left-10 w-56 h-56 pointer-events-none opacity-40"
        style={{ filter: "invert(1) sepia(1) saturate(400%) hue-rotate(200deg) brightness(0.8)", mixBlendMode: "screen", transform: "rotate(180deg)" }}
      />
      {/* Radial glow blobs for depth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(100,40,180,0.12) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Mission */}
          <div className="flex flex-col items-center text-center gap-4">
            <p className="font-display text-sm tracking-[0.25em] text-[#c9a84c] uppercase">Mission</p>
            <div className="w-10 h-px bg-[#c9a84c] opacity-50" />
            <p className="font-heading text-2xl sm:text-3xl text-white/90 italic leading-relaxed">
              Empowering people to use their God-given gifts to glorify God and bless the world.
            </p>
          </div>

          {/* Divider (vertical on md+) */}
          <div className="hidden md:block absolute left-1/2 top-20 bottom-20 w-px bg-[#c9a84c]/20" />

          {/* Vision */}
          <div className="flex flex-col items-center text-center gap-4">
            <p className="font-display text-sm tracking-[0.25em] text-[#c9a84c] uppercase">Vision</p>
            <div className="w-10 h-px bg-[#c9a84c] opacity-50" />
            <p className="font-heading text-2xl sm:text-3xl text-white/90 italic leading-relaxed">
              We envision a growing movement of Gifted Hands communities gathering in neighborhoods, towns, and cities, where people of all ages and backgrounds use their God-given gifts in interwoven worship experiences that glorify God, build authentic community, and inspire others to discover their purpose.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}