import Link from "next/link";
import SearchCar from "@/components/SearchCar";
import { useContext,useEffect} from "react";
import { useRouter } from 'next/router';
import { MyContext } from "@/context/MyContext";
import { TstateInputValue } from "@/components/Types";

function Header() {
    const { InputValue } = useContext(MyContext) as TstateInputValue
    const router = useRouter();

useEffect(()=>{
if (router.pathname === '/CarShow' && InputValue !== '') {
router.push('/')        }
},[InputValue])   

return (<header className='bg-red-700 text-white w-full'>

<nav className=" flex w-full h-[4.5rem]  px-3 max-w-[72rem] m-auto justify-between items-center pb-2 overflow-hidden w-screen350:pl-1 w-screen350:pr-0">
<Link href='/' className={` max-w-[4.5rem] flex w-full flex-col w-screen300:max-w-[4rem]`}>
<h3 className={` text-[2rem] font-bold text-black relative top-3  w-screen300:text-[1.6rem]`}>Best</h3>
<h3 className={` text-[1.2rem] font-bold text-white text-right relative bottom-3 w-screen300:text-[1rem] w-screen300:right-2 w-screen300:bottom-1`}>Car</h3>
</Link>
<SearchCar/>
</nav>

</header>
)
}

export default Header ;


