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

export default function JoinSection() {
  return (
    <section
      id="belong"
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #2d1548 50%, #1a0a2e 100%)" }}
    >
      {/* Decorative images */}
      <img
        src="/assets/030924e37_Untitleddesign3.png"
        alt="" aria-hidden="true"
        className="absolute -top-8 -left-8 w-72 h-72 pointer-events-none"
        style={{ filter: "invert(1) sepia(1) saturate(400%) hue-rotate(350deg) brightness(1.2)", mixBlendMode: "screen" }}
      />
      <img
        src="/assets/030924e37_Untitleddesign3.png"
        alt="" aria-hidden="true"
        className="absolute -bottom-8 -right-8 w-80 h-80 pointer-events-none"
        style={{ filter: "invert(1) sepia(1) saturate(400%) hue-rotate(350deg) brightness(1.2)", mixBlendMode: "screen", transform: "rotate(180deg)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl sm:text-6xl text-[#c9a84c] mb-4">You Belong Here</h2>
          <p className="font-heading text-xl sm:text-2xl text-white/70 italic">
            This is not an exclusive club.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
          {/* Left: belong list */}
          <div className="flex flex-col gap-3">
            <iframe width="100%" style="aspect-ratio: 4/3;" src="https://www.youtube.com/embed/0gvtFFlFgZo" title="Are you ready to join the movement?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* {belongPeople.map((text) => (
              <div
                key={text}
                className="flex items-center gap-3 px-5 py-4 rounded-lg"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#c9a84c" }} />
                <p className="font-heading text-xl sm:text-2xl text-white/90">{text}</p>
              </div>
            ))} */}
          </div>

          {/* Right: Join the team CTA */}
          <div
            className="flex flex-col items-center text-center gap-6 p-10 rounded-lg"
            style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.3)" }}
          >
            <img
              src="/assets/59373e871_generated_image.png"
              alt="Join the team"
              className="w-full h-48 object-cover rounded-lg"
              style={{ border: "1px solid rgba(201,168,76,0.2)" }}
            />
            <div>
              <p className="font-display text-sm tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Now Forming</p>
              <h3 className="font-heading text-3xl sm:text-4xl text-white italic leading-snug mb-4">
                Join the Founding Creative Team
              </h3>
              <p className="font-body text-white/60 leading-relaxed mb-6">
                We are building something that has never been done before — a worship experience where every art form becomes an act of praise. If you are a creator, a dreamer, or simply someone who feels called, this is your moment.
              </p>
              <a
                target="_blank"
                href="https://forms.gle/5fZA7cy4Aj5SDEEA9"
                className="inline-block font-body text-sm font-semibold tracking-[0.15em] px-10 py-4 transition-all"
                style={{ background: "#c9a84c", color: "#1a0a2e", borderRadius: 4 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#b8974a"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#c9a84c"; }}
              >
                I'M IN — JOIN THE TEAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
