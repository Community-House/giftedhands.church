import React, { useState } from "react"; // useState still used for form
import { Send } from "lucide-react";

export default function ConnectSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    const mailto = `mailto:connect@giftedhands.church?subject=${encodeURIComponent("Join Gifted Hands")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section
      id="connect"
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1a0a2e 0%, #0d0618 100%)" }}
    >
      {/* Decorative paint splatters */}
      <img
        src="/assets/030924e37_Untitleddesign3.png"
        alt="" aria-hidden="true"
        className="absolute -top-8 -right-8 w-72 h-72 pointer-events-none"
        style={{ filter: "invert(1) sepia(1) saturate(400%) hue-rotate(350deg) brightness(1.2)", mixBlendMode: "screen" }}
      />
      <img
        src="/assets/030924e37_Untitleddesign3.png"
        alt="" aria-hidden="true"
        className="absolute bottom-40 -left-10 w-64 h-64 pointer-events-none opacity-50"
        style={{ filter: "invert(1) sepia(1) saturate(300%) hue-rotate(200deg) brightness(0.9)", mixBlendMode: "screen", transform: "rotate(120deg)" }}
      />
      {/* Radial glow blobs */}
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(100,40,180,0.1) 0%, transparent 65%)" }} />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="font-display text-5xl text-[#c9a84c] text-center mb-4">Connect</h2>
        <p className="font-body text-white/60 text-center mb-14 text-base max-w-xl mx-auto">
          If you're interested in learning more about Gifted Hands, attending future gatherings, supporting the vision, or simply staying connected as the movement grows, we'd love to hear from you. There is a place for artists, dreamers, seekers, supporters, and curious hearts alike.
        </p>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-5 py-3 font-body text-base focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              style={{ borderRadius: 4 }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-5 py-3 font-body text-base focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              style={{ borderRadius: 4 }}
            />
            <textarea
              placeholder="Tell us about your gift or calling..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-5 py-3 font-body text-base focus:outline-none focus:border-[#c9a84c]/60 transition-colors resize-none"
              style={{ borderRadius: 4 }}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full py-4 font-body text-sm tracking-[0.15em] font-semibold transition-all"
              style={{ background: "#c9a84c", color: "#1a0a2e", borderRadius: 4 }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#b8974a"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#c9a84c"; }}
            >
              <Send className="w-4 h-4" />
              LEARN MORE
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 text-center sm:text-left">
            {/* Brand */}
            <div className="flex flex-col items-center sm:items-start gap-3">
              <img
                src="/assets/226dd3561_GiftedHandsWordsnobackground.png"
                alt="Gifted Hands"
                className="h-8 object-contain"
              />
              <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
                A creative worship movement. Masterpieces in Progress.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center sm:items-start gap-2">
              <p className="font-display text-xs tracking-[0.2em] text-[#c9a84c] mb-2">EXPLORE</p>
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#programs" },
                { label: "Values", href: "#about" },
                { label: "Expressions", href: "#gallery" },
                { label: "Join", href: "#belong" },
                { label: "Connect", href: "#connect" },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="font-body text-white/50 text-sm hover:text-[#c9a84c] transition-colors">
                  {label}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex flex-col items-center sm:items-start gap-2">
              <p className="font-display text-xs tracking-[0.2em] text-[#c9a84c] mb-2">FOLLOW US</p>
              {[
                { label: "YouTube", href: "https://www.youtube.com/@giftedhands.church" },
                { label: "Facebook", href: "https://www.facebook.com/share/1D7zLT3QFa/" },
                { label: "Instagram", href: "https://www.instagram.com/giftedhands.church?igsh=YjNmeGxhMDR3bHNv" },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="font-body text-white/50 text-sm hover:text-[#c9a84c] transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center">
            <p className="font-body text-white/25 text-sm tracking-wide">
              © 2027 Gifted Hands · Masterpieces in Progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
