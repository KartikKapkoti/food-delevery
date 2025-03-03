import { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { dataContext } from "../context/UserContext";
import { useSelector } from "react-redux";
import Cart2 from "./Cart2";
import { MdRemoveShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";
function Cart() {
  let { showCart, setShowCart } = useContext(dataContext);
  let items = useSelector((state) => state.cart);
  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryFee = (subtotal * 2) / 100;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div
      className={` w-full md:w-[90vh] h-[100%] fixed top-0 right-0 bg-white shadow-xl  p-4 ${
        showCart ? "translate-x-0" : "translate-x-full"
      } transition-all duration-500  overflow-y-auto max-h-screen`}
    >
      <header className="text-xl font-semibold flex justify-between items-center">
        <span>Order Item</span>
        <MdOutlineCancel
          className="cursor-pointer text-red-400 hover:text-red-500 text-3xl "
          onClick={() => setShowCart(false)}
        />
      </header>

      <div className="shadow-lg gap-1 flex flex-col mt-4">
        {items.map((item) => (
          <Cart2
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
            qty={item.qty}
          />
        ))}
      </div>

      {items.length > 0 ? (
        <>
          <div className="w-full border-t-2 border-b-2 border-gray-600 mt-6 flex flex-col gap-2 p-4">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Subtotal -</span>
              <span className="font-semibold">₹{subtotal}/</span>
            </div>

            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Delivery Fee -</span>
              <span className="font-semibold">₹{deliveryFee}/</span>
            </div>

            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Taxes -</span>
              <span className="font-semibold">₹{taxes}/</span>
            </div>
          </div>

          <div className="w-full flex justify-between items-center p-4 text-green-800 font-bold text-xl">
            <span className="font-semibold">Total -</span>
            <span className="font-semibold">₹{total}/</span>
          </div>

          <div className="flex justify-center items-center w-full mt-4">
            <button
              className="p-3 w-[90%] text-white bg-green-500 rounded-lg hover:bg-green-600 active:scale-95 transition-all duration-150 shadow-sm"
              onClick={() => toast.success("Order Placed Successfully")}
            >
              Place Order
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-[50vh] text-gray-500">
          <MdRemoveShoppingCart className="text-6xl text-red-400 mb-4" />
          <p className="text-lg text-black font-semibold">Your cart is empty</p>
          <p className="text-sm font-semibold text-gray-700">
            Add items to your cart now.
          </p>
        </div>
      )}
    </div>
  );
}
export default Cart;
