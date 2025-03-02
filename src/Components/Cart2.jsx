import image1 from "../assets/image1.avif";
import { IoTrashBinOutline } from "react-icons/io5";

function Cart2() {
    return (
        <div className="w-full h-[150px] p-3 shadow-lg flex justify-between items-center rounded-md bg-white">
            
            <div className="flex items-center gap-4 w-[65%]">
                <div className="w-[100px] h-[100px] overflow-hidden rounded-md border">
                    <img src={image1} alt="Food item" className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col justify-between h-full">
                    <span className="font-semibold text-lg">Food Name</span>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 bg-white font-bold flex justify-center items-center text-red-500 border border-gray-300 rounded hover:bg-red-200">-</button>
                        <span className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded">1</span>
                        <button className="w-8 h-8 bg-white font-bold flex justify-center items-center text-green-500 border border-gray-300 rounded hover:bg-green-200">+</button>
                    </div>
                </div>
            </div>
            
        
            <div className="flex flex-col items-end gap-2">
                <span className="font-semibold text-lg">₹499</span>
                <IoTrashBinOutline className="text-red-500 text-2xl cursor-pointer hover:text-red-700" />
            </div>
        </div>
    );
}

export default Cart2;