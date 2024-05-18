import { TstateCarSelected } from "@/components/Types";
import { useContext,useEffect } from "react";
import { MyContext } from "@/context/MyContext";
import { RxCalendar } from "react-icons/rx";
import { BsFuelPump } from "react-icons/bs";
import { TfiMoney } from "react-icons/tfi";
import { GiCarDoor } from "react-icons/gi";
import { TbManualGearbox } from "react-icons/tb";
import { TbSteeringWheel } from "react-icons/tb";
import { FaWhiskeyGlass } from "react-icons/fa6";
import { IoSnowOutline } from "react-icons/io5";
import { PiEngineBold } from "react-icons/pi";
import Carousel from "@/components/Carousel";
import { motion } from 'framer-motion';
import { pageVariants,pageTransition } from "../components/AnimationMotion";
import ButtonLike from "@/components/ButtonLike";

function CarShow() {
    const {CarSelected,setCarSelected } = useContext(MyContext) as  TstateCarSelected

useEffect(()=>{
if (!CarSelected) {
GetCarSaved()
}
},[])

function GetCarSaved() {
    if (typeof window !== 'undefined') {
      const CarStoraged = sessionStorage.getItem('SavedCar');
      setCarSelected(CarStoraged ? JSON.parse(CarStoraged) : '');
    }
  }

return (<motion.section className={ ``}   
initial="initial" animate="in" exit="out"  variants={pageVariants} transition={pageTransition}>

{CarSelected && <>
<Carousel/>
<h3 className={` text-center text-2xl my-4 text-red-800 font-semibold flex max-w-[25rem] m-auto justify-between px-2`}>
{CarSelected.name}
<ButtonLike item={CarSelected}/></h3>

<div className={` flex flex-col items-center`}>
<h3 className={` text-[1.5rem] mb-3 text-center`}>Características</h3>

<ul className={`pl-2 mr-1 flex flex-col w-screen450:w-full`}>
<li className={` text-md text-gray-600 flex items-center mb-3 `}>
<RxCalendar className={` mr-1 text-2xl`}/>Ano: <p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.year} </p>
</li>

<li className={` text-md text-gray-600 flex items-center mb-3 w-screen300:flex-col w-screen300:items-start`}>
<span className={` flex flex-row`}>
<TfiMoney className={` mr-1 text-2xl`}/>Preço da tabela fipe: 
</span>
<p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.price} </p>

</li>

<li className={` text-md text-gray-600 flex items-center mb-3`}><PiEngineBold className={` mr-1 text-2xl`}/>Motor: 
<p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.power} </p>
</li>

<li className={` text-md text-gray-600 flex items-center mb-3 flex-wrap`}><BsFuelPump className={` mr-1 text-2xl `}/>Combustivel: 
<p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.fuel} </p>
</li>

<li className={` text-md text-gray-600 flex items-center mb-3`}><GiCarDoor  className={` mr-1 text-2xl `}/>Quantidade de portas: 
<p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.doors} </p>
</li>

<li className={` text-md text-gray-600 flex  w-screen400:flex-col items-center w-screen400:items-start mb-3`}>
<p className={` flex flex-row`}><TbManualGearbox  className={` mr-1 text-2xl `}/>Cãmbio:</p>    
<p className={` text-xl ml-1 font-semibold text-black w-screen350:text-[1rem]`}> {CarSelected.transmission} </p>
</li>

<li className={` text-md text-gray-600 flex items-center mb-3`}><TbSteeringWheel className={` mr-1 text-2xl `}/>Direção: 
<p className={` text-xl ml-1 font-semibold text-black `}> {CarSelected.steering} </p>
</li>

{CarSelected.hasEletricWindow !== '' || 'não' ?
(<li className={` text-md text-gray-600 flex items-center mb-3 w-screen450:flex-wrap w-full w-screen450:items-start`}>
<span className={` flex flex-row`}>
  <FaWhiskeyGlass className={` mr-1 text-2xl `}/>Possui Vidros eletricos? 
  </span>  

<p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.hasEletricWindow} </p>
</li>):'' }

{CarSelected.hasAirConditioned !== '' || 'não' ?
(<li className={` text-md text-gray-600 flex items-center mb-3`}><IoSnowOutline className={` mr-1 text-2xl `}/>Possui Ar condicionado ? 
<p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.hasAirConditioned} </p>
</li>):'' }

</ul>

</div>

</>}
</motion.section>)

}

export default CarShow ;
