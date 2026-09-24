export default function Histology() {
  const slides = [
    {
      title: "Simple Squamous Epithelium",
      stain: "H&E Stain",
      mag: "40x Magnification",
      img: "/histology1.jpg",
    },
    {
      title: "Cardiac Muscle Tissue",
      stain: "H&E Stain",
      mag: "100x Magnification",
      img: "/histology2.jpg",
    },
    {
      title: "Hyaline Cartilage",
      stain: "PAS Stain",
      mag: "40x Magnification",
      img: "/histology3.jpg",
    },
    {
      title: "Liver Lobule",
      stain: "Trichrome",
      mag: "60x Magnification",
      img: "/histology4.jpg",
    },
    {
      title: "Renal Corpuscle",
      stain: "H&E Stain",
      mag: "100x Magnification",
      img: "/histology5.jpg",
    },
    {
      title: "Neuron (CNS)",
      stain: "Nissl Stain",
      mag: "400x Magnification",
      img: "/histology6.jpg",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-[#7a1c1c] mb-4">
          Atlas of Histology
        </h2>

        {/* RED LINE */}
        <div className="w-full h-[2px] bg-[#7a1c1c] mb-6" />

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mb-10">
          High-resolution histological slide atlas featuring standard staining
          techniques, magnification layers, and annotated cellular structures
          for microscopic anatomical learning.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {slides.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
            >

              {/* IMAGE */}
              <div className="h-[160px] bg-gray-200">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="font-semibold text-[15px] mb-1">
                  {item.title}
                </h3>

                <p className="text-xs text-[#7a1c1c] font-medium">
                  {item.stain}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {item.mag}
                </p>

                {/* ACTION */}
                <button className="mt-4 text-sm text-[#7a1c1c] font-semibold hover:underline">
                  View Slide →
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* VIEWER PANEL */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              DIGITAL MICROSCOPY VIEWER
            </h3>

            <h2 className="text-2xl font-bold mb-4">
              Multi-Layer Histological Slide Exploration
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Navigate through multiple magnification levels and staining
              layers. Identify nuclei, cytoplasm, extracellular matrix, and
              pathological changes with precision using our digital slide viewer.
            </p>

            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Zoomable 40x–400x Layers</li>
              <li>• Multi-Stain Comparison</li>
              <li>• Cell Structure Annotation</li>
              <li>• Interactive Labeling</li>
            </ul>
          </div>

          {/* VIEWER PLACEHOLDER */}
          <div className="bg-gray-200 rounded-xl h-[250px] flex items-center justify-center text-gray-500">
            Histology Viewer Placeholder
          </div>

        </div>

      </div>
    </section>
  );
}