import { useContext } from "react"
import { MyContext } from "@/context/MyContext";
import { TstateCarsFound,TstateCarSelected, TstateInputValue } from "./Types";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { Tcar } from "./Types";
import ButtonLike from "./ButtonLike";

function ShowFoundCar() {
    const { CarsFound,setCarSelected,InputValue } = useContext(MyContext) as TstateCarsFound & TstateCarSelected &TstateInputValue

    function SaveCarSelected(item:Tcar) {
        setCarSelected(item)  ;
        sessionStorage.setItem('SavedCar',JSON.stringify(item)) 
    }
     
return(
<section>
{CarsFound.length > 0 &&  
<>
    <h3 className={` text-center text-xl`}>Resultado:</h3>
<ul className={` flex flex-wrap gap-2 justify-center mt-4 box-content`}>
{CarsFound.map((item ,index)=>(
    <li key={index} className={` max-w-[23rem] border border-gray-200 rounded-md overflow-hidden bg-white cursor-pointer`}>
  <div className={` flex flex-col h-full`}>

  <div className={` overflow-hidden max-h-[12rem] flex items-center mb-2`}>
<div>
<Image height={500} width={500} src={item.imgFront} alt="img"
className={`transition-all duration-300 transform hover:scale-110`} />
</div>
</div>

<div className={` mx-2 mb-2`}>
 <p className={` flex flex-col text-sm text-gray-600`}>
 <b className={` text-xl text-red-900 flex w-full justify-between`}>{item.name} <ButtonLike item={item}/></b> </p>
 <p className={` text-sm text-gray-600`}>Ano:
  <b className={`text-black text-[1.1rem]`}> {item.year} </b> </p>
 <p className={` text-sm text-gray-600 mb-1`}>Preço da tabela fipe R$:
   <b className={`text-black`}> {item.price}<span className={` font-light`}> </span>
 </b>
 </p>
 <Link className={`  text-red-800 rounded-md p-1 flex w-[7.5rem] h-[2.1rem]  items-center hover:bg-red-700 mt-2 border border-red-800 hover:text-white transition flex-row`}
  onClick={() => SaveCarSelected(item)} href={`/CarShow`} >Saiba mais<IoIosArrowForward className={` ml-1 text-xl`}/></Link>
         
 </div>

 </div>

 </li>
))}
</ul>

</>}

{InputValue.length >= 3 && CarsFound.length === 0 &&  
(<p className={` text-center text-xl text-red-900 mt-6`}>Nenhum resultado encontrado</p>) }

</section>
)
}

export default ShowFoundCar
