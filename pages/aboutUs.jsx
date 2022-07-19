
import AboutShop from '../Components/AboutUs/AboutShop/AboutShop';
import Advantages from '../Components/AboutUs/advantages/Advantages';
import Econom from '../Components/AboutUs/Econom/Econom';
import OurPlus from '../Components/AboutUs/OurPlus/OurPlus';
import Profit from '../Components/AboutUs/Profit/Profit';
import Layout from './../Components/Layout/Layout';
export default function AboutUs() {

    return(
        <Layout without={true} title={'О Нас'}>
       
            <AboutShop/>
            <Profit/>
            <Advantages/>
            <OurPlus/>
            <Econom/>
        
         </Layout>
        
    )
}