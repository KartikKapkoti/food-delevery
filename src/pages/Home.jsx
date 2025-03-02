import React, { useContext } from "react";
import Nav from "../Components/Nav";
import Category from "../Components/Category";
import Card from "../Components/Card";
import { dataContext } from "../context/UserContext";
import { food_items } from "../data/food";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";

const Home = () => {
  let { Cate, setCate, input } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => item.food_category === category);
      setCate(newList);
    }
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <Nav />
      <Category filter={filter} />
      <div className="w-full flex flex-wrap gap-3 justify-center items-center pt-5 pb-10">
        {Cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
      <Cart/>
      <Footer/>
    </div>
  );
};

export default Home;
