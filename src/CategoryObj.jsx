import { BiCategory } from "react-icons/bi";
import { MdOutlineBreakfastDining } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { LiaHamburgerSolid } from "react-icons/lia";
import { MdOutlineFoodBank } from "react-icons/md";

const CategoryObj = [
    {
        id:1,
        name:'All',
        icon:<BiCategory className="w-[50px] h-[50px]" />
    },
    {
        id:2,
        name:'Breakfast',
        icon:<MdOutlineBreakfastDining className="w-[50px] h-[50px]" />
    },
    {
        id:3,
        name:'Soups',
        icon:<LuSoup className="w-[50px] h-[50px]" />
    },
    {
        id:4,
        name:'Pasta',
        icon:<CiBowlNoodles className="w-[50px] h-[50px]" />
    },
    {
        id:5,
        name:'Dinner',
        icon:<MdOutlineFoodBank className="w-[50px] h-[50px]" />
    },
    {
        id:6,
        name:'Pizza',
        icon:<GiFullPizza className="w-[50px] h-[50px]" />
    },
    {
        id:7,
        name:'Burger',
        icon:<LiaHamburgerSolid className="w-[50px] h-[50px]"/>
    }
]

export default CategoryObj