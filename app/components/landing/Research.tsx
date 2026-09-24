export default function Research() {
  const researches = [
    {
      tag: "Peer Reviewed • 2026",
      tagColor: "bg-green-100 text-green-700",
      title:
        "Morphometric Variations of the Calot’s Triangle in a Southeast Asian Cadaveric Cohort: Implications for Laparoscopic Cholecystectomy",
      org: "Department of Anatomy, UP College of Medicine & Philippine General Hospital",
      desc:
        "A comprehensive investigation of 120 formalin-fixed cadavers documenting cystic artery branching origins, accessory biliary ducts, and anomalous hepatic arterial patterns to minimize iatrogenic bile duct injuries.",
      doi: "10.1016/j.upm.anat.2026.04",
    },
    {
      tag: "Digital Medical Education • 2025",
      tagColor: "bg-yellow-100 text-yellow-700",
      title:
        "Efficacy of Interactive 360° Photogrammetric Dissection Models on Gross Anatomy Practical Examination Scores among First-Year Medical Students",
      org: "UP HEAL Learning Analytics Working Group",
      desc:
        "Evaluating student spatial retention and objective OSCE performance through randomized integration of 360 rotational anatomical modules alongside traditional wet-lab cadaveric demonstrations.",
      doi: "10.1016/j.upm.meded.2025.11",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-[#7a1c1c] mb-4">
          Research
        </h2>

        {/* RED LINE */}
        <div className="w-full h-[2px] bg-[#7a1c1c] mb-10" />

        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2 space-y-6">

            {researches.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
              >
                {/* TAG */}
                <span className={`text-xs px-2 py-1 rounded ${item.tagColor}`}>
                  {item.tag}
                </span>

                {/* TITLE */}
                <h3 className="mt-3 font-semibold text-[15px] leading-snug">
                  {item.title}
                </h3>

                {/* ORG */}
                <p className="text-xs text-gray-500 mt-1">
                  {item.org}
                </p>

                {/* DESC */}
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>

                {/* LINKS */}
                <div className="flex gap-4 mt-4 text-sm">
                  <button className="text-[#7a1c1c] font-medium hover:underline">
                    Read Full Abstract (PDF) →
                  </button>

                  <span className="text-gray-400">
                    DOI: {item.doi}
                  </span>
                </div>
              </div>
            ))}

          </div>

         

 

        </div>

      </div>
    </section>
  );
}