import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/Layout";
import { MyContextProvider } from "@/context/MyContext";
import '../styles/Form.css'
import '../styles/ScrollAnimation.css'

export default function App({ Component, pageProps }: AppProps) {
 
 return (<MyContextProvider>
 <Layout>
<Component {...pageProps} />
</Layout>
</MyContextProvider>
) 
}
