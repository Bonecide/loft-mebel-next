import s from './WishlistCards.module.scss'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import CardForWish from '../../Module/CardForWish/CardForWish';
import YouLikeIt from '../YouLikeIt/YouLikeIt';
import Link from 'next/link';
export default function WishlistCards() {
    const item = useSelector((state) => state.wishlist)
    const router = useRouter()
    return(
        <div className={`container ${s.container}`}>
            <div className={s.crumb}>
                <Link href={'/'}>
                    <a>Главная</a>
                </Link>
            <p>/</p>
            <Link href={'/wishlist'}>
               <a> Список желаемого </a>
            </Link>
           </div>
            <div className = {s.wrap}>
                
                {item.length ? item.map((info,idx) => (
                    <CardForWish
                    onClick = {() => router.push(`/catalog/item/${info.name}`)}
                    key ={`WishN${idx + 1}`}
                    name={info.name}
                    type={info.type}
                    oldPrice={info.oldPrice}
                    newPrice={info.newPrice}
                    img={info.img}
                    discount={info.discount}
                    size={info.size}
                    info={info}
                    idx ={idx}
                    />
                )) :
                <div>
                    <h3>Ваш список Желаемого пуст, <span onClick={() => router.push('/catalog')}>перейти в каталог</span> </h3>
                </div>
                }
            </div>
            <YouLikeIt/>
        </div>  
    )
}