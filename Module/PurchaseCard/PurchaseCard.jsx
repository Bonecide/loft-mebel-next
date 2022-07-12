import s from './PurchaseCard.module.scss'
import IMG from './../../Components/IMG/IMG';

export default function PurchaseCard({img,price,name,date,status}) {

    return(

        <div className={s.Card}>
            <div className={s.good}>
                <IMG src={img} alt={img} />
                <p>{name}</p>
            </div>
            <div className={s.price}>
                <p>{price}</p>
            </div>
            <div className={s.date}>
                <p>{date}</p>
            </div>
            <div className={s.status}>
                <p>{status}</p>
            </div>
        </div>
    )
}