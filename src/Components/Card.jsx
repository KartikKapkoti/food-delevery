import { GiChickenOven } from "react-icons/gi";
import { RiLeafLine } from "react-icons/ri";

function Card({ name, image, id, price, type }) {
  return (
    <div className="w-[260px] h-[350px] bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 border border-gray-200 flex flex-col gap-2">
      
      
      <div className="w-full h-[180px] rounded-lg overflow-hidden bg-gray-100 flex justify-center items-center">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
      </div>

      
      <div className="text-xl font-semibold px-2 text-gray-800 truncate">{name}</div>

      
      <div className="px-2 w-full flex justify-between items-center">
        <div className="font-semibold text-gray-700 text-lg">₹{price}</div>
        <div
          className={`flex items-center gap-2 font-semibold ${
            type === "veg" ? "text-green-600" : "text-red-600"
          }`}
        >
          {type === "veg" ? <RiLeafLine size={22} /> : <GiChickenOven size={22} />}
          <span className="capitalize">{type.replace("_", " ")}</span>
        </div>
      </div>

      
      <button className="p-3  w-full text-white bg-green-500 rounded-lg hover:bg-green-600 active:scale-95 transition-all duration-150 shadow-sm">
        Add To Cart
      </button>
    </div>
  );
}

export default Card;
