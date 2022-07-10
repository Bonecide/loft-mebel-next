
import Hits from '../Components/Hits/Hits';
import Slider from '../Components/Slider/Slider';
import HitsCard from '../Module/HitsCard/HitsCard';
import Layout from './../Components/Layout/Layout';

export default function MainPage() {

    return(
        <Layout title={'Главная'}>
           <Slider/>
           <Hits/>
        </Layout>
    )
}