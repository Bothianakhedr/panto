import bgImage from "../../assets/panto-imgs/home.jpg";
import { CiSearch } from "react-icons/ci";

import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <header
      className="home  "
      style={{
        backgroundPosition: "center",
        backgroundImage: `URL(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <section className="flex  justify-center h-[1084px]  pt-25">
        <div className=" text-center text-white ">
          <h2 className="text-7xl max-w-[840px] capitalize font-[500] leading-[100px]">
            Make your interior more minimalistic & modern
          </h2>
          <p className="text-[24px]  font-[300] max-w-[550px] mx-auto py-7">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
          <div className="border w-[340px]  mx-auto flex  items-center justify-between px-4 py-2 rounded-full mt-3 ">
            <span className="text-[17px] text-[#FFFFFF26]">
              Search Furniture
            </span>

            <span className="bg-[#E58411] p-2 rounded-full">
              <CiSearch className=" text-xl text-white" />
            </span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Home;
