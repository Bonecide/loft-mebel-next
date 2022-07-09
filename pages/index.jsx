
import Hits from '../Components/Hits/Hits';
import Slider from '../Components/Slider/Slider';
import HitsCard from '../Module/HitsCard/HitsCard';
import Outlet from './../Components/Outlet/Outlet';

export default function MainPage() {

    return(
        <Outlet>
           <Slider/>
           <Hits/>
        </Outlet>
    )
}