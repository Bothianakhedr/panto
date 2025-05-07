import { CgArrowLongRight } from "react-icons/cg";

const MoreInfo = () => {
  return (
    <span className="text-[16px]   leading-4 mt-3 text-[#E58411] flex  items-center gap-5">
      More Info
      <CgArrowLongRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  );
};

export default MoreInfo;
