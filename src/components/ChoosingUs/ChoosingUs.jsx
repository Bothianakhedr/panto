import React from "react";
import ChoosingUsCard from "../ChoosingUsCard/ChoosingUsCard";
import { cardData } from "./Cards-data";

const ChoosingUs = () => {
  return (
    <section className="my-20">
      <div className="container mx-auto flex gap-12   ">
        <h3 className="text-4xl text-[#1E1E1E] font-[700] lg:max-w-[215px] leading-12   ">
          Why Choosing Us
        </h3>

        {cardData.map((card, index) => {
          return (
            <ChoosingUsCard
              key={index}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ChoosingUs;
