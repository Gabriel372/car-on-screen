import { useContext, useState } from "react"
import { MyContext } from "@/context/MyContext";
import { TListCar, TallList, Tcar, TstateCarSelected, TstateListSelected } from "./Types";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


function SelectList() {
    const { AllList, setCarSelected } = useContext(MyContext) as TallList & TstateCarSelected
    const [ListSelected, setListSelected] = useState<TListCar>(AllList[0])

    return (<section className={` overflow-hidden`}>
        <div className={` max-w-6xl m-auto`}>
            <h3 className={` text-center font-semibold text-2xl my-3 w-screen500:text-[1.1rem]`}>Selecione a marca para visualizar os carros</h3>
            <div className=" flex justify-around flex-wrap pb-2">
                {AllList.map((item, index) => (
                    <button key={index} onClick={() => setListSelected(AllList[index])}
                        className={`transition-all duration-300 transform hover:scale-110 flex flex-col items-center`}>

                        <div className={` flex max-h-[5rem] h-full items-center`}>
                            <Image alt="" height={500} width={500} className={` max-w-[5rem] w-screen800:max-w-[3.5rem] w-screen500:max-w-[2rem]`} src={item.logo} />
                        </div>
                        <b className={` text-xl w-screen800:text-md w-screen500:text-sm w-screen350:text-[0.7rem]`}>{item.name}</b>
                    </button>
                ))
                }
            </div>

            <ul className={` flex flex-wrap gap-2 justify-center mt-4 box-content `}>
                {ListSelected.list.map((item: Tcar, index: number) => (
                    <li key={index} className={` max-w-64 border border-gray-200 rounded-md overflow-hidden bg-white cursor-pointer`}>
                        <Link href={`/CarShow`} onClick={() => setCarSelected(item)}
                            className={` flex flex-col h-full`}>
                            <div className={` overflow-hidden max-h-[8rem] flex items-center`}>
                                <div>
                                    <Image height={500} width={500} src={item.imgFront} alt="img"
                                        className={`transition-all duration-300 transform hover:scale-110`} />
                                </div>
                            </div>

                            <div className={` mx-2 mb-2`}>
                                <p className={` flex flex-col text-sm text-gray-600`}>
                                    <b className={` text-xl text-red-900`}>{item.name} </b> </p>
                                <p className={` text-sm text-gray-600`}>Ano:
                                    <b className={`text-black text-[1.1rem]`}> {item.year} </b> </p>
                                <p className={` text-sm text-gray-600 mb-1`}>Preço da tabela fipe R$:
                                    <b className={`text-black`}> {item.price}<span className={` font-light`}> </span>
                                    </b>
                                </p>
 <Link className={`  text-red-800 rounded-md p-1 flex max-w-[7rem] items-center hover:bg-red-700 mt-2 border border-red-800 hover:text-white transition`}
 href={`/CarShow`} onClick={() => setCarSelected(item)}>Saiba mais<IoIosArrowForward className={` ml-1 text-xl`}/></Link>
         
                            </div>

                        </Link>

                    </li>
                ))
                }
            </ul>

        </div>

    </section>)
}

export default SelectList;
