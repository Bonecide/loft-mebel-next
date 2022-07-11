import s from './Profit.module.scss'
import item from '../../../fake-data/Profit.json'
import IMG from '../../IMG/IMG'
export default function Profit() {


    return(

        <div className={s.profit}>
            <h3>Покупайте с выгодой!</h3>
            <div className={s.container}>
                {item.map((info,idx) => (

                    <div className={s.Card} key={`profit#${idx}`}>
                        <div>
                                <IMG src={info.img} alt = {info.img}/>
                        </div>
                        <div>
                            <h2>
                                {info.title}
                            </h2>
                            <p>
                                {info.body}
                            </p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}