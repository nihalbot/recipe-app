import { FaFire, FaRegClock } from "react-icons/fa";
import { IoRestaurantOutline } from "react-icons/io5";


const Cart = ({ recipeinfo }) => {
  console.log(recipeinfo);
  const {
    image,
    cuisine,
    name,
    cookTimeMinutes,
    prepTimeMinutes,
    servings,
    difficulty,
  } = recipeinfo;
  return (
    <div className="w-full md:w-3/12 bg-white mt-10 shadow-md px-3 py-2 rounded-lg">
      <div className="w-full">
        <img className=" h-48 w-full rounded-lg" src={image} />
      </div>
      <div className="mt-3">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-lg">{name}</h1>
          <h1 className="px-2 py-2  bg-green-500 rounded-2xl text-white font-bold">
            {difficulty}
          </h1>
        </div>
        <h1 className="text-lg">{cuisine}</h1>
        <div className="flex flex-col justify-center text-[#585B5C]">
          <h1>
            <FaFire className="inline me-1" />
            Prep time: {prepTimeMinutes}
          </h1>
          <h1>
            <FaRegClock className="inline me-1" />
            Cook time: {cookTimeMinutes}
          </h1>
          <h1>
            <IoRestaurantOutline className="inline me-1" />
            Seerves: {servings}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Cart;
