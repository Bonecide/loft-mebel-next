import s from './Modal.module.scss'
import IMG from './../IMG/IMG';
import Link from 'next/link';

export default function Modal({img,text,close,isWish}) {

    return(
        <div className={s.OrderModal} onClick={() => close(false)}>
          
                <div className={s.OrderModalContent} onClick={(e) => e.stopPropagation()}>
                  
                    <IMG src={img} alt={img}/>
                    <h2>{text}</h2>
                    {!isWish? 
                    <Link href={'/basket'}>
                    <a onClick={()=> close(false)}>
                        Перейти в корзину
                    </a>
                    </Link> :
                    <Link href={'/wishlist'}>
                    <a onClick={()=> close(false)}>
                        Перейти в список желаемого
                    </a>
                    </Link>}
                </div>
            </div>
          
    )
}