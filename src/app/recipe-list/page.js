import Cart from "@/components/Cart";
import Search from "@/components/Search";
import useGetAllRecipe from "@/components/useGetAllRecipe";
import Link from "next/link";

const RecipeList =  async ()=>{
    const recipesList = await useGetAllRecipe();
    return (
      <div className="w-full h-screen px-2 md:px-20">
        <Search />
        <div className="w-full flex flex-wrap flex-shrink gap-4 justify-center">
          {recipesList && recipesList.length > 0 ? (
            recipesList.map((recipe) => (
              <Link
                className="w-full md:w-3/12"
                key={recipe.id}
                href={`recipe-menu/${recipe.id}`}
              >
                <Cart recipeinfo={recipe} />
              </Link>
            ))
          ) : (
            <p>No item found</p>
          )}
        </div>
      </div>
    );
}
export default RecipeList;