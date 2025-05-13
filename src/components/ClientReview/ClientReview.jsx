import React from "react";
import { FaStar } from "react-icons/fa";

import { reviewsInfo } from "./data";

const ClientReview = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto">
        <div className="title text-center mb-9">
          <h2 className="text-[20px] uppercase font-[500] tracking-[2px] text-[#E58411]">
            Testimonials
          </h2>
          <h3 className="md:text-[48px] font-[600]  mt-2 text-[#1E1E1E] ">
            Our Client Reviews
          </h3>
        </div>
        <div className="reviews md:flex md:gap-3 ">
          {reviewsInfo.map((review ,index) => {
            return (
              <div key={index} className="review  bg-amber-500 m-2 relative rounded-[18px] overflow-hidden  md:w-1/2 lg:w-[33.333%]">
                <img
                  src={review.bgImage}
                  className="w-full h-[476px] object-cover  "
                />
                <div className="bg-white absolute bottom-5 text-center p-6 m-3 rounded-[18px] left-[0px] lg:left-[50px] ">
                  <div className="w-17 h-17 rounded-full  bg-white flex items-center justify-center absolute -translate-1/2 top-0 left-1/2">
                    <img
                      src={review.roundedImage}
                      className="w-[50px] h-[50px] object-cover rounded-full mx-auto "
                    />
                  </div>
                  <div className="mt-6 mb-3">
                    <h3 className="font-[600] text-[18px] text-[#1E1E1E]  ">
                      {review.name}
                    </h3>
                    <h4 className="text-[12px]">{review.Job}</h4>
                  </div>
                  <p className="text-[14px] lg:max-w-[250px]">
                    {review.description}
                  </p>
                  <div className="flex  justify-center my-3 text-[#F6973F] gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
