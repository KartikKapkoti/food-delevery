import React, { useContext } from "react";
import Nav from "../Components/Nav";
import Category from "../Components/Category";
import Card from "../Components/Card";
import { dataContext } from "../context/UserContext";
import { food_items } from "../data/food";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import { MdRestaurantMenu } from "react-icons/md";

const Home = () => {
  let { Cate, setCate, input } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <Nav />
      <Category filter={filter} />
      <div className="w-full flex flex-wrap gap-3 justify-center items-center pt-5 pb-10">
        {Cate.length > 0 ? (
          Cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-[50vh] text-gray-500">
            <MdRestaurantMenu className="text-6xl text-red-400 mb-4" />
            <p className="text-lg text-black font-semibold">No Dish Found</p>
            <p className="text-sm text-gray-700">
              Try selecting a different category.
            </p>
          </div>
        )}
      </div>
      <Cart />
      <Footer />
    </div>
  );
};

export default Home;
