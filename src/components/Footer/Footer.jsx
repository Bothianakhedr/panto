import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Furniture, service } from "./data";

const Footer = () => {
  return (
    <section className=" py-13 bg-[#F7F7F7]">
      <div className="container mx-auto md:flex  flex-wrap lg:gap-5  px-10">
        <div className=" px-2 text-center md:w-1/2 lg:w-[35%] md:mt-6 lg:mt-6 lg:text-left">
          <h3 className="text-[24px] text-[#1E1E1E] font-[700] tracking-[1px]">
            Panto
          </h3>
          <p className="text-[19px] text-[#1E1E1E] leading:[25px] lg:leading-[20px] my-4 lg:max-w-[290px]  md:text-[22px] lg:text-[15px]">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>
          <div className="px-2  text-center my-8 md:w-1/2   lg:text-left  lg:w-[20%]">
            <h3 className="text-[#F6973F] text-[16px] font-[600] tracking-[1px]  ">
              Services
            </h3>

            <ul className="mt-2">
              {service.map((value, index) => {
                return (
                  <li
                    className="py-2  text-[#1E1E1E] text-[21px] lg:text-[17px]"
                    key={index}
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="px-2  text-center my-8  md:w-1/2   lg:text-left lg:w-[20%]">
            <h3 className="text-[#F6973F] text-[16px] md:font-[600] tracking-[1px]  ">
              Furniture
            </h3>

            <ul className="mt-2">
              {Furniture.map((value, index) => {
                return (
                  <li
                    className="py-2 tracking-[1px] text-[#1E1E1E] text-[21px] lg:text-[17px]"
                    key={index}
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="px-2  text-center my-8 md:w-1/2  lg:text-left lg:w-[20%]">
            <h3 className="text-[#F6973F] text-[16px] font-[600] tracking-[1px]  ">
              Follow Us
            </h3>

            <FaFacebookF className="mx-auto my-5 text-[20px] text-[#1E2833] lg:mx-0 " />
            <FaTwitter className="mx-auto my-5 text-[20px] text-[#1E2833] lg:mx-0" />
            <FaInstagram className="mx-auto my-5 text-[20px] text-[#1E2833] lg:mx-0" />
        </div>


        
      </div>
      <div className=" flex flex-col items-center md:flex-row md:justify-between px-15  mt-4">
            <h5 className="text-[#1E2833] text-[15px]">Copyright © 2020</h5>
            <div className="md:flex  gap-6 ">
                <h6 className="text-[#1E1E1E] text-[15px]">Terms & Conditions</h6>
                <h6 className="text-[#1E1E1E] text-[15px]">Privacy policy</h6>
            </div>
        </div>
    </section>
  );
};

export default Footer;
