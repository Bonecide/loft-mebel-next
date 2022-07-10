import IMG from '../IMG/IMG'
import s from './Map.module.scss'

export default function Map(){


    return(

        <div className={s.map}>
            <h3>
            Адрес нашей компании
            </h3>
            <div>
                <IMG src={'/img/yandex-map.svg'} alt='yandex'/>
            </div>
        </div>
    )
}