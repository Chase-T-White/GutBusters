"use client";

import { useState } from "react";
import { useFetchRecipes } from "./hooks/fetchingHooks";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Header from "./components/Header";
import RecipesList from "./components/RecipesList";
import RecipeContent from "./components/RecipeContent";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Home() {
  const [search, setSearch] = useState("");
  const [recipeId, setRecipeId] = useState("");
  const [showRecipes, setShowRecipes] = useState(true);

  // Query api call
  const { data, isError, isLoading } = useQuery({
    queryFn: () => useFetchRecipes({ search }),
    queryKey: ["recipes", search],
    enabled: !!search,
  });

  return (
    <main className="max-w-[1200px] w-full lg:w-[90%] min-w-[300px] min-h-[100vh] lg:min-h-[900px] mx-auto lg:my-20 bg-sky-100 rounded-xl flex flex-col overflow-hidden shadow-xl shadow-pink-500">
      <Header setSearch={setSearch} />
      <section className="relative grow grid grid-rows-1 grid-cols-1 md:grid-cols-[minmax(15rem,_22rem),_minmax(40rem,_1fr)]">
        <aside
          className={`absolute top-0 md:static h-[calc(100vh-106px)] md:h-full w-[300px] md:w-full flex flex-col justify-between bg-white ${
            showRecipes ? "translate-x-0" : "translate-x-[-100%]"
          } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
        >
          <div
            className="md:hidden absolute top-0 right-[-52px] p-2 bg-white rounded-br-lg cursor-pointer"
            onClick={() => setShowRecipes(!showRecipes)}
          >
            {showRecipes ? (
              <AiOutlineCloseCircle className="text-4xl text-pink-500" />
            ) : (
              <IoFastFoodOutline
                title="Show Recipes"
                className="text-4xl text-pink-500"
              />
            )}
          </div>
          <RecipesList
            recipeData={data}
            isError={isError}
            isLoading={isLoading}
            setRecipeId={setRecipeId}
            setShowRecipes={setShowRecipes}
          />
          <div className="px-8 py-12 text-center">
            <small>
              Data from forkify API. Credit{" "}
              <span className="underline">
                <Link
                  href="https://twitter.com/jonasschmedtman"
                  target="_blank"
                >
                  Jonas Schmedtmann
                </Link>
              </span>{" "}
              for design inspiration.
            </small>
          </div>
        </aside>
        <article>
          <RecipeContent recipeId={recipeId} />
        </article>
      </section>
    </main>
  );
}
