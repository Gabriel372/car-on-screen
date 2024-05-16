import Link from "next/link";
import SearchCar from "@/components/SearchCar";

function Header() {
    

return (<header className='bg-red-700 text-white w-full'>
<nav className=" flex w-full h-[4.5rem]  px-3 max-w-[72rem] m-auto justify-between items-center pb-2">
<Link href='/'>Home</Link>
<SearchCar/>
{/* <Link href='/CarShow'>CAR SHOW</Link> */}
</nav>

</header>



)

}

export default Header ;


