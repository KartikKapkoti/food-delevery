import { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { dataContext } from "../context/UserContext";
import Cart2 from "./Cart2";
function Cart(){
    let{showCart ,setShowCart}= useContext(dataContext)
    return(
        <div className={`w-[90vh] h-[100%] fixed top-0 right-0 bg-white shadow-xl  p-4 ${showCart?"translate-x-0":"translate-x-full"} transition-all duration-500`}>
            <header className="text-xl font-semibold flex justify-between items-center">
            <span>Order Item</span>
            <MdOutlineCancel className="cursor-pointer text-red-400 hover:text-red-500 text-3xl " onClick={()=>setShowCart(false)}/>
            </header>
            <Cart2/>

        </div>
    )
}
export default Cart