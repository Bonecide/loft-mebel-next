import HitsCard from '../../Module/HitsCard/HitsCard'
import s from './Hits.module.scss'
export default function Hits() {

    return(

        <div className={s.container}>
            <HitsCard/>
            <HitsCard/>
            <HitsCard/>
            <HitsCard/>
            <HitsCard/>
            <HitsCard/>
            <HitsCard/>
            <HitsCard/>
            <HitsCard/>
        </div>
    )
}