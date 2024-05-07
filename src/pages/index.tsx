import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import BrandList from "@/components/SelectList";


const inter = Inter({ subsets: ["latin"] });

// export type Tcar = {
//   name:string
//   year:string
//   img:string
//   }

export default function Home() {
  const [CarList,setCarList] = useState<any>([])

const Volks = [
{name:'gol',year:'1995',
img:'https://blog.olhonocarro.com.br/wp-content/uploads/2023/06/vw-gol-g2-azul-traseira.jpg' },
{name:'parati',year:'1996',
img:'https://image1.mobiauto.com.br/images/api/images/v1.0/280422120/transform/fl_progressive,f_webp,q_70,w_592' }
]

const Fiat = [
  {name:'palio',year:'1997',
  img:'https://image1.mobiauto.com.br/images/api/images/v1.0/280422120/transform/fl_progressive,f_webp,q_70,w_592' },
  {name:'palio weeked',year:'1998',
  img:'https://blog.olhonocarro.com.br/wp-content/uploads/2023/06/vw-gol-g2-azul-traseira.jpg' }
  ]




//FAZER PROTOTIPO BASICO DE FUNCIONAMENTO

//CRIAR COMP MARKS COM OPTIONS

//CADA OPTION ABRIRA A LISTA DE CARROS

//CRIAR CONTEUDO

//SALVAR URL DE IMG

//===

//AO CLICAR NA MARCA SET NO ARRAY CLICADO

//ARRAY CLICADO NAVEGA PARA CARLIST COM O ARRAY

//A CROD DO SCROLL SERA VERMELHO


const Img = `https://blog.olhonocarro.com.br/wp-content/uploads/2023/06/vw-gol-g2-azul-traseira.jpg`
 
const Img2 = `https://image1.mobiauto.com.br/images/api/images/v1.0/280422120/transform/fl_progressive,f_webp,q_70,w_592`




return (
    <main className={` bg-gray-100 min-h-[100vh]`}>
<BrandList/>

{/* <button onClick={()=>setCarList(Volks) }>VOLKS</button>
<button onClick={()=>setCarList(Fiat) }>FIAT</button> */}

{/* <ul>
{CarList.map((item:any,index:any) =>(
<li key={index}>
<p>{item.name}</p>
<p>{item.year}</p>

<div className={` flex max-w-[400px]`}>
<Image className={`  rounded-md flex`} height={500} width={500}  
alt="img" src={item.img}/>
</div>

</li>

)
)}
</ul> */}


{/* <div className={` flex max-w-[400px]`}>
<Image className={`  rounded-md flex`} height={500} width={500}  
alt="img" src={`https://image1.mobiauto.com.br/images/api/images/v1.0/280422120/transform/fl_progressive,f_webp,q_70,w_592`}/>
</div> */}


{/* <div className={` flex max-w-[500px]`}>
<Image src={`https://blog.olhonocarro.com.br/wp-content/uploads/2023/06/vw-gol-g2-azul-traseira.jpg`}
alt="img" height={500}  width={500} 
className={``}  />
</div> */}









    </main>
  );
}
