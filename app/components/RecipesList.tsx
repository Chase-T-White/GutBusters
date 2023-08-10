import Error from "../components/Error";
import Loading from "./Loading";
import Recipe from "./Recipe";

interface ListProps {
  isError: boolean;
  isLoading: boolean;
  setRecipeId: any;
  recipeData: any;
  setShowRecipes: any;
}

const RecipesList = ({
  recipeData,
  isError,
  isLoading,
  setRecipeId,
  setShowRecipes,
}: ListProps) => {
  if (recipeData === undefined) {
    return;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (recipeData.data.recipes.length === 0) {
    return (
      <h2 className="px-8 py-12">
        No recipes match your search...
        <br />
        Please try again
      </h2>
    );
  }

  return (
    <ul className="max-h-[900px] pt-8 overflow-y-scroll aside-scroll">
      {recipeData.data.recipes.map((recipe: any, i: number) => {
        return (
          <Recipe
            {...recipe}
            setRecipeId={setRecipeId}
            setShowRecipes={setShowRecipes}
            key={i}
          />
        );
      })}
    </ul>
  );
};

export default RecipesList;
