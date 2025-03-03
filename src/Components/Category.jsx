import { useState } from "react";
import CategoryObj from "../CategoryObj";

function Category({ filter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleClick(category) {
    setSelectedCategory(category);
    filter(category);
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 w-full pt-5">
      {CategoryObj.map((item) => (
        <div
          key={item.id}
          className={`w-[100px] h-[100px] rounded-md shadow-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-200 active:scale-90 
          ${
            selectedCategory === item.name
              ? "bg-green-400 text-white"
              : "bg-white hover:bg-green-300 text-gray-900"
          }`}
          onClick={() => handleClick(item.name)}
        >
          <div className="font-semibold flex flex-col items-center justify-center p-2">
            {item.icon}
            <span className="mt-1">{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
