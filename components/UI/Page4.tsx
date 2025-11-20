import React from "react";
import Image from "next/image";
import img2 from "../../public/landing/img2 .png";

export default function Page4() {
  return (
    <div className="w-full flex justify-center px-4 py-10">
      <div className="bg-[#202230] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-10">
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            How this Ai changes the world We <br /> teches you
          </h2>

          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Learn AI and more</li>
            <li>Prep for a certification</li>
            <li>Practice with AI coaching</li>
            <li>Advance your career</li>
          </ul>

          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold w-fit shadow-md hover:bg-gray-200 transition">
            Explore courses
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={img2}
            width={450}
            height={450}
            alt="AI Illustration"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
}
