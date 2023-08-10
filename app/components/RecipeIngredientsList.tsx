import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { toFraction } from "fraction-parser";

interface RecipeIngredientsProps {
  ingredients: string[];
  servings: number;
  count: number;
}

const RecipeIngredientsList = ({
  ingredients,
  servings,
  count,
}: RecipeIngredientsProps) => {
  return (
    <section className="p-12">
      <h4 className="text-center text-lg text-main-blue mb-8">
        RECIPE INGREDIENTS
      </h4>
      <ul className="grid grid-cols-2 grid-rows-auto gap-y-8 gap-x-12">
        {ingredients.map((ingredient: any, i: number) => {
          return (
            <li key={i} className="flex gap-4 items-center">
              <AiOutlineCheck className="text-base shrink-0 icon-color" />
              <p className="text-sm">{`${
                ingredient.quantity !== null
                  ? toFraction(
                      (ingredient.quantity / servings) * (servings + count),
                      { useUnicodeVulgar: false }
                    )
                  : ""
              } ${ingredient.unit !== null ? ingredient.unit : ""} ${
                ingredient.description
              }`}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecipeIngredientsList;
