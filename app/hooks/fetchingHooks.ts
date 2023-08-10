"use client";
import axios from "axios";

// API url
const url = "https://forkify-api.herokuapp.com/api/v2/recipes";

// Fetching recipes
export const useFetchRecipes = async ({ search }: any) => {
  const res = await axios.get(
    `${url}?search=${search}&key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return res.data;
};

// Fetching recipe
export const useFetchRecipe = async ({ recipeId }: any) => {
  const res = await axios.get(
    `${url}/${recipeId}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return res.data;
};
