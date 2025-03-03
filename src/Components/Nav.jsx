import React, { useContext, useEffect } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { dataContext } from "../context/UserContext";
import { food_items } from "../data/food";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, setCate, showCart, setShowCart } =
    useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newList);
  }, [input]);

  let items = useSelector((state) => state.cart);

  return (
    <div className="w-full h-[75px] flex justify-between items-center px-3">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-lg">
        <IoFastFoodOutline className="w-[35px] h-[35px]" />
      </div>

      
      <form
        className="w-[50%] h-[50px] bg-white flex items-center px-[20px] gap-3 rounded-full shadow-lg md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <MdManageSearch className="w-[30px] h-[30px]" />
        <input
          type="text"
          placeholder="Search Items....."
          className="w-full outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      <div
        className="group w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-lg relative cursor-pointer transition-all duration-700"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <IoCart className="w-[35px] h-[35px] text-gray-700 group-hover:text-green-400 group-hover:scale-110 transition-transform duration-700" />
        <span className="absolute top-0 right-2 font-bold text-green-400">
          {items.length}
        </span>
      </div>
    </div>
  );
}

export default Nav;
