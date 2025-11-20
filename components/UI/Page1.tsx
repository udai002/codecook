import React from "react";

export default function Page1() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-black text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
          Crack{" "}
          <span className="text-[#4079DA] font-bold">
            Coding
          </span>{" "}
          Challenges. Elevate Your
        </h1>

        <h1 className="text-[#4079DA] font-bold text-4xl sm:text-5xl md:text-6xl mt-2">
          Skills
        </h1>

        <p className="text-[#FFFFFFBF] text-base sm:text-lg md:text-xl font-normal mt-4 max-w-2xl">
          Practice, compete, and grow with the best coding platforms.
        </p>
      </div>
    </>
  );
}
