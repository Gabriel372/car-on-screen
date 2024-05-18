import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {

return (<footer className='bg-red-700 text-white w-full flex justify-center'>

<nav className=" flex h-[4rem] items-center flex-wrap px-1">
<p>Developed by: Gabriel Brandão</p>
<Link href='https://www.linkedin.com/in/gabriel-brand%C3%A3o-42174223a' className={` text-2xl ml-1 text-slate-100 hover:text-white`}>
<FaLinkedin />
</Link>

<Link href='https://github.com/Gabriel372' className={`text-2xl ml-1 text-slate-100 hover:text-white`}>
<FaGithub />
</Link>

</nav>

</footer>
)
}

export default Footer ;