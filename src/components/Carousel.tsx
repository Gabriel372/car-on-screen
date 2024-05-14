import React, { useRef, useState } from 'react';
import {  Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Tcar, TstateCarSelected } from './Types';
import { useContext } from 'react';
import { MyContext } from '@/context/MyContext';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
;
interface SwiperProps {
  direction?: 'horizontal' | 'vertical';
  loop?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  centeredSlides?: boolean;
  autoplay?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  scrollbar?: boolean;
}


export default function Carousel( ) {
    const {CarSelected } = useContext(MyContext) as  TstateCarSelected  
    const ImgList = [CarSelected?.imgFront,CarSelected?.imgBack,CarSelected?.imgPanel]
    const [thumbsSwiper, setThumbsSwiper] = useState<any >({})



  const pagination = {
    clickable: true,
    renderBullet: function ( index:number, className:any) {
        return `<span class="${className} w-[10rem]"><Image src=${ImgList[index]} style="width: 10rem;" height={900} width={900} /></span>`;

        // return `<span class="${className}"><img src="${ImgList[index]}" /></span>`;

    },
  };

  return (
    <>
      <Swiper
        style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff', 
          } as  React.CSSProperties  }
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
      >
{ImgList.map((item,index)=>(
      <SwiperSlide key={index}>
      <Image alt="" height={900} width={900} className={``}  src={item}/>
      </SwiperSlide>
))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
{ImgList.map((item,index)=>(
      <SwiperSlide key={index}>
      <Image alt="" height={900} width={900} className={``}  src={item}/>
      </SwiperSlide>
))}
      </Swiper>




    </>
  );
}
