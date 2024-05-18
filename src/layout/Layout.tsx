import Header from "@/layout/Header";
import Footer from "./Footer";

function Layout({ children }:any) {

return (<>
<main className={``}>
<Header/>
{children}
<Footer/>
</main>
 </>
  )
}

export default Layout ;
