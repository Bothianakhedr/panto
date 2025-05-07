import BestSellingProduct from "../BestSellingProduct/BestSellingProduct";
import { bestSell } from "./best-sell-data";

const BestSelling = () => {
  return (
    <section className=" py-14 my-9 bg-[#F7F7F7]">
      <div className="container mx-auto">
        <div className="title text-center">
          <h2 className="font-bold text-5xl text-[#1E1E1E]">Best Selling Product</h2>
          <div className=" bg-[#EEEEEE] flex  justify-between my-5 text-[#1E1E1E] mx-auto rounded-full text-[19px]    w-[330px] py-2 px-4">
            {bestSell.map((value) => {
              return <span>{value}</span>;
            })}
          </div>
        </div>
        <div className="products flex gap-8 mt-12">
            <BestSellingProduct/>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
