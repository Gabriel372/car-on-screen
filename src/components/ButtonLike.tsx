import { FaRegHeart,FaHeart  } from "react-icons/fa";
import { TlikeCar, Tcar,TstateAllList,TstateListSelected } from "./Types";
import { useContext } from "react";
import { MyContext } from "@/context/MyContext";

function ButtonLike({ item }: TlikeCar) {
    const { AllList, setAllList } = useContext(MyContext) as TstateAllList;
    const { ListSelected, setListSelected } = useContext(MyContext) as TstateListSelected;

function ToggleItem(item:Tcar ) {
  item.isLiked = !item.isLiked;
let index = ListSelected.list.findIndex( car => car.name === item.name) ;
let NewListSelected = {...ListSelected} ;
NewListSelected.list[index] = item ;
setListSelected(NewListSelected);
UpdateAllList()
}

function UpdateAllList() {
  const NewAllList = AllList.map(list => list.name === ListSelected.name ? ListSelected : list);
  setAllList(NewAllList);
}

return (<button onClick={()=> ToggleItem(item)} 
className={`focus:outline-none transition-transform duration-300 ease-in-out transform ${
  item.isLiked ? 'text-red-700 scale-110' : 'text-gray-400 scale-100'
}`}>
{item.isLiked ? <FaHeart className={` `}/>
 : <FaRegHeart className={` hover:text-gray-500`}/>  }  
</button>
)}

export default ButtonLike ;