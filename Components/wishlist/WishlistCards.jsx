import s from './WishlistCards.module.scss'
import { useSelector } from 'react-redux';
import HitsCard from '../../Module/HitsCard/HitsCard';
import { useRouter } from 'next/router';

export default function WishlistCards() {
    const item = useSelector((state) => state.wishlist)
    const router = useRouter()
    return(
        <div className='container'>
            <h2></h2>
            <div>
                {item ? item.map((info,idx) => (
                    <HitsCard
                    onClick = {() => router.push(`/catalog/item/${info.name}`)}
                    key ={`HitN${idx + 1}`}
                    name={info.name}
                    type={info.type}
                    oldPrice={info.oldPrice}
                    newPrice={info.newPrice}
                    img={info.img}
                    discount={info.discount}
                    size={info.size}
                    info={info}
                    />
                )) :
                <div>
                    <h3>Ваш список Желаемого пуст, <span onClick={() => router.push('/catalog')}>перейти в каталог</span> </h3>
                </div>
                }
            </div>
        </div>  
    )
}