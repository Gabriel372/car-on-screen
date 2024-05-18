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
export type TstateInputValue = Tstate<string>;
export type TlikeCar = {
  item: Tcar;
}
