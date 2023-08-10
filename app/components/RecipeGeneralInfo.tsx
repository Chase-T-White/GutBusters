import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { GoPeople } from "react-icons/go";

interface GeneralInfoProps {
  cooking_time: string;
  servings: number;
  count: number;
  setCount: (count: number) => void;
}

const RecipeGeneralInfo = ({
  cooking_time,
  servings,
  count,
  setCount,
}: GeneralInfoProps) => {
  return (
    <div className="w-full flex justify-center pt-24 pb-12 bg-sky-50">
      <div className="flex gap-4 items-center mr-12">
        <BsClock className="text-2xl icon-color" />
        <p>
          <span className="font-bold">{cooking_time}</span> MINUTES
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <GoPeople className="text-2xl icon-color" />
        <p>
          <span className="font-bold">{servings + count}</span> SERVINGS
        </p>
        <div className="flex gap-2 items-center cursor-pointer">
          <AiOutlineMinusCircle
            className="text-xl icon-color"
            onClick={() => {
              if (count + servings === 1) {
                return;
              }
              setCount(count - 1);
            }}
          />
          <AiOutlinePlusCircle
            className="text-xl icon-color cursor-pointer"
            onClick={() => setCount(count + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeGeneralInfo;
