export default function Lectures() {
  const lectures = [
    {
      duration: "48 MIN",
      color: "bg-[#e6dede]",
      playColor: "bg-[#7a1c1c]",
      tag: "GROSS ANATOMY I",
      title: "Anterior Abdominal Wall & Inguinal Canal",
      desc: "Detailed fascial layers, Hesselbach triangle boundaries, and direct vs indirect hernia surgical anatomy.",
      doctor: "Dr. R. Santos, MD",
      accent: "text-[#7a1c1c]",
    },
    {
      duration: "62 MIN",
      color: "bg-[#dfe6e3]",
      playColor: "bg-[#1f3d36]",
      tag: "CARDIOPULMONARY SERIES",
      title: "Mediastinum & Coronary Circulation",
      desc: "Superior and posterior mediastinal contents, cardiac conduction pathways, and arterial dominance.",
      doctor: "Dr. M. De Leon, MD",
      accent: "text-[#1f3d36]",
    },
    {
      duration: "55 MIN",
      color: "bg-[#efe5d6]",
      playColor: "bg-[#c47a1c]",
      tag: "NEUROANATOMY",
      title: "Circle of Willis & Cranial Nerve Foramina",
      desc: "Base of skull osseous apertures, intracranial venous sinuses, and stroke vascular distributions.",
      doctor: "Dr. C. Villanueva, MD",
      accent: "text-[#c47a1c]",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-[#7a1c1c] mb-4">
          Essential Lectures
        </h2>

        {/* RED LINE */}
        <div className="w-full h-[2px] bg-[#7a1c1c] mb-10" />

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {lectures.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >

              {/* TOP SECTION */}
              <div className={`${item.color} h-[120px] relative flex items-center justify-center`}>

                {/* PLAY BUTTON */}
                <div className={`${item.playColor} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl`}>
                  ▶
                </div>

                {/* DURATION */}
                <span className="absolute top-3 right-3 bg-[#7a1c1c] text-white text-xs px-2 py-1 rounded">
                  {item.duration}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <p className={`text-xs font-semibold mb-2 ${item.accent}`}>
                  {item.tag}
                </p>

                <h3 className="font-semibold text-[15px] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {item.desc}
                </p>

                {/* FOOTER */}
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{item.doctor}</span>

                  <button className={`${item.accent} font-semibold hover:underline`}>
                    Watch Lecture →
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}