import React from "react";
import MoreInfo from "../MoreInfo/MoreInfo";
import image1 from "../../assets/panto-imgs/443cef5f2c32d6f28e6923d590e9c7a89b1297f7.jpg";
import image2 from "../../assets/panto-imgs/3c8ea705dfc44b8035ebd10cd5adaafc9278179e.jpg";
import image3 from "../../assets/panto-imgs/61554c82d6a52e0a511f5d3e3a3ff6bbfcfafb76.jpg";

const Materials = () => {
  return (
    <section className="lg:flex lg:gap-8    lg:mt-80 ">
      <div className="content px-2 lg:w-[40%]   mx-5 ">
        <h3 className="text-[16px] text-[#E58411] font-[400] tracking-[1px] lg:tracking-[3px] uppercase lg:text-[18px]">
          Materials
        </h3>
        <h4 className="text-[35px] text-[#1E1E1E] leading-10 my-5  md:max-w-[400px] lg:text-[42px] lg:font-[700] lg:leading-13 ">
          Very serious materials for making furniture
        </h4>
        <p className="text-[#1E1E1E] text-[16px] font-[400] leading-8 md:max-w-[500px] lg:text-[18px] ">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <MoreInfo />
      </div>

      <div className="images lg:w-[60%]  lg:flex  lg:gap-5  justify-end">
        <div className="md:flex gap-5 my-6 lg:flex-col lg:my-0  lg:relative bottom-45">
          <img
            src={image1}
            className="mb-3 object-cover md:w-[50%]  rounded-[15px] lg:w-[225px] lg:h-[250px] "
          />
          <img
            src={image2}
            className="mb-3 object-cover md:w-1/2  rounded-[15px] lg:w-[225px] lg:h-[340px] "
          />
        </div>
        <div className="lg:relative  ">
        <img
          src={image3}
          className="object-cover rounded-[20px] lg:w-[500px] lg:h-[445px]"

        />
        <div className="bg-[#E3E3E3] lg:w-[250px] lg:h-[422px] lg:absolute lg:-top-[35px] -z-10 rounded-[20px] right-0 "></div>

        </div>
      </div>
    </section>
  );
};

export default Materials;
