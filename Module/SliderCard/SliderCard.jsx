import s from './SliderCard.module.scss'
export default function SliderCard() { 

    return(
        <div className={s.Card} >
            <div>
                
                <div>
                    <h1>LOFT МЕБЕЛЬ</h1>
                    <h3>Современная и удобная мебель в Анапе</h3>
                </div>
                <button>СМОТРЕТЬ КАТАЛОГ</button>
            </div>

        </div>
    )
}