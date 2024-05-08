import { TstateCarSelected } from "@/components/Types";
import { useContext,useState } from "react";
import { MyContext } from "@/context/MyContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importar estilos básicos do Swiper (essencial)
import 'swiper/css/navigation'; // Importar estilos de navegação (opcional)
import 'swiper/css/pagination';
import { Inder } from "next/font/google";

function CarShow() {
    const {CarSelected } = useContext(MyContext) as  TstateCarSelected
    const ImgList = [CarSelected?.imgFront,CarSelected?.imgBack,CarSelected?.imgPanel]
    const [ImgSelected,setImgSelected] = useState<string>('')

return (<section className={ ``}>
{CarSelected && <>
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
    className={` max-w-[150px] mr-2 rounded-md border-gray-200 border cursor-pointer hover:border-gray-800`}  src={item}
    onClick={()=> setImgSelected(item)}/>

))}
</div>

    {/* <Image alt="" height={900} width={900} className={` max-w-[150px]`}  src={CarSelected.imgFront}
    onClick={()=> setImgSelected(CarSelected.imgFront)}/>
    <Image alt="" height={900} width={900} className={` max-w-[150px]`}  src={CarSelected.imgBack}
    onClick={()=> setImgSelected(CarSelected.imgBack)}/>
    <Image alt="" height={900} width={900} className={` max-w-[150px]`}  src={CarSelected.imgPanel}
    onClick={()=> setImgSelected(CarSelected.imgPanel)}/> */}




{CarSelected.name}
</>}

</section>)

}

export default CarShow ;
