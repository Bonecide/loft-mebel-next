import IMG from '../../Components/IMG/IMG'
import s from './CardForWish.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { AddBasket } from '../../store/Slices/basketSlice';
import { increment } from '../../store/Slices/priceSlice'
import dayjs from 'dayjs';
import Modal from './../../Components/Modal/Modal';
import { useState } from 'react';
import { deleteWish } from '../../store/Slices/wishListSlice';

export default function CardForWish({name,type,oldPrice,newPrice,discount,size,img,info,idx, ...props}) {
    const [modal,setModal] = useState(false)
    
    const good = {
        name ,
        newPrice,
        img,
        oldPrice,
        discount,
        size,
        date : dayjs().format('DD.MM.YYYY')
    }
    const dispatch = useDispatch()
    const addInBasket = () => {
        dispatch(AddBasket(good))  
        dispatch(increment(newPrice)) 
        setModal(true)

    } 
    const deleteFromWish = () => {
        dispatch(deleteWish(idx))
    }
     
    return( 
<>
        <div className={s.relative}  >
            <div className={s.Card} >
                <div className={s.icon_container}>
                {discount ? 
                    <div className={s.discount}>
                        <IMG src={'/img/icons/discount.svg'} alt='discount'/>
                        <p>{discount}</p>
                    </div>
                    :
                    <div className={s.kostil}>

                    </div>
                    }
                    <FavoriteBorderIcon onClick = {deleteFromWish} className={s.heart}/>
                    
                </div>
                <div {...props}>
                <IMG src = {img}/>
                </div>
                <div className={s.info}>
                    <h2>{name}</h2>
                    <h3>{type}</h3>
                   <div className={s.prices}>
                    <h4>{newPrice}₽</h4>
                    {oldPrice &&  <h5>{oldPrice}₽</h5>}
                    
                   </div>

                </div>
                <div className={s.hidden}>
                    <p className={s.size_text}>Размеры</p>
                    <div className={s.sizes}>
                        {size.map((i,idx)=> (
                        
                        <><div key={`sizecolumnN${idx}`}>
                                <p className={s.type_size}>ШИРИНА</p>
                                <p>{i.width}</p>
                            </div><div>
                                    <p className={s.type_size}>ГЛУБИНА</p>
                                    <p>{i.deep}</p>
                                </div><div>
                                    <p className={s.type_size}>ВЫСОТА</p>
                                    <p>{i.height}</p>
                                </div></>
                        ))}
                    </div>
                    <button onClick={addInBasket}>Добавить в корзину</button>
                </div>
            </div>
        </div>
        {modal && (
      <Modal img={img} text={` ${name} успешно добавлен в корзину !`} close={setModal} />
      )}  
      </>  
    )
}