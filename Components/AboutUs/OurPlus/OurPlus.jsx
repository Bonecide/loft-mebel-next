import s from './OurPlus.module.scss'
import item from '../../../fake-data/OurPlus.json'
import IMG from '../../IMG/IMG'
export default function OurPlus() {

    return(

        <div className={s.OurPlus}>
            <div className={s.container}>
                {item.map((info,idx) => (
                    <div className={s.kostil} key={`PlusN${idx}`}>
                        <div className={s.card}>
                            <div className={s.whiteCircle}>
                                <IMG src={info.img} alt={info.img}/>
                            </div>
                            <div className={s.text}>
                                <h3>{info.title}</h3>
                                <p>{info.body}</p>
                            </div>
                        </div>
                    </div>  
                ))}
            </div>
        </div>
    )
}