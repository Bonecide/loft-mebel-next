import s from './SliderCard.module.scss'
import { useRouter } from 'next/router';

export default function SliderCard() { 
    const router = useRouter()
    return(
        <div className={s.Card} >
            <div>
                
                <div>
                    <h1>LOFT МЕБЕЛЬ</h1>
                    <h3>Современная и удобная мебель в Анапе</h3>
                </div>
                <button onClick={() => router.push("/basket")}>СМОТРЕТЬ КАТАЛОГ</button>
            </div>

        </div>
    )
}