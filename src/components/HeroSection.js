import Link from "next/link";

const HeroSection = ()=>{
    return (
      <div className="w-full  flex-1">
        <div className="h-full grid grid-cols-12">
          <div className="col-span-12 md:col-span-7">
            <div className="w-full h-full flex flex-col justify-center px-10">
              <div>
                <h1 className="font-bold text-5xl">
                  Learn. Cook. Share. Cooking Made Easy.
                </h1>
                <p className="mt-2 text-lg">
                  Say good bye to long and frustrating food blogs and recipe
                  videos. Access our recipe cards to prepare any dish in
                  minuets.
                </p>
              </div>
              <div className="w-full">
                <Link href="recipe-list">
                  <button className=" bg-blue-500 px-2 py-2 text-white font-bold rounded-lg mt-4 mx-auto transform transition-all delay-100 hover:bg-blue-700">
                    Browse Dish
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 px-5 ">
            <img
              className="w-full h-full"
              src="/hero-dish.png"
              alt="dish_img"
            />
          </div>
        </div>
      </div>
    );
}
export default HeroSection;