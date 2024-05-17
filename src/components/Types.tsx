import { ReactNode } from "react"

export type  Props = {
    children:ReactNode
}
export type Tcar = {
    name:string
    year:string
    price:string
power:string
fuel:string
doors:string
transmission:string
steering:string
hasEletricWindow:string
hasAirConditioned:string
isLiked:boolean
imgFront:string
imgBack:string
imgPanel:string
}
// export type TallList = Tcar[][]

export type TListCar = {
name:string
logo:string
list:Tcar[]
}

export type Tstate<T> = {
CarsFound: T;
setCarsFound: React.Dispatch<React.SetStateAction<T>>;
AllList:T
setAllList:React.Dispatch<React.SetStateAction<T>>; 
  CarSelected:T
setCarSelected:React.Dispatch<React.SetStateAction<T>>;
  InputValue: T;
  setInputValue: React.Dispatch<React.SetStateAction<T>>;
   ListSelected:T
setListSelected:React.Dispatch<React.SetStateAction<T>>; 
VolkwagenList:T
setVolkwagenList:React.Dispatch<React.SetStateAction<T>>; 
};
export type TstateAllList = Tstate<TListCar[]>;
export type TstateListSelected = Tstate<TListCar>;

export type TstateListCar = Tstate<TListCar>;
  export type TstateCarSelected = Tstate<Tcar>;
export type TstateCarsFound = Tstate<Tcar[]>;
// export type TstateAllList = Tstate<TListCar[]>;
// export type TallList = Tstate<TListCar[]>;
export type TstateInputValue = Tstate<string>;

// export type Tstate<T> = {
//   State: T;
//   setState: React.Dispatch<React.SetStateAction<T>>;
//   };




// export type TstateListSelected = {
//   ListSelected: TListCar;
//   setListSelected: React.Dispatch<React.SetStateAction<TListCar>>;
// };



// export type TstateCarsFound = {
//   CarsFound: Tcar[];
//   setCarsFound: React.Dispatch<React.SetStateAction<Tcar[]>>;
// };

// export type TallList = {
//   AllList: TListCar[];
// }
// export type TstateCarSelected = {
//   CarSelected: Tcar;
//   setCarSelected: React.Dispatch<React.SetStateAction<Tcar>>;
// };
// export type TstateInputValue = {
//   InputValue: string;
//   setInputValue: React.Dispatch<React.SetStateAction<string>>;
// };








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
  // export type TstateListSelected = {
  //   ListSelected: Tcar[];
  //   setListSelected: React.Dispatch<React.SetStateAction<Tcar[]>>;
  // };



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




