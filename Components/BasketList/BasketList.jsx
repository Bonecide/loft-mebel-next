import { useSelector, useDispatch } from 'react-redux';
import BasketCard from '../../Module/BasketCard/BasketCard';
import s from './BasketList.module.scss'
import { BasketDelete } from '../../store/Slices/basketSlice';
import { Link } from 'next/link';
import YouLikeIt from '../YouLikeIt/YouLikeIt';
export default function BasketList() {
    const dispatch = useDispatch()
    const price = useSelector((state) => state.price);
    const item = useSelector((state) => state.basket);
    
    return(
        <div>
           
            <div className={s.quanity}>
                <h3>Ваша корзина</h3>
                <p>{item.length} {item.length === 1 ? "Предмет" : (item.length === 10 ? "Предметов" : "Предмета" )}</p>
            </div>
                {item ? item.map((info,idx) => (
                    <BasketCard
                    idx={idx} 
                    discount = {info.discount}
                    oldPrice={info.oldPrice} 
                    name={info.name}
                    newPrice={info.newPrice}
                    img={info.img} 
                    size={info.size}
                    key={`NjiKj${idx}`}/>
                )) : null}
                <div className={s.order}>
                    <p>Итоговая стоимость:</p>
                    <h3>{price.value}₽</h3>
                    <button>Оформить заказ</button>
                </div>

                <YouLikeIt/>
        </div>
    )
}