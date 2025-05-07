import { TiStar } from "react-icons/ti";
import { BsPlusLg } from "react-icons/bs";
import { productInfo } from "./productDetails";

const BestSellingProduct = () => {
  return (
    <>
      {productInfo.map((product,index) => {
        return (
          <div key={index} className="product md:1/2 lg:w-1/4 bg-white shadow-2xl rounded-2xl px-4" >
            <img src={product.image} alt={product.name} className="h-[250px] w-[250px] object-cover  "  />
            <div className="my-3" >
              <span className="font-[400] text-[17px] text-[#8D8D8D]">Chair</span>
              <h3 className="font-[700] text-[21px] text-[#0D1B39]">{product.name}</h3>
             <div className="star-icon flex gap-.5">

             <TiStar className="text-[#F6B76F] text-[25px]" />
              <TiStar className="text-[#F6B76F] text-[25px]" />
              <TiStar className="text-[#F6B76F] text-[25px]" />
              <TiStar className="text-[#F6B76F] text-[25px]" />
              <TiStar className="text-[#F6B76F] text-[25px]" />
             </div>
            </div>
            <div className="price my-3 flex justify-between items-center">
              <span className="text-[#0D1B39] font-bold text-[23px]">${product.price}</span>
              <span className="bg-[#0D1B39]  w-12 h-12 rounded-full flex justify-center items-center">
                <BsPlusLg  className="text-white  text-[22px]"/>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BestSellingProduct;
