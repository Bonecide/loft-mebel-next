
import s from './MyPurchaseMobile.module.scss'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import IMG from '../../Components/IMG/IMG';

export default function MyPurchaseMobile() {

    
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
            <div>
                {goods.length && goods.map((info,idx) => (

info && <div className={s.Wrap} key={`MbilePorchaseN${idx}`}>
                        <div className={s.img}>
                            <IMG src={info.img}/>
                            <p>{info.name}</p>
                        </div>
                        <div className={s.description}>
                            <div>
                                <p>Цена: {info.newPrice}</p>
                            </div> 
                            
                            <div>
                                <p>Дата: {info.date}</p>
                            
                            </div>       
                            <div>
                            <p>Статус: В Ожидании</p>
                            </div>    
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}