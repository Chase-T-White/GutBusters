"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFetchRecipe } from "../hooks/fetchingHooks";
import { useQuery } from "@tanstack/react-query";
import Button from "./Button";
import Loading from "./Loading";
import Error from "./Error";
import RecipeGeneralInfo from "./RecipeGeneralInfo";
import RecipeIngredientsList from "./RecipeIngredientsList";

interface RecipeContentProps {
  recipeId: string;
}

const RecipeContent: React.FC<RecipeContentProps> = ({ recipeId }) => {
  const [count, setCount] = useState(0);
  const [src, setSrc] = useState("");

  const { data, isError, isLoading } = useQuery({
    queryFn: () => useFetchRecipe({ recipeId }),
    queryKey: ["recipes", recipeId],
    enabled: !!recipeId,
  });

  if (!recipeId) {
    return (
      <h2 className="text-center mt-12">
        Start by searching for a recipe or an ingredient
      </h2>
    );
  }

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  const {
    cooking_time,
    ingredients,
    publisher,
    servings,
    source_url,
    image_url,
    title,
  } = data?.data.recipe;

  if (image_url !== src) {
    setSrc(image_url);
  }

  return (
    <>
      <header className="relative w-full h-[21rem]">
        <Image
          src={src}
          onError={() => setSrc("/images/default.jpg")}
          alt={`${title}`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute w-full h-full z-10 green-tint"></div>
        <h1 className="recipeContent-title">
          <span>{title}</span>
        </h1>
      </header>
      <RecipeGeneralInfo
        cooking_time={cooking_time}
        servings={servings}
        count={count}
        setCount={setCount}
      />
      <RecipeIngredientsList
        ingredients={ingredients}
        servings={servings}
        count={count}
      />
      <div className="bg-sky-50 text-center p-12">
        <h4 className="text-center text-lg text-main-blue mb-8">
          HOW TO COOK IT
        </h4>
        <p className="mb-6">
          This recipe was created by <strong>{publisher}</strong>.<br />
          Please check out their website for cooking instruction.
        </p>
        <Link href={source_url} title="Click for instructions" target="_blank">
          <Button action={"INSTRUCTIONS"} />
        </Link>
      </div>
    </>
  );
};

export default RecipeContent;
