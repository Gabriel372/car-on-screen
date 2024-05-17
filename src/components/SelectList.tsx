import { useContext, useState,useEffect } from "react"
import { MyContext } from "@/context/MyContext";
import { TListCar, TallList, Tcar, TstateCarSelected, TstateCarsFound, TstateInputValue, TstateListSelected } from "./Types";
import Image from "next/image";
import ShowFoundCar from "./ShowFoundCar";
import CardsCar from "./CardsCar";

function SelectList() {
    const { AllList, setCarSelected,CarSelected,CarsFound,InputValue,setListSelected,setInputValue } = useContext(MyContext) as TallList & TstateCarSelected & TstateCarsFound & TstateInputValue & TstateListSelected
const [NameClicked, setNameClicked] = useState<string>('Volkswagen')

useEffect(()=>{
if (InputValue !== '' && NameClicked !== '') {
setNameClicked('')  
}
},[InputValue,NameClicked])



function ClickSelect(index:number,item:TListCar)   {
    setListSelected(AllList[index]);
    setNameClicked(item.name)
if (InputValue !== '') {
setInputValue('')
}
}
return (<section className={` overflow-hidden px-1 pb-2 min-h-[95vh]`}>
<div className={` max-w-6xl m-auto`}>
 <h3 className={` text-center font-semibold text-2xl my-3 w-screen500:text-[1.1rem]`}>Selecione a marca para visualizar os carros</h3>
 
 <div className=" flex justify-around flex-wrap pb-2 ml-1">
{AllList.map((item, index) => (
<button key={index} onClick={() => ClickSelect(index,item)}
 className={`transition-all duration-300 transform hover:scale-110 flex flex-col items-center border rounded-md p-2 hover:shadow-2xl hover:bg-white
 ${item.name === NameClicked ? ' border-black bg-white shadow-2xl scale-110 ' : ''}`}>

<div className={` flex h-full items-center max-w-[5rem] w-screen800:max-w-[3.5rem] w-screen500:max-w-[2rem] `}>
 <Image alt="" height={500} width={500} className={` `} src={item.logo} />
 </div>
<b className={` text-xl w-screen800:text-md w-screen500:text-sm w-screen350:text-[0.7rem]`}>{item.name}</b>
</button>
))
 }
 </div>

{InputValue ? 
<ShowFoundCar/>
: 
  <CardsCar/>
}

 </div>

</section>)
}

export default SelectList ;
