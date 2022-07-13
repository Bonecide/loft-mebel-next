import IMG from "../../Components/IMG/IMG";
import s from './BasketCard.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { BasketDelete } from '../../store/Slices/basketSlice'
import { decrement } from "../../store/Slices/priceSlice";
export default function BasketCard({name,newPrice,img,oldPrice,discount,size,idx}) {
    const dispatch = useDispatch()

    const basketdel = () => {
        dispatch(BasketDelete(idx))
        dispatch(decrement(newPrice))
      }
    
    return(
        <div>
            <div className={s.Card}>
                <div className={s.img_container}>
                    <IMG src={img}/>
                </div>
                <div className={s.description}>   
                    <div className={s.maininfo}>
                        <h2>{name}</h2>
                        <div className={s.price}>
                           {discount && 
                           <div className={s.discount}>
                           <IMG src={'/img/icons/discount.svg'} alt='discount'/>
                           <p>{discount}</p>
                            </div>
                           }
                           {oldPrice && <p className={s.oldPrice}>{oldPrice}₽</p>}
                        
                        <p>{newPrice}₽</p>
                        </div>
                    </div>
                    <div className={s.type}>
                        <p>Количество: <span>1</span> </p>
                       <div className ={s.sizes}>
                        <p>Размер(Ш×Д×В):</p>
                        {size.map((info,idx) => (
                            <p className={s.sizeValue} key={`fdsfjasfjadfalskdfN${idx}`}>
                                {info.width} x {info.deep} x {info.height}
                            </p>
                        ))}
                        </div>  
                    </div>
                </div>
                <div>
                    <button onClick={basketdel}> <CloseIcon  className={s.cross}/> </button>
                </div>
            </div>
        </div>
    )
}