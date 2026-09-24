"use client";

import Link from "next/link";

export default function FeatureSection() {
  const features = [
    {
      title: "Atlas of Anatomy",
      image: "/heart.jpg",
      color: "bg-[#d4a017]",
      link: "/anatomy",
    },
    {
      title: "360 Anatomy",
      image: "/360.jpg",
      color: "bg-[#1f3d36]",
      link: "/anatomy-360",
    },
    {
      title: "Essential Lectures",
      image: "/lecture.jpg",
      color: "bg-[#7a1c1c]",
      link: "/lectures",
    },
    {
      title: "Atlas of Histology",
      image: "/histology.jpg",
      color: "bg-[#d4a017]",
      link: "/histology",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        {features.map((item, i) => (
          <Link href={item.link} key={i}>

            <div className="group relative h-[200px] rounded-xl overflow-hidden cursor-pointer shadow-md transition duration-300 hover:shadow-xl">

              {/* IMAGE (LEFT SIDE) */}
              <div className="absolute inset-0 w-[70%] overflow-hidden">
                <img
                  src={item.image}
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-125 group-hover:-translate-x-4"
                />
              </div>

              {/* RIGHT COLOR PANEL */}
              <div
                className={`absolute right-0 top-0 h-full w-[50%] ${item.color} transition-all duration-500 group-hover:w-full`}
              ></div>

              {/* DARK OVERLAY (optional for readability) */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300"></div>

              {/* TEXT CENTER */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                  {item.title}
                </h3>
              </div>

            </div>

          </Link>
        ))}

      </div>
    </section>
  );
}