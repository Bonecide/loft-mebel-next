import s from './Advantages.module.scss'
import item from '../../../fake-data/advantages.json'

export default function Advantages() {

    return(
        <div className={s.advantages}>
                <div className={s.container}>
                    {item.map((info,idx) => (
                        <div className={s.Card} key={`advantagesN${idx}`}>
                            <h3>{info.title}</h3>
                            <hr/>
                            <p>{info.body}</p>
                        </div>
                       
                        
                    ))}
                </div>
        </div>
    )
}