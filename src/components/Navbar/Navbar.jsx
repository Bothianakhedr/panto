import { data } from "./nav-data";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="  py-8 text-white">
      <div className="container  mx-auto flex justify-between items-center">
        <h1 className="text-[25px] font-[500]">Panto</h1>
        <ul className=" flex gap-13 items-center">
          {data.map((value) => (
            <li className="capitalize text-[19px]">{value}</li>
          ))}
        </ul>
        <div className="relative ">
          <FaShoppingBag className="text-3xl " />
          <span
            className="bg-[#E58411] w-4 h-5.5 rounded-full absolute -right-1 top-1 flex justify-center items-center"
          >
            0
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
