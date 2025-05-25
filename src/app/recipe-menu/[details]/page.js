import { CiStar } from "react-icons/ci";

const RecipeDetails = async ({ params }) => {
  const { details } = await params;
  const response = await fetch(`https://dummyjson.com/recipes/${details}`);
  const { image, name, instructions, prepTimeMinutes, ingredients, rating, caloriesPerServing } =
    await response.json();

  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-12 md:col-span-5">
        <img
          className="w-full h-full  object-center mix-blend-multiply"
          src={image}
        />
      </div>
      <div className="col-span-7">
        <div className="w-full h-full pt-4 md:pt-36 px-5">
          <div>
            <h1 className="text-4xl text-[#3a3e43]">{name}</h1>
          </div>
          <div className="flex gap-2 mt-4">
            <CiStar className="text-yellow-400 font-bold" />
            <CiStar className="text-yellow-400 font-bold" />
            <CiStar className="text-yellow-400 font-bold" />
            <CiStar className="text-yellow-400 font-bold" />
            <CiStar className="text-yellow-400 font-bold" />
            <span>{rating} of 5</span>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-[#3a3e43] pt-4">
              Ingredients
            </h1>
            <p className="text-[#838586] w-6/12">{ingredients + " ,"}</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-[#3a3e43] pt-4">
              Instructions
            </h1>
            <p className="text-[#838586] w-8/12">{instructions}</p>
          </div>
          <div className="pt-4 flex gap-2">
            <div className="pr-6 border-r-2 border-solid border-indigo-600">
              {prepTimeMinutes} Mins
            </div>
            <div className="px-6 border-r-2 border-solid border-indigo-600">
              {caloriesPerServing} nutration
            </div>
            <div className="px-6 ">{ingredients.length} ingredients</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetails;
