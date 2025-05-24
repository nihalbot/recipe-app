const Search = ()=>{
    return (
      <div className="w-full h-20 pt-6 flex justify-center items-center">
        <input
          className="w-6/12 px-2 py-2 border-2 border-y-gray-300 border-s-gray-300 border-e-0 rounded-s-lg"
          type="text"
          placeholder="Search a recipie you want..."
        />
        <button className="bg-green-500 px-10 rounded-e-lg py-2.5 text-white font-bold transition-all delay-100  ease-out hover:bg-green-700">Search</button>
      </div>
    );
}
export default Search;