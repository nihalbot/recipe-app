import { CiStar } from "react-icons/ci";

const RecipeDetails = async ({ params }) => {
  const { details } = await params;
  const response = await fetch(`https://dummyjson.com/recipes/${details}`);
  const { image, name, instructions, prepTimeMinutes, ingredients, rating } =
    await response.json();

  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className=" col-span-5">
        <img
          className="w-full h-full object-cover mix-blend-multiply"
          src={image}
        />
      </div>
      <div className="col-span-7">
        <div className="w-full h-full pt-36 px-5">
          <div>
            <h1 className="text-4xl text-[#3a3e43]">{name}</h1>
          </div>
          <div className="flex gap-2 mt-4">
            <CiStar className="text-yellow-400"/>
            <CiStar className="text-yellow-400"/>
            <CiStar className="text-yellow-400"/>
            <CiStar className="text-yellow-400"/>
            <CiStar className="text-yellow-400"/>
            <span>{rating} of 5</span>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-[#3a3e43]">Ingredients</h1>
            <p className="text-[#838586] w-6/12">{ingredients + " ,"}</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-[#3a3e43]">Instructions</h1>
            <p className="text-[#838586] w-8/12">{instructions}</p>
          </div>
          <div className="mt-2 flex gap-2">
            <div className="h-3 border border-e-2">40 Mins</div>
            <div className="h-3 border border-e-2">255 nutration</div>
            <div className="h-3 border-e-2">6 ingredients</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetails;
