import HitsCard from '../../Module/HitsCard/HitsCard'
import s from './Hits.module.scss'
import information from '../../fake-data/hits.json'
import { useRouter } from 'next/router';
export default function Hits() {
    const router = useRouter()
    return(
    <div className={s.hits}>
        <h3 className ={s.title}>
            Хиты продаж
        </h3>
        <div className={s.container}>
            
            {information.map((info,idx) => (
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
            ))}
        </div>
      </div>  
    )
}