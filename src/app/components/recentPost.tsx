import React from "react";
import RecentCard from "./card";

function RecentPost() {
  return (
    <section className=" bg-[#F4E2E2] flex flex-col items-center justify-center h-auto md:h-[520px] p-[20px]">
      <div className="md:max-w-3xl lg:max-w-5xl flex flex-col gap-9 px-5 ">
        <div className=" flex justify-between items-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#171717]">Recent Post</h3>
          <button className=" text-xl md:text-2xl font-normal text-[#F98585] bg-transparent border-none cursor-pointer">
            View all
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-9 ">
          <RecentCard />
          <RecentCard />
        </div>
      </div>
    </section>
  );
}

export default RecentPost;
