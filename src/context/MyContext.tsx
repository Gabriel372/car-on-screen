import {  createContext,useState } from "react";
import { Props, TListCar } from "@/components/Types";
import { FiatList } from "@/data/FiatList";
import { VolkwagenList } from "@/data/VolkswagenList";
import { Tcar } from "@/components/Types";
import { ChevroletList } from "@/data/ChevroletList";
import { RenaultList } from "@/data/RenaultList";
import { HondaList } from "@/data/HondaList";
import { TstateCarSelected } from "@/components/Types";

export const MyContext = createContext({});

export function MyContextProvider({children}:Props) {  
  const AllList:TListCar[] = [VolkwagenList,FiatList,ChevroletList,RenaultList,HondaList];
  const [CarSelected,setCarSelected] = useState<Tcar>()
  const [CarsFound,setCarsFound] = useState<Tcar[]>([])
  const [InputValue,setInputValue] = useState<string>('')



return ( <MyContext.Provider value={{AllList,CarSelected,CarsFound,InputValue,setInputValue,setCarSelected,setCarsFound}}>
      {children}
    </MyContext.Provider>
  )

}
