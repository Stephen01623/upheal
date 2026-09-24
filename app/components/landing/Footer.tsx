export default function Footer() {
  return (
    <footer className="mt-20">

      {/* MAIN */}
      <div className="bg-[var(--footer-gray)] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-2xl font-semibold mb-10 tracking-wide">
            UP HEAL
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

            {/* LEFT */}
            <div className="text-sm leading-relaxed text-center md:text-left">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <span>📍</span>
                Calderon Hall, UP College of Medicine,
              </p>
              <p>547 Pedro Gil Street, Ermita, Manila</p>

              <div className="mt-4">
                <p>✉ upcm.upmanila.org@edu.gmail</p>
                <p>cmadmissions.upmanila@up.edu.ph</p>
              </div>
            </div>

            {/* RIGHT (SOCIALS) */}
            <div className="flex gap-6 text-2xl items-center">
              <span className="hover:text-[var(--accent)] cursor-pointer transition">𝕏</span>
              <span className="hover:text-[var(--accent)] cursor-pointer transition">f</span>
              <span className="hover:text-[var(--accent)] cursor-pointer transition">📷</span>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="bg-[var(--green)] text-white text-center py-3 text-sm tracking-wide">
        Essential Anatomy Copyright © 2026
      </div>

    </footer>
  );
}