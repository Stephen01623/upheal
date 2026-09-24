export default function About() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-[#7a1c1c] mb-6">
          About
        </h2>

        {/* RED LINE */}
        <div className="w-full h-[2px] bg-[#7a1c1c] mb-10" />

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2 text-gray-800 text-[15px] leading-relaxed space-y-5">

            <p>
              The <span className="text-[#7a1c1c] font-semibold">UP HEAL</span> (Health Education through Anatomical Learning) Project is an
              official digital health and anatomical repository under the Department
              of Anatomy, College of Medicine, University of the Philippines Manila.
            </p>

            <p>
              Conceived as a response to evolving medical pedagogical needs and modern
              technological frontiers, UP HEAL bridges physical cadaveric dissection
              with interactive 3D spatial visualizations, high-resolution histology
              slide scans, and comprehensive didactic modules.
            </p>

            <p>
              Calderon Hall has trained generations of Filipino physicians since the
              foundation of the College of Medicine in 1905. UP HEAL continues this
              venerable heritage by ensuring equitable, remote, and round-the-clock
              access to gold-standard anatomical specimens.
            </p>

          </div>

          {/* RIGHT PANEL */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

            {/* Academic Host */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#7a1c1c] tracking-wide mb-1">
                ACADEMIC HOST
              </h4>
              <p className="font-semibold">Department of Anatomy</p>
              <p className="text-sm text-gray-500">
                UP College of Medicine • Founded 1905
              </p>
            </div>

            <hr className="my-4" />

            {/* Location */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#7a1c1c] tracking-wide mb-1">
                PHYSICAL LOCATION
              </h4>
              <p className="text-sm">
                Calderon Hall, 547 Pedro Gil Street, Ermita,
                City of Manila 1000, Philippines
              </p>
            </div>

            <hr className="my-4" />

            {/* Faculty */}
            <div>
              <h4 className="text-xs font-bold text-[#7a1c1c] tracking-wide mb-2">
                FACULTY & STEERING COUNCIL
              </h4>

              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Anatomy Curriculum Committee
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Medical Informatics Unit
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  UPCM Dissection Laboratory Staff
                </li>
              </ul>
            </div>

            {/* NOTE BOX */}
            <div className="mt-6 bg-[#fff5e6] border border-[#fcb900] rounded-md p-3 text-xs text-gray-700">
              Open to certified UP Manila students, medical faculty,
              and verified anatomical researchers nationwide.
            </div>

          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <span className="bg-[#ffe8cc] text-[#fcb900] px-3 py-1 rounded-md text-sm font-semibold">
              01
            </span>
            <h4 className="mt-3 font-semibold">Cadaveric Excellence</h4>
            <p className="text-sm text-gray-600 mt-2">
              Preserving genuine dissection mastery through high-definition photography.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <span className="bg-[#e6f4ea] text-green-600 px-3 py-1 rounded-md text-sm font-semibold">
              02
            </span>
            <h4 className="mt-3 font-semibold">Volumetric 360°</h4>
            <p className="text-sm text-gray-600 mt-2">
              Spatial multi-axis rendering for complex anatomical structures.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <span className="bg-[#fdecea] text-red-600 px-3 py-1 rounded-md text-sm font-semibold">
              03
            </span>
            <h4 className="mt-3 font-semibold">Clinical Correlation</h4>
            <p className="text-sm text-gray-600 mt-2">
              Linking anatomy with surgical and clinical applications.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}