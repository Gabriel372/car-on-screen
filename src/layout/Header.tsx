import Link from "next/link";


function Header() {
    

return (<header className='bg-red-700 text-white w-full'>
<nav className=" flex justify-around w-full h-16 items-center ">
<Link href='/'>Home</Link>
<Link href='/CarShow'>CAR SHOW</Link>
</nav>

</header>



)

}

export default Header ;


