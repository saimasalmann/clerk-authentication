import React from "react";
import Image from "next/image";

function Featured() {
  return (
    <>
      <div className=" bg-[#CFA6A61C] mx-auto">
        <div className="flex flex-col md:max-w-3xl lg:max-w-5xl mx-auto gap-6 py-[30px] sm:px-6 ">
          <h3 className="text-xl md:text-2xl text-center md:text-start font-medium text-gray-900 ">
            Featured Works
          </h3>

          <div className=" flex  flex-col gap-24 ">
            {/* card 1 */}
            <div className="flex flex-col md:flex-row gap-6  items-center ">
              <Image src="/img-1.png" width={245} height={180} alt="image" />

              <div className="w-[70%] flex flex-col justify-center items-center md:items-start gap-6">
                <h2 className="text-2xl md:text-3xl text-center md:text-start font-semibold text-gray-900">
                  Designing Dashboards
                </h2>

                <div className=" text-xl flex items-center space-x-4">
                  <p className="bg-[#F98585] rounded-3xl py-[5px] px-[30px] text-white">
                    2020
                  </p>
                  <p className="text-gray-900 text-md md:text-xl">Dashboard</p>
                </div>
                <p className=" text-gray-900 text-md md:text-lg">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="flex flex-col md:flex-row gap-6  items-center ">
              <Image src="/img-2.png" width={245} height={180} alt="image" />

              <div className="w-[70%] flex flex-col justify-center items-center md:items-start gap-6">
                <h2 className="text-2xl md:text-3xl text-center md:text-start font-semibold text-gray-900">
                  Designing Dashboards
                </h2>

                <div className=" text-xl flex items-center space-x-4">
                  <p className="bg-[#F98585] rounded-3xl py-[5px] px-[30px] text-white">
                    2020
                  </p>
                  <p className="text-gray-900 text-md md:text-xl">Dashboard</p>
                </div>
                <p className=" text-gray-900 text-md md:text-lg">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="flex flex-col md:flex-row gap-6  items-center ">
              <Image src="/img-3.png" width={245} height={180} alt="image" />

              <div className="w-[70%] flex flex-col justify-center items-center md:items-start gap-6">
                <h2 className="text-2xl md:text-3xl text-center md:text-start font-semibold text-gray-900">
                  Designing Dashboards
                </h2>

                <div className=" text-xl flex items-center space-x-4">
                  <p className="bg-[#F98585] rounded-3xl py-[5px] px-[30px] text-white">
                    2020
                  </p>
                  <p className="text-gray-900 text-md md:text-xl">Dashboard</p>
                </div>
                <p className=" text-gray-900 text-md md:text-lg">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
