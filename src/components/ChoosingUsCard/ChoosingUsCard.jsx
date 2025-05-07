import MoreInfo from "../MoreInfo/MoreInfo";

const ChoosingUsCard = ({ title, description }) => {
  return (
    <div className="w-[25%]  ">
      <h3 className="font-[700] text-[23px] text-[#1E1E1E] mb-3">{title}</h3>
      <p className="text-[17px] leading-8 text-[#353535]">{description}</p>
      <MoreInfo />
    </div>
  );
};

export default ChoosingUsCard;
