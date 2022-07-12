import PurchaseCard from '../../../Module/PurchaseCard/PurchaseCard'
import s from './MyPurchase.module.scss'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function MyPurchase() {

    
    const item = useSelector((state) => state.purchase.value);
    
    const goods = []

    
        for (let i = 0; i < 4; i++) {
            goods.push(item[i])
            
        }
        const [items,setItems] = useState(goods)
        const toggle = () => {
            if(items.length > 4) {
                setItems(goods)
            }
            else {
                setItems(item)
            }
        }
    return(

        <div className={s.container}>
            <h2>Мои заказы</h2>
            <div className={s.wrapper}>
                <div className={s.head}>
                    <div className={s.good}>
                        <p>
                        Товар
                        </p>
                    </div>
                    <div className={s.price}>
                        <p> 
                        Цена
                        </p>
                    </div>
                    <div className={s.date}>
                        <p>
                        Дата
                        </p>
                    </div>
                    <div className={s.status}>   
                        <p>
                        Статус
                        </p>
                    </div>
                </div>
                {items && items.map((info,idx) => (

                    info && <PurchaseCard
                        name={info.name}
                        date={info.date}
                        status={"В Ожидании"}
                        img={info.img}
                        price={info.newPrice}
                         key={`PurchaseN${idx}`}/> 
                ))}
                <p className={s.seeAll} onClick={toggle}>{items === item ? 'Меньше' : "Смотреть все"}</p>
            </div>
        </div>
    )
}