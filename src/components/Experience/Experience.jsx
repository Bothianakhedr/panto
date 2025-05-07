import image from "../../../src/assets/panto-imgs/4a4b57d91dde88ae6788c27acd5fc55158eb2f11.jpg";
import MoreInfo from "../MoreInfo/MoreInfo";
const Experience = () => {
  return (
    <section className=" my-20 md:my-40 md:flex md:gap-12  ">
      <div className="relative md:w-[50%]">
        <div className="lg:w-[495px] lg:h-[422px] rounded-[20px] bg-[#F7F7F7] absolute -top-13  z-10"></div>
        <img
          src={image}
          className="w-[629px] shadow-2xl h-[424px] absolute object-cover  rounded-[20px] z-20"
        />
        <div className="lg:w-[495px] lg:h-[300px] rounded-[20px] bg-[#F7F7F7] absolute md:-left-8 lg:left-45 top-8"></div>
      </div>

      <div className="content  pt-[450px]  px-3   md:w-[40%] md:p-0  md:px-0 ">
        <h3 className="text-[20px] text-[#E58411]  tracking-[2px] py-3 uppercase md:font-[600] md:text-[18px] ">
          experiences
        </h3>
        <h4 className=" text-[41px] leading-11 font-[700]  md:text-[42px] py-4 text-[#1E1E1E] capitalize md:max-w-[460px] md:font-[600] md:leading-13">
          we provide you the best experience
        </h4>
        <p className="text-[19px] py-3 text-[#565656] leading-7 md:font-[400] md:text-[18px] md:leading-9">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <MoreInfo className="py-10" />
      </div>
    </section>
  );
};

export default Experience;
