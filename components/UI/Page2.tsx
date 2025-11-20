import Image from "next/image";
import React from "react";
import img1 from "../../public/landing/img1.png"

export default function Page2() {
  return (
    <div className="w-full bg-white py-16 px-6">
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-black mb-12">
        Why Start With <span className="text-blue-600">Us?</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
        <div className="flex flex-col gap-8 max-w-md text-left">
          <div>
            <h2 className="text-lg font-semibold text-black">
              Learn Smart, Practice Better –
            </h2>
            <p className="text-gray-600">
              Solve LeetCode problems and get ready for coding interviews.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black">
              Compete and Improve
            </h2>
            <p className="text-gray-600">
              Take part in CodeChef contests and track your progress.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black">
              Grow Confidently
            </h2>
            <p className="text-gray-600">
              Build skills that help you succeed in coding challenges and real
              projects.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={img1}
            width={500}
            height={500}
            alt="Learning illustration"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
