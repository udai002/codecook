
import Image from "next/image";
import React from "react";

import meta from "../../public/landing/img1.1.png";
import dell from "../../public/landing/img1.2.png";
import nvidia from "../../public/landing/img1.3.png";
import google from "../../public/landing/img1.4.png";
import linkedin from "../../public/landing/img1.5.png";
import intel from "../../public/landing/img1.6.png";
import oracle from "../../public/landing/img.7.png";
import tata from "../../public/landing/img.8.png";
import hp from "../../public/landing/img.9.png";

const logos = [meta, dell, nvidia, google, linkedin, intel, oracle, tata, hp];

export default function Page5() {
  return (
    <div className="w-full py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#2F80ED] inline-block bg-[#E8F1FF] px-4 py-1 rounded-md">
        <span className="text-[#2F80ED]">Empowering Developers</span> For the
        Future
      </h2>

      <p className="text-gray-600 mt-2">
        Where our talented graduates are currently working
      </p>

      <div className="w-full overflow-hidden mt-10">
        <div className="flex items-center gap-16 whitespace-nowrap animate-infinite-scroll">
          {logos.map((img, i) => (
            <Image key={i} src={img} alt="logo" width={100} height={90} />
          ))}
          {logos.map((img, i) => (
            <Image
              key={"dup-" + i}
              src={img}
              alt="logo"
              width={100}
              height={90}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
