import IMG from '../../Components/IMG/IMG'
import s from './HitsCard.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function HitsCard({name,type,oldPrice,newPrice,discount,size,img}) {

    return(

        <div className={s.relative}>
            <div className={s.Card}>
                <div className={s.heart_container}>
                    <FavoriteBorderIcon className={s.heart}/>
                    {discount && 
                    <div>
                        <IMG src={'/img/icons/discount.svg'} alt='discount'/>
                        <p>{discount}</p>
                    </div>
                    }
                </div>
                <div>
                <IMG src = {img}/>
                </div>
                <div className={s.info}>
                    <h2>{name}</h2>
                    <h3>{type}</h3>
                    <h4>{newPrice}</h4>

                </div>
                <div className={s.hidden}>
                    <p className={s.size_text}>Размеры</p>
                    <div className={s.sizes}>
                        <div>
                            <p className={s.type_size}>ШИРИНА</p>
                            <p>{size[width]}</p>
                        </div>
                        <div>
                            <p className={s.type_size}>ГЛУБИНА</p>
                            <p>{size[deep]}</p>
                        </div>
                        <div>
                            <p className={s.type_size}>ВЫСОТА</p>
                            <p>{size[height]}</p>
                        </div>
                    </div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        </div>  
    )
}