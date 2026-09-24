export default function Footer() {
  return (
    <footer>

      {/* MAIN */}
      <div className="bg-[#6b6b6b] text-white py-10">
        <div className="max-w-6xl mx-auto text-center px-6">

          <h2 className="text-xl font-semibold mb-6">
            UP HEAL
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* LEFT */}
            <div className="text-sm text-left">
              <p>📍 Calderon Hall, UP College of Medicine,</p>
              <p>547 Pedro Gil Street, Ermita, Manila</p>

              <div className="mt-3">
                <p>✉ upcm.upmanila.org@edu.gmail</p>
                <p>cmadmissions.upmanila@up.edu.ph</p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex gap-5 text-2xl">
              <span>𝕏</span>
              <span>f</span>
              <span>📷</span>
            </div>

          </div>
        </div>
      </div>

      {/* GREEN STRIP */}
      <div className="bg-[#00d084] text-white text-center py-3 text-sm">
        Essential Anatomy Copyright © 2026
      </div>

    </footer>
  );
}