import Link from "next/link";


function Header() {
    

return (<header className='bg-red-700 text-white w-full'>
<nav className=" flex w-full h-16 items-center pl-3">
<Link href='/'>Home</Link>
{/* <Link href='/CarShow'>CAR SHOW</Link> */}
</nav>

</header>



)

}

export default Header ;


