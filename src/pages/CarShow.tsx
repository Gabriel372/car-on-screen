import { TstateCarSelected } from "@/components/Types";
import { useContext,useState } from "react";
import { MyContext } from "@/context/MyContext";
import Image from "next/image";
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Inder } from "next/font/google";
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

function CarShow() {
    const {CarSelected } = useContext(MyContext) as  TstateCarSelected
    const ImgList = [CarSelected?.imgFront,CarSelected?.imgBack,CarSelected?.imgPanel]
    const [ImgSelected,setImgSelected] = useState<string>('')

return (<section className={ ``}>
{CarSelected && <>
<Carousel/>
<h3 className={` text-center text-2xl my-6 text-red-800 font-semibold`}>{CarSelected.name}</h3>

<div className={` flex flex-col items-center`}>
<h3 className={` text-[1.5rem] my-3`}>Características</h3>

<ul>
<li className={` text-md text-gray-600 flex items-center mb-3`}>
<RxCalendar className={` mr-1 text-2xl`}/>Ano: <p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.year} </p>
</li>

<li className={` text-md text-gray-600 flex items-center mb-3`}>
<TfiMoney className={` mr-1 text-2xl`}/>Preço da tabela fipe: <p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.price} </p>
</li>

<li className={` text-md text-gray-600 flex items-center mb-3`}><PiEngineBold className={` mr-1 text-2xl`}/>Motor: 
<p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.power} </p>
</li>

<li className={` text-md text-gray-600 flex items-center mb-3`}><BsFuelPump className={` mr-1 text-2xl `}/>Combustivel: 
<p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.fuel} </p>
</li>

<li className={` text-md text-gray-600 flex items-center mb-3`}><GiCarDoor  className={` mr-1 text-2xl `}/>Quantidade de portas: 
<p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.doors} </p>
</li>

<li className={` text-md text-gray-600 flex  w-screen350:flex-col items-center w-screen350:items-start mb-3`}>
<p className={` flex flex-row`}><TbManualGearbox  className={` mr-1 text-2xl `}/>Cãmbio:</p>    
<p className={` text-xl ml-1 font-semibold text-black w-screen350:text-[1rem]`}> {CarSelected.transmission} </p>
</li>

<li className={` text-md text-gray-600 flex items-center mb-3`}><TbSteeringWheel className={` mr-1 text-2xl `}/>Direção: 
<p className={` text-xl ml-1 font-semibold text-black `}> {CarSelected.steering} </p>
</li>

{CarSelected.hasEletricWindow !== '' || 'não' ?
(<li className={` text-md text-gray-600 flex items-center mb-3`}><FaWhiskeyGlass className={` mr-1 text-2xl `}/>Possui Vidros eletricos? 
<p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.hasEletricWindow} </p>
</li>):'' }

{CarSelected.hasAirConditioned !== '' || 'não' ?
(<li className={` text-md text-gray-600 flex items-center mb-3`}><IoSnowOutline className={` mr-1 text-2xl `}/>Possui Ar condicionado ? 
<p className={` text-xl ml-1 font-semibold text-black`}> {CarSelected.hasAirConditioned} </p>
</li>):'' }-

</ul>

</div>

</>}
</section>)

}

export default CarShow ;
