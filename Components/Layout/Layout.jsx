
import  Head  from "next/head";
import Footer from "../../Module/Footer/Footer";
import Header from "../../Module/Header/Header";
import s from './Layout.module.scss'
export default function Layout({children,title , ...props}) {

    return(
     <>
        <Head>
            <title>
                Loft Мебель | {title} 
            </title>
        </Head>

        <div {...props}> 
            <div className={s.Wrap}>
                <Header/>
                <main >
                    {children}
                </main>
            </div>    
                <Footer/>
        
        </div>  
      </>
    )
}