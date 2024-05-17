import React, { useRef, useState } from 'react';
import {  Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Tcar, TstateCarSelected } from './Types';
import { useContext } from 'react';
import { MyContext } from '@/context/MyContext';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


export default function Carousel( ) {
    const {CarSelected } = useContext(MyContext) as  TstateCarSelected  
    const ImgList = [CarSelected?.imgFront,CarSelected?.imgBack,CarSelected?.imgPanel]
    const [thumbsSwiper, setThumbsSwiper] = useState<any >({})
const ResponsvForCarousel = `max-w-[50rem] max-h-[24rem] w-full w-screen800:max-h-[23rem] w-screen750:max-h-[22rem] w-screen700:max-h-[21rem] w-screen650:max-h-[19rem] w-screen600:max-h-[18.5rem] w-screen550:max-h-[15rem] w-screen500:max-h-[14.5rem] w-screen450:max-h-[13rem] w-screen400:max-h-[12rem]  w-screen350:max-h-[10rem] w-screen300:max-h-[8.5rem] `

return (
    <section className=''>
      <Swiper
spaceBetween={10}
pagination={{clickable:true}}
navigation
        cssMode={true}
          mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        loop={true}
        className={` ${ResponsvForCarousel}`}

>
{ImgList.map((item,index)=>(
      <SwiperSlide key={index} className=' '>
     <div className={`  flex max-h-[30rem] overflow-hidden justify-center items-center `}>
           <Image alt="" height={1000} width={1000} className={`max-w-[50rem] relative top-[-2rem] w-full w-screen550:top-[-1rem]`}  src={item} />
    </div>

      </SwiperSlide>
))}
      </Swiper>

    </section>
  )
}
