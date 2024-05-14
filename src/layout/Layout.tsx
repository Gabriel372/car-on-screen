import Header from "@/layout/Header";

function Layout({ children }:any) {

return (<>
<main className={``}>
<Header/>
{children}
</main>
 </>
  )
}

export default Layout ;
