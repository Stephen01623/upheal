"use client";

import { useState } from "react";
import { lectures } from "@/data/lectures";

export default function LecturesPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-16 px-6">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <p className="text-sm tracking-widest text-gray-500 mb-2 uppercase">
            Learning Modules
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#7a1c1c] leading-tight">
            Essential Lectures
          </h1>

          <div className="w-24 h-[3px] bg-[#7a1c1c] mt-4 mb-4"></div>

          <p className="text-gray-600 max-w-2xl">
            Structured anatomical lectures integrating cadaveric dissection,
            clinical correlation, and visual learning modules.
          </p>
        </div>

        {lectures.map((group, i) => (
          <div key={i} className="mb-12">

            {/* DOCTOR TITLE */}
            <h2 className="text-xl font-semibold text-[#fcb900] mb-6">
              {group.lecturer}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {group.videos.map((item, j) => (
                <div
                  key={j}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-2"
                >

                  <div
                    onClick={() => setActiveVideo(item.youtubeId)}
                    className="h-[180px] relative cursor-pointer overflow-hidden"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/60 group-hover:bg-[#7a1c1c] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition duration-300">
                        ▶
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-[15px] mb-2 leading-snug text-gray-600">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {item.desc}
                    </p>

                    <p className="text-xs text-gray-500">
                      {group.lecturer}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>

          <div
            className="w-[90%] md:w-[800px] aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}