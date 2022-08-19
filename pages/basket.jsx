import Link from "next/link";
import Layout from "../Components/Layout/Layout";
import BasketCard from "../Module/BasketCard/BasketCard";
import BasketList from './../Components/BasketList/BasketList';
import s from '../styles/basket.module.scss'
export default function Basket() {

    return(

        <Layout title={'Корзина'}>
           <div className="container">
            <div className={s.crumb}>
                <Link href={'/'}>
                    <a>Главная</a>
                </Link>
            <p>/</p>
            <Link href={'/basket'}>
               <a> Корзна </a>
            </Link>
           </div>
                <BasketList/>
            </div>     
         </Layout>   
    )
}