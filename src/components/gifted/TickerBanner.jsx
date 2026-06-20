import React from "react";

const items = Array(12).fill("✦  Launching Spring 2027");

export default function TickerBanner() {
  return (
    <>
      <div
        className="relative overflow-hidden py-3"
        style={{ background: "linear-gradient(90deg, #1a0a2e, #2d1548, #1a0a2e)" }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "ticker 18s linear infinite",
            width: "max-content",
          }}
        >
          {items.map((text, i) => (
            <span
              key={i}
              className="font-heading text-xl sm:text-2xl font-bold italic text-[#c9a84c] tracking-[0.18em] px-8"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
      {/* Purple gradient divider */}
      <div
        style={{
          height: 12,
          background: "linear-gradient(to right, #3d1f60, #7c4dbf, #a06dd9, #7c4dbf, #3d1f60)",
        }}
      />
    </>
  );
}