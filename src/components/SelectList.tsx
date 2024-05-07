import { useContext, useState } from "react"
import { MyContext } from "@/context/MyContext";
import { TListCar, TallList, Tcar, TstateCarSelected, TstateListSelected } from "./Types";
import Image from "next/image";
import Link from "next/link";

function SelectList() {
const {AllList,setCarSelected } = useContext(MyContext) as TallList & TstateCarSelected
const [ListSelected,setListSelected] = useState<TListCar>(AllList[0])

//AO CLICAR EM UM DOS CARROS..

//CLICK NO CARRO DEFINE QUE SERA EXIBITDO

//CRIA STATE IN CONTEXT: CARSELECTED

//NAVEGA PARA CAR SHOW E EXIBE TUDO SOBRE

//CAR SHOW TERA CARROCEL

 return (<section className={` overflow-hidden`}>
<h3 className={` text-center font-semibold text-2xl my-3`}>Selecione a marca para visualizar os carros</h3>

<div className=" flex justify-around flex-wrap">

{/* <div className={` flex justify-around flex-wrap`}> */}
{AllList.map((item,index)=>(
 <button onClick={()=> setListSelected(AllList[index] )}
 className={`transition-all duration-300 transform hover:scale-110`}>

<div className={` flex max-h-[5rem] h-full items-center mb-2`}>
 <Image alt="" height={500} width={500} className={` max-w-24 `}  src={item.logo}/>
</div>

 <b className={` text-xl `}>{item.name}</b>

 </button>
))
}
</div>
{/* <div className={``}>
<Image alt="" height={500} width={500} className={` max-w-32`}  src={`https://i.pinimg.com/originals/89/12/26/891226b572e9e2f1f69d3ff380579838.png` }/>
</div> */}

{/* <button onClick={()=> console.log(ListSelected)}>CLICk2</button> */}
{/* </div> */}

<ul className={` flex flex-wrap gap-2 justify-center mt-4`}>
{ListSelected.list.map((item:Tcar,index:number)=>(

<li key={index} className={` max-w-64 border border-gray-200 rounded-md overflow-hidden bg-white cursor-pointer`}>
<Link href={`/CarShow`} onClick={()=> setCarSelected(item)}>
<div className={` overflow-hidden`}>
<Image height={500} width={500} src={item.imgFront} alt="img"
className={`transition-all duration-300 transform hover:scale-110`}/>
</div>

<b className={` text-xl`}>{item.name} </b>
<p>Ano: {item.year} </p>
<p>Consumo: {item.consum} </p>
</Link>




</li>
))
}
</ul>

 </section>)   
}

export default SelectList ;
