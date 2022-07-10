import Layout from "../Components/Layout/Layout";
import BasketCard from "../Module/BasketCard/BasketCard";
import BasketList from './../Components/BasketList/BasketList';

export default function Basket() {

    return(

        <Layout title={'Корзина'}>
                <BasketList/>
         </Layout>   
    )
}