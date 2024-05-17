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
<Link href='/'>Home</Link>
<SearchCar/>
{/* <Link href='/CarShow'>CAR SHOW</Link> */}
</nav>

</header>



)

}

export default Header ;


