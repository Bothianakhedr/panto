import React, { useState } from "react";
import { SellingInfo } from "./Best-Salleing-data";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const BestSelling = () => {
  const [activeBtn, setactiveBtn] = useState("chairs");
  function handleActive(category) {
    setactiveBtn(category);
  }
  return (
    <section className="bg-[#F7F7F7] py-10">
      <div className="container mx-auto">
        <div className="title">
          <h2 className="text-[40px] font-semibold text-center mb-4">
            Best Selling Product
          </h2>
          <div className="tabs rounded-full px-6 py-3  bg-[#EEEEEE] w-fit mx-auto justify-center flex gap-5">
            <button
              className={` rounded-2xl py-1 px-2 ${
                activeBtn === "chairs" ? "bg-[#fff]" : ""
              }`}
              onClick={() => {
                handleActive("chairs");
              }}
            >
              chairs
            </button>
            <button
             className={` rounded-2xl py-1 px-2 ${
                activeBtn === "beds" ? "bg-[#fff]" : ""
              }`}
              onClick={() => {
                handleActive("beds");
              }}
            >
              beds
            </button>
            <button
             className={` rounded-2xl py-1 px-2 ${
                activeBtn === "sofa" ? "bg-[#fff]" : ""
              }`}
              onClick={() => {
                handleActive("sofa");
              }}
            >
              Sofa
            </button>
            <button
             className={` rounded-2xl py-1 px-2 ${
                activeBtn === "lamp" ? "bg-[#fff]" : ""
              }`}
              onClick={() => {
                handleActive("lamp");
              }}
            >
              Lamp
            </button>
          </div>
        </div>

        <div className="products   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-12 rounded">
          {SellingInfo.filter((item) => item.category === activeBtn).map(
            (item, index) => (
              <div
                className="product bg-[#FFFFFF] overflow-hidden rounded-[10px]  "
                key={index}
              >
                <div className="image">
                  <img
                    src={item.image}
                    className="w-full h-[255px] object-cover"
                  />
                </div>
                <div className="content p-5">
                  <h3 className="text-[#8D8D8D] text-[17px]">
                    {item.category}
                  </h3>
                  <h4 className="text-[#0D1B39] text-[22px] font-bold my-2">
                    {item.name}
                  </h4>
                  <div className="icons flex gap-1">
                    <FaStar className="text-[#F6B76F] text-[17px]" />
                    <FaStar className="text-[#F6B76F] text-[17px]" />
                    <FaStar className="text-[#F6B76F] text-[17px]" />
                    <FaStar className="text-[#F6B76F] text-[17px]" />
                    <FaStar className="text-[#F6B76F] text-[17px]" />
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <h5 className="text-[#0D1B39] text-[21px] font-[500]">
                      {item.price}
                    </h5>
                    <div className="add bg-[#0D1B39] w-13 h-13 rounded-full flex items-center justify-center ">
                      <FaPlus className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <span className="text-[19px] text-[#E58411] flex items-center gap-3 justify-center ">
          View All
          <FaArrowRight />
        </span>
      </div>
    </section>
  );
};

export default BestSelling;
