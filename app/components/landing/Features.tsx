export default function Features() {
  const items = [
    {
      title: "Atlas of Anatomy",
      img: "/anatomy.jpg",
      bg: "#fcb900",
    },
    {
      title: "360 Anatomy",
      img: "/360.jpg",
      bg: "#1f3d36",
    },
    {
      title: "Essential Lectures",
      img: "/lectures.jpg",
      bg: "#7a1c1c",
    },
    {
      title: "Atlas of Histology",
      img: "/histology.jpg",
      bg: "#fcb900",
    },
    {
      title: "Anatomy Research",
      img: "/research.jpg",
      bg: "#1f3d36",
    },
    {
      title: "FAQs",
      img: "/faq.jpg",
      bg: "#7a1c1c",
    },
  ];

  return (
    <section className="bg-[#eeeeee] py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

        {items.map((item, i) => (
          <div
            key={i}
            className="flex bg-white rounded-xl shadow-md overflow-hidden h-[150px]"
          >
            {/* IMAGE */}
            <div className="w-1/2">
              <img
                src={item.img}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div
              className="w-1/2 flex items-center justify-center text-white text-lg font-semibold"
              style={{ backgroundColor: item.bg }}
            >
              {item.title}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}