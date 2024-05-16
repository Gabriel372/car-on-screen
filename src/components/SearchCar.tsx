import { IoSearch } from "react-icons/io5";
import {  createContext,useState,useEffect,useContext } from "react";
import { MyContext } from "@/context/MyContext";
import { TallList,Tcar,TstateCarSelected, TstateCarsFound, TstateInputValue } from "./Types";

function SearchCar() {
    const [MsgAlert,setMsgAlert] = useState<boolean>(false)
    const { AllList, InputValue,setCarSelected,CarSelected,setCarsFound,CarsFound,setInputValue } = useContext(MyContext) as TallList & TstateCarSelected & TstateCarsFound & TstateInputValue


useEffect(()=>{
if (MsgAlert) {
setTimeout(()=>setMsgAlert(false),7000) }
},[MsgAlert])

function HandleSubmit(e:React.FormEvent<HTMLFormElement>) {
e.preventDefault();    
if (!InputValue) {
setMsgAlert(true)
}
else{
console.log(CarsFound);  
}
}

function HandleChange(e:React.ChangeEvent<HTMLInputElement>) {
setInputValue(e.target.value)
if (MsgAlert) {
    setMsgAlert(false)
}
else if (e.target.value === '') {
setCarsFound([])    
}    
else if (InputValue.length >= 1) {
FillCarsFound()
}
}

function FillCarsFound() {
  const UniqueList = AllList.map(listObj => listObj.list);
const filtered = UniqueList.flat().filter(item =>
item.name.toLowerCase().includes(InputValue.toLowerCase()));
    
const combined = Array.from(new Set(filtered.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
setCarsFound(combined);  
}

// const List1= AllList[0].list ;
// const List2= AllList[1].list ;
// const Filtred1:any = List1.filter((item:any) =>{
//   return  item.name.toLowerCase().includes(InputValue.toLowerCase()) });
//   const Filtred2:any = List2.filter((item:any) =>{
//     return  item.name.toLowerCase().includes(InputValue.toLowerCase()) }); 

//     let combined = [...Filtred1, ...Filtred2];
// combined = Array.from(new Set(combined.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
//     setCarsFound(combined);
// const Filtred2:any = AllList.map((item)=>{
// return item.list.filter((car) =>{
// return  car.name.toLowerCase().includes(InputValue.toLowerCase()) });
// }) 




return (<label>
 <p className="search_p">Busque o carro pelo modelo</p>   
<form className="search" onSubmit={HandleSubmit}>
    <input type="text" className="search__input" placeholder="Modelo" value={InputValue} 
    onChange={HandleChange}/>
    <button className="search__button">
    <IoSearch className="search__icon "/>
    </button>
{MsgAlert && <p className="search_alert">*Preencha o campo</p>}    
</form>

{/* {InputIsActive ? 

<form className="search">
    <input type="text" className="search__input" placeholder="Type your text"/>
    <button className="search__button">
    <IoSearch className="search__icon "/>
    </button>
</form>
:

<label className={` h-[2rem] bg-red-300 text-white`}
onClick={()=> setInputIsActive(true)}>Modelo do carro</label>

} */}

</label>

)    
}

export default SearchCar
