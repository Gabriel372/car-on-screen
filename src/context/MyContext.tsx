import {  createContext,useState } from "react";
import { Props, TListCar } from "@/components/Types";
import { FiatList } from "@/data/FiatList";
import { VolkwagenList } from "@/data/VolkswagenList";
import { Tcar } from "@/components/Types";
import { ChevroletList } from "@/data/ChevroletList";
import { RenaultList } from "@/data/RenaultList";
import { HondaList } from "@/data/HondaList";

export const MyContext = createContext({});

export function MyContextProvider({children}:Props) {  
  const [AllList,setAllList] = useState<TListCar[]>([VolkwagenList,FiatList,ChevroletList,RenaultList,HondaList])
  const [CarSelected,setCarSelected] = useState<Tcar>()
  const [CarsFound,setCarsFound] = useState<Tcar[]>([])
  const [InputValue,setInputValue] = useState<string>('')
  const [ListSelected, setListSelected] = useState<TListCar>(AllList[0])

return ( <MyContext.Provider value={{AllList,CarSelected,CarsFound,InputValue,ListSelected,
setListSelected,setInputValue,setCarSelected,setCarsFound,setAllList}}>
      {children}
    </MyContext.Provider>
  )

}
