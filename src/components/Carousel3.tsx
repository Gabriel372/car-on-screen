import Slider from "react-slick";
import { nextConfig } from "../../next.config.mjs";
import { useState, useEffect,useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from 'react';
import { MyContext } from '@/context/MyContext';
import { TstateCarSelected } from './Types';
import Image from 'next/image';

function Carousel3() {
    const {CarSelected } = useContext(MyContext) as  TstateCarSelected  
    const ImgList = [CarSelected?.imgFront,CarSelected?.imgBack,CarSelected?.imgPanel]

    function Arrow(props:any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className} 
            style={{
              ...style,
              display: "block", 
              background: "red", 
              position: "absolute", 
              zIndex: 100, 
            }}
            onClick={onClick}
          />
        );
      }

      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
      }

return (  <section className="  flex w-full justify-center">
    <div className="container">
      <Slider {...settings}  >

      {ImgList.map((item,index)=>(
     <div >
        <div className={`  flex max-h-[30rem] overflow-hidden justify-center items-center `}>
     <Image alt="" height={1000} width={1000} className={`max-w-[50rem]  w-full`}  src={item}
     />
        </div>
    </div>
))}
    
      </Slider>
    </div>

</section>

)    
}

export default Carousel3