// Hero.tsx
export default function Hero() {
  return (
    <section className="relative h-[420px]">
      <img
        src="/DFBG.jpg"
        className="absolute w-full h-full object-cover grayscale"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <h1 className="text-white text-4xl md:text-5xl font-light">
          Explore UP Heal
        </h1>
      </div>
    </section>
  );
}