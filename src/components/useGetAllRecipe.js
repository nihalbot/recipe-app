import { RECIPE_API } from "@/utils/constant";
const useGetAllRecipe = async ()=>{
    const response = await fetch(RECIPE_API);
    const { recipes } = await response.json();
    return recipes;
}
export default useGetAllRecipe;