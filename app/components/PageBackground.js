/**
 * PageBackground — Cinematic mesh background shared across all pages.
 * Matches the HeroSection ambient glow aesthetic.
 */
export default function PageBackground() {
  return (
    <>
      {/* Pixel grid texture (fixed so it doesn't scroll) */}
      <div className="fixed inset-0 pixel-grid pointer-events-none opacity-[0.18] z-0" />

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Cinematic ambient mesh — top-right blue/accent glow */}
      <div
        className="fixed top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
          filter: 'blur(120px)',
        }}
      />

      {/* Bottom-left subtle secondary glow */}
      <div
        className="fixed bottom-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 70%)',
          filter: 'blur(140px)',
        }}
      />
    </>
  );
}
