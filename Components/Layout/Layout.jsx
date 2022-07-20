
import  Head  from "next/head";
import Footer from "../../Module/Footer/Footer";
import Header from "../../Module/Header/Header";
import s from './Layout.module.scss'
import MobileHeader from './../../Module/MobileHeader/MobileHeader';
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
                <MobileHeader/>
                <main >
                    {children}
                </main>
              
                <Footer/>
        
        </div>  
      </>
    )
}