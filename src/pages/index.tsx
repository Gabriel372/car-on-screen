import { Inter } from "next/font/google";
import SelectList from "@/components/SelectList";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

return (
    <main className={` bg-gray-100 `}>
<SelectList/>
    </main>
  )
}
