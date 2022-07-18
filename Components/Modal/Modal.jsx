import s from './Modal.module.scss'
import IMG from './../IMG/IMG';
import Link from 'next/link';

export default function Modal({img,text,close}) {

    return(
        <div className={s.OrderModal} onClick={() => close(false)}>
          
                <div className={s.OrderModalContent} onClick={(e) => e.stopPropagation()}>
                  
                    <IMG src={img} alt={img}/>
                    <h2>{text}</h2>
                    <Link href={'/basket'}>
                    <a>
                        Перейти в корзину
                    </a>
                    </Link>
                </div>
            </div>
          
    )
}