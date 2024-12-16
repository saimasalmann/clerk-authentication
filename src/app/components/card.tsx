import React from "react";

function RecentCard() {
  return (
    <div className=" bg-white p-5 flex flex-col justify-evenly h-auto md:h-[350px]">
      <h2 className=" text-2xl font-bold text-[#171717]">
        Making a design system from scratch
      </h2>
      <p className=" text-xl text-[#171717] font-normal">
        12 Feb 2020 | Design, Pattern
      </p>
      <p className=" text-base font-normal text-[#171717] ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
}

export default RecentCard;
