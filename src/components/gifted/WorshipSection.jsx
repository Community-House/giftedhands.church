import React from "react";

const worshipForms = [
  {
    title: "Live Painting",
    desc: "Watch worship unfold on canvas in real time.",
    img: "/assets/6d26e0edc_generated_image.png",
  },
  {
    title: "Spoken Word",
    desc: "Experience truth through rhythm and story.",
    img: "/assets/71988be9c_generated_image.png",
  },
  {
    title: "Drama",
    desc: "Encounter emotion, testimony, and transformation.",
    img: "/assets/e42a6385c_generated_image.png",
  },
  {
    title: "Prayer Stations",
    desc: "Pause, breathe, and meet God in a sacred space.",
    img: "/assets/be5e01091_generated_image.png",
  },
  {
    title: "Dance",
    desc: "Let your body become an act of praise.",
    img: "/assets/696aaca12_generated_2c298312.png",
  },
  {
    title: "Poetry",
    desc: "Words woven together to move hearts and minds.",
    img: "/assets/f6d309c58_generated_image.png",
  },
  {
    title: "Object Lessons",
    desc: "Everyday things revealing eternal truths.",
    img: "/assets/6420bdb6b_generated_image.png",
  },
  {
    title: "Storytelling",
    desc: "Your story matters — and it can change someone else's.",
    img: "/assets/95c95243c_generated_image.png",
  },
  {
    title: "Music",
    desc: "Sound that stirs the soul and shifts the atmosphere.",
    img: "/assets/1b8ee76b0_generated_image.png",
  },
  {
    title: "Visual Art",
    desc: "See the sacred through color, form, and imagination.",
    img: "/assets/b1b8e20e6_generated_image.png",
  },
  {
    title: "Immersive Worship",
    desc: "Step inside an experience designed to encounter God.",
    img: "/assets/bcfbed6b2_generated_image.png",
  },
  {
    title: "Rap",
    desc: "Truth delivered with rhythm, fire, and authenticity.",
    img: "/assets/93c024c97_generated_image.png",
  },
];

export default function WorshipSection() {
  return (
    <section
      id="gallery"
      className="py-20 relative overflow-hidden"
    >
      {/* Gold brushstroke background */}
      <div className="absolute inset-0">
        <img
          src="/assets/bc84fc517_generated_image.png"
          alt="" aria-hidden="true"
          className="w-full h-full object-cover pointer-events-none"
        />
        {/* Dark overlay so foreground text/images remain readable */}
        <div className="absolute inset-0" style={{ background: "rgba(13,6,24,0.65)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="font-display text-5xl text-[#c9a84c] text-center mb-4">What Worship Looks Like</h2>
        <p className="font-body text-white/60 text-center mb-14 text-base tracking-wide">
          Many expressions, one heart of worship.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {worshipForms.map(({ title, desc, img }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              style={{ border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Default label at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 p-3 transition-opacity duration-300 group-hover:opacity-0"
                style={{ background: "linear-gradient(to top, rgba(13,6,24,0.92) 0%, transparent 100%)" }}
              >
                <p className="font-heading text-base font-bold text-white leading-tight">{title}</p>
              </div>
              {/* Hover overlay — covers full card */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(13,6,24,0.78)" }}
              >
                <p className="font-heading text-lg font-bold text-[#c9a84c] leading-tight">{title}</p>
                <p className="font-body text-sm text-white/80 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}