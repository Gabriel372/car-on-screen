import { TstateCarSelected } from "@/components/Types";
import { useContext,useState } from "react";
import { MyContext } from "@/context/MyContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importar estilos básicos do Swiper (essencial)
import 'swiper/css/navigation'; // Importar estilos de navegação (opcional)
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



function CarShow() {
    const {CarSelected } = useContext(MyContext) as  TstateCarSelected
    const ImgList = [CarSelected?.imgFront,CarSelected?.imgBack,CarSelected?.imgPanel]
    const [ImgSelected,setImgSelected] = useState<string>('')

return (<section className={ ``}>
{CarSelected && <>
<h3 className={` text-center text-2xl my-6 text-red-800 font-semibold`}>{CarSelected.name}</h3>

        <Swiper className={` max-w-[37.5rem] w-full `}
      slidesPerView={1} // Número de slides visíveis por vez
      spaceBetween={10} // Espaçamento entre slides (opcional)
      loop={true} // Habilitar loop infinito (opcional)
      navigation={true} // Habilitar setas de navegação (opcional)
      pagination={{ clickable: true }} // Habilitar pontos de paginação (opcional)
      
    >
{ImgList.map((item,index)=>(
      <SwiperSlide key={index}>
      <Image alt="" height={900} width={900} className={``}  src={ImgSelected ? ImgSelected : item}/>
      </SwiperSlide>
))}

    </Swiper>

<div className={` flex flex-row justify-center mt-6`}>
{ImgList.map((item,index)=>(
    <Image alt="" height={900} width={900} key={index}
    className={` max-w-[9.3rem] mr-2 rounded-md border-gray-200 border cursor-pointer hover:border-gray-800 w-screen450:max-w-[6rem] w-screen350:max-w-[4.5rem]`}  src={item}
    onClick={()=> setImgSelected(item)}/>

))}
</div>

    {/* <Image alt="" height={900} width={900} className={` max-w-[150px]`}  src={CarSelected.imgFront}
    onClick={()=> setImgSelected(CarSelected.imgFront)}/>
    <Image alt="" height={900} width={900} className={` max-w-[150px]`}  src={CarSelected.imgBack}
    onClick={()=> setImgSelected(CarSelected.imgBack)}/>
    <Image alt="" height={900} width={900} className={` max-w-[150px]`}  src={CarSelected.imgPanel}
    onClick={()=> setImgSelected(CarSelected.imgPanel)}/> */}
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
