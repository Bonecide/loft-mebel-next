import s from './SecondCard.module.scss'
export default function SecondCard(){

    return(
        <div className={s.Card} >
        <div>
            
            <div>
                <h1>Современная и удобная мебель</h1>
                <h3>С доставкой по 
                Краснодарскому краю </h3>
            </div>
            <button>СМОТРЕТЬ КАТАЛОГ</button>
        </div>

    </div>
    )
}