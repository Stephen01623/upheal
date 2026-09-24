export default function Gallery() {
  const items = [
    { title: "360 Visuals", subtitle: "18 interactive scans" },
    { title: "Student FAQs" },
    { title: "Lab Guidelines" },
    { title: "Text Dissections" },
    { title: "Manuals & Guides" },
    { title: "Histology Slides" },
    { title: "H&E Stain Stacks" },
    { title: "Gross Specimens" },
    { title: "Thorax & Viscera" },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-[#7a1c1c] mb-4">
          Gallery
        </h2>

        <div className="w-full h-[2px] bg-[#7a1c1c] mb-6" />

        {/* SUBTEXT */}
        <p className="text-gray-600 max-w-3xl mb-10">
          Explore interactive collections, regional human dissections,
          histological stains, and didactic learning modules curated by
          the Department of Anatomy.
        </p>

        {/* GRID ITEMS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#f5f5f5] rounded-lg p-4 hover:shadow-md transition cursor-pointer"
            >
              <h4 className="font-semibold text-sm">
                {item.title}
              </h4>

              {item.subtitle && (
                <p className="text-xs text-gray-500 mt-1">
                  {item.subtitle}
                </p>
              )}
            </div>
          ))}

        </div>

        {/* FEATURE PANEL */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              INTERACTIVE VOLUMETRIC RENDERING
            </h3>

            <h2 className="text-2xl font-bold mb-4">
              360 Rotational Anatomical Workbench
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Rotate, isolate, and slice biological structures on three stereoscopic axes.
              Digitized directly from specimens prepared at Calderon Hall, this 360 engine
              allows medical students to inspect musculoskeletal origin-insertions,
              coronary arborizations, and cranial nerves.
            </p>

            {/* FEATURES LIST */}
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Axial / Sagittal / Coronal Slicing</li>
              <li>• Stereotactic Structure Pinning</li>
              <li>• Arterial & Venous Filtering</li>
              <li>• High Definition Retinal Textures</li>
            </ul>
          </div>

          {/* RIGHT BOX (VIEWER PLACEHOLDER) */}
          <div className="bg-gray-200 rounded-xl h-[250px] flex items-center justify-center text-gray-500">
            360 Viewer Placeholder
          </div>

        </div>

      </div>
    </section>
  );
}