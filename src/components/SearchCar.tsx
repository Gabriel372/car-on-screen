import { IoSearch } from "react-icons/io5";
import {  useState,useEffect,useContext } from "react";
import { MyContext } from "@/context/MyContext";
import { TstateAllList,TstateCarSelected, TstateCarsFound, TstateInputValue, } from "./Types";
import { IoMdClose } from "react-icons/io";

function SearchCar() {
    const [MsgAlert,setMsgAlert] = useState<boolean>(false);
    const { InputValue,setCarSelected,CarSelected,setCarsFound,CarsFound,setInputValue } = useContext(MyContext) as TstateCarSelected & TstateCarsFound & TstateInputValue
    const { AllList} = useContext(MyContext) as TstateAllList ;

useEffect(()=>{
if (MsgAlert) {
setTimeout(()=>setMsgAlert(false),7000) }
},[MsgAlert])

function HandleSubmit(e:React.FormEvent<HTMLFormElement>) {
e.preventDefault();    
if (!InputValue) {
setMsgAlert(true)
}
else if (InputValue !== '') {
 setInputValue('')   
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
const FiltredList = UniqueList.flat().filter(item =>
item.name.toLowerCase().includes(InputValue.toLowerCase()));
    
const combined = Array.from(new Set(FiltredList.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
setCarsFound(combined);  
}

return (<label className="search__label">
 <p className="search_p">Busque o carro pelo modelo</p>   
<form className="search" onSubmit={HandleSubmit}>
    <input type="text" className="search__input" placeholder="Modelo" value={InputValue} 
    onChange={HandleChange}/>
{InputValue !== '' ? 
<button className="search__buttonclose">
<IoMdClose />
</button>
:
    <button className="search__button">
    <IoSearch className="search__icon "/>
    </button>
}




{MsgAlert && <p className="search_alert">*Preencha o campo</p>}    
</form>
</label>

)    
}

export default SearchCar
