
import  Head  from "next/head";
import Footer from "../../Module/Footer/Footer";
import Header from "../../Module/Header/Header";
import s from './Layout.module.scss'
export default function Layout({children,title , without , ...props}) {

    return(
     <>
        <Head>
            <title>
                Loft Мебель | {title} 
            </title>
        </Head>

        <div {...props}> 
            
                <Header without ={without}/>
                
                <main >
                    {children}
                </main>
              
                <Footer/>
        
        </div>  
      </>
    )
}