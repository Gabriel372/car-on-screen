import { ReactNode } from "react"

export type  Props = {
    children:ReactNode
}
export type Tcar = {
    name:string
    year:string
consum:string
power:string
imgFront:string
imgBack:string
imgPanel:string
hasAirConditioned:boolean,
}
// export type TallList = Tcar[][]
export type TListCar = {
name:string
logo:string
list:Tcar[]
}
export type TallList = {
  AllList: TListCar[];
}
export type TstateCarSelected = {
  CarSelected: Tcar;
  setCarSelected: React.Dispatch<React.SetStateAction<Tcar>>;
};


// export type TallList = {
// Volkwagen:Tcar[]
// Fiat:Tcar[]
// }
//  export type TsllList = {
// Volkwagen:Tcar[]
// Fiat:Tcar[]
// }

// export type TstateAllList = {
//     AllList: Tcar[];
//     setAllList: React.Dispatch<React.SetStateAction<Tcar[]>>;
//   };
  export type TstateListSelected = {
    ListSelected: Tcar[];
    setListSelected: React.Dispatch<React.SetStateAction<Tcar[]>>;
  };



// export type TstateAllList= {
// // AllList:[Tcar[]]
// AllList:[Array<Tcar[]>] 
// setAllList:React.Dispatch<React.SetStateAction<Array<Tcar[]>>> 
// }
// export type TstateAllList = {
//     AllList: Tcar[][];
//     setAllList: React.Dispatch<React.SetStateAction<Tcar[][]>>;
//   };


// export type TstateAllList= {
//     AllList:string
//     setAllList:React.Dispatch<React.SetStateAction<string>> 
// }




