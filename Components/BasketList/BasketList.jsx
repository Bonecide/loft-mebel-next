import { useSelector, useDispatch } from 'react-redux';
import BasketCard from '../../Module/BasketCard/BasketCard';
import { BasketDelete } from '../../store/Slices/basketSlice';
export default function BasketList() {
    const dispatch = useDispatch()
    const item = useSelector((state) => state.basket);
    
    return(
        <div>
            <div>
                <h3>Ваша корзина</h3>
                
            </div>
                {item ? item.map((info,idx) => (
                    <BasketCard basketdel={() => dispatch(BasketDelete(idx))} 
                    discount = {info.discount}
                    oldPrice={info.oldPrice} 
                    name={info.name}
                    newPrice={info.newPrice}
                    img={info.img} 
                    size={info.size}
                    key={`NjiKj${idx}`}/>
                )) : null}
        </div>
    )
}