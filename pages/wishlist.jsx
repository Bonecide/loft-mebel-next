import Layout from "../Components/Layout/Layout";
import WishlistCards from './../Components/wishlist/WishlistCards';

export default function WishList() {
    

    return(
        <Layout title={'Список Желаемого'}>
           <WishlistCards/>
        </Layout>
    )
}