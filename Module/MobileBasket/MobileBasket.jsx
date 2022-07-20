import IMG from "../../Components/IMG/IMG";
import s from './MobileBasket.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { BasketDelete } from '../../store/Slices/basketSlice'
import { decrement } from "../../store/Slices/priceSlice";
export default function MobileBasketCard({name,newPrice,img,oldPrice,size,idx}) {
    const dispatch = useDispatch()

    const basketdel = () => {
        dispatch(BasketDelete(idx))
        dispatch(decrement(newPrice))
      }
    
    return(
        <div>
            <div className={s.Card}>
                <div className={s.MOBILE}>
                    <div className={s.img_container}>
                        <IMG src={img}/>
                    </div>
                 
                    <div className={s.maininfo}>
                         <h2>{name}</h2>
                        <div className={s.price}>
                            <div className={s.amount}>
                                <p>1</p>
                            </div>
                            <p>{newPrice}₽</p>
                            {oldPrice && <p className={s.oldPrice}>{oldPrice}₽</p>}
                        </div>
                    </div>
                </div>   
                    <div className={s.type}>
                        
                       <div className ={s.sizes}>
                        <p>Размер(Ш×Д×В):</p>
                        {size.map((info,idx) => (
                            <p className={s.sizeValue} key={`fdsfjakdfN${idx}`}>
                                {info.width} x {info.deep} x {info.height}
                            </p>
                        ))}
                        </div>  
                    </div>
                
                <div>
                    <button onClick={basketdel}> <CloseIcon  className={s.cross}/> </button>
                </div>
            </div>
        </div>
    )
}