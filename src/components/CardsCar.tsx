import { TstateCarSelected, TstateListSelected } from "./Types"
import { MyContext } from "@/context/MyContext";
import { useContext } from "react"
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { Tcar } from "./Types";
import ButtonLike from "./ButtonLike";

function CardsCar() {
    const { ListSelected,setCarSelected } = useContext(MyContext) as TstateListSelected & TstateCarSelected

function SaveCarSelected(item:Tcar) {
    setCarSelected(item)  ;
    sessionStorage.setItem('SavedCar',JSON.stringify(item)) 
}

return ( <ul className={` flex flex-wrap gap-2 justify-center mt-4 box-content`}>

{ListSelected.list.map((item: Tcar, index: number) => (
<li key={index} className={`max-w-[23rem] border border-gray-200 rounded-md overflow-hidden bg-white`}>
 
  <div className={` flex flex-col h-full`}>

  <div className={` overflow-hidden max-h-[12rem] flex items-center mb-2`}>
<div>
<Image height={500} width={500} src={item.imgFront} alt="img"
className={`transition-all duration-300 transform hover:scale-110`} />
</div>
</div>

<div className={` mx-2 mb-2`}>
 <p className={` flex flex-col text-sm text-gray-600`}>
 <b className={` text-xl text-red-900 flex justify-between`}>{item.name} <ButtonLike item={item}/></b> </p>
 <p className={` text-sm text-gray-600`}>Ano:
  <b className={`text-black text-[1.1rem]`}> {item.year} </b> </p>
 <p className={` text-sm text-gray-600 mb-1`}>Preço da tabela fipe R$:
   <b className={`text-black`}> {item.price}<span className={` font-light`}> </span>
 </b>
 </p>
 <Link className={`  text-red-800 rounded-md p-1 flex w-[7.5rem] h-[2.1rem] items-center hover:bg-red-700 mt-2 border border-red-800 hover:text-white transition flex-row justify-center`}
  href={`/CarShow`} onClick={() => SaveCarSelected(item)}  >Saiba mais<IoIosArrowForward className={` ml-1 text-xl`}/></Link>
         
 </div>

 </div>

 </li>
))
 }
 </ul>)

}

export default CardsCar
