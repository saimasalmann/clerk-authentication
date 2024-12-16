import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className=" bg-[#CFA6A61C]  ">
      <div className=" mx-auto md:max-w-3xl lg:max-w-5xl md:h-[520px] h-auto md:pb-10 flex flex-col md:flex-row md:justify-between justify-center items-center gap-2  ">
        <div className=" w-full md:w-1/2  flex flex-col items-center md:items-start px-10  h-[300px] space-y-7">
          <h1 className=" md:leading-[1.5]  text-2xl  sm:text-3xl md:text-4xl text-center  md:text-left  font-bold  md:font-extrabold text-[#171717]">
            Hi, I am John, Creative Technologist
          </h1>
          <p className="text-base sm:text-lg text-[#171717] font-normal">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className=" bg-[#F98585] w-fit text-white px-5 py-3 font-medium text-lg  cursor-pointer">
            Download Resume
          </button>
        </div>

        <Image
          src="/image.png"
          alt="Profile Pic"
          width={300}
          height={300}
          className=" p-5 "
        />
      </div>
    </section>
  );
}

export default Hero;
