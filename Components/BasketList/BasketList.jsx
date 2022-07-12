import { useSelector, useDispatch } from 'react-redux';
import BasketCard from '../../Module/BasketCard/BasketCard';
import s from './BasketList.module.scss'
import { BasketDelete, PurchaseGoods } from '../../store/Slices/basketSlice';
import { Link } from 'next/link';
import { addPurchase } from '../../store/Slices/purchaseSlice';
import YouLikeIt from '../YouLikeIt/YouLikeIt';
import { zeroing } from '../../store/Slices/priceSlice';
export default function BasketList() {
    const dispatch = useDispatch()
    const price = useSelector((state) => state.price);
    const item = useSelector((state) => state.basket);
    
    const Purchase = () => {
        item.map((info) => dispatch(addPurchase(info)))
        dispatch(PurchaseGoods())
        dispatch(zeroing())
    }
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
                    <button onClick = {Purchase}>Оформить заказ</button>
                </div>

                <YouLikeIt/>
        </div>
    )
}