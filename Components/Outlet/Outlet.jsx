import Footer from "../../Module/Footer/Footer";
import Header from "../../Module/Header/Header";
import s from './Outlet.module.scss'
export default function Outlet({children , ...props}) {

    return(
      <div {...props}> 
        <div className={s.Wrap}>
            <Header/>
            <main >
                {children}
            </main>
        </div>    
            <Footer/>
       
      </div>  

    )
}