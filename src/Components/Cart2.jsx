import image1 from "../assets/image1.avif";
import { IoTrashBinOutline } from "react-icons/io5";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function Cart2({ name, price, image, id, qty }) {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[150px] p-3 shadow-lg flex justify-between items-center rounded-md bg-white">
      <div className="flex items-center gap-4 w-[65%]">
        <div className="w-[100px] h-[100px] overflow-hidden rounded-md border">
          <img
            src={image}
            alt="Food item"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <span className="font-semibold text-lg">{name}</span>
          <div className="flex items-center gap-2">
            <button
              className="w-8 h-8 bg-white font-bold flex justify-center items-center text-red-500 border border-gray-300 rounded hover:bg-red-200"
              onClick={() => {
                qty > 1 ? dispatch(DecrementQty(id)) : 1;
              }}
            >
              -
            </button>
            <span className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded">
              {qty}
            </span>
            <button
              className="w-8 h-8 bg-white font-bold flex justify-center items-center text-green-500 border border-gray-300 rounded hover:bg-green-200"
              onClick={() => dispatch(IncrementQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className="font-semibold text-lg">₹{price}/</span>
        <IoTrashBinOutline
          className="text-red-500 text-2xl cursor-pointer hover:text-red-700"
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  );
}

export default Cart2;
