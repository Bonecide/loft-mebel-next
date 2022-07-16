import s from './SecondCard.module.scss'
import { useRouter } from 'next/router';
export default function SecondCard(){
    const router = useRouter()
    return(
        <div className={s.Card} >
        <div>
            
            <div>
                <h1>Современная и удобная мебель</h1>
                <h3>С доставкой по 
                Краснодарскому краю </h3>
            </div>
            <button onClick={() => router.push('/catalog')}>СМОТРЕТЬ КАТАЛОГ</button>
        </div>

    </div>
    )
}