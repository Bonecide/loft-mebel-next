import HitsCard from '../../Module/HitsCard/HitsCard'
import s from './Hits.module.scss'
import information from '../../fake-data/hits.json'
export default function Hits() {

    return(
    <div className={s.hits}>
        <h3>
            Хиты продаж
        </h3>
        <div className={s.container}>
            
            {information.map((info,idx) => (
                <HitsCard key ={`HitN${idx}`}
                name={info.name}
                type={info.type}
                oldPrice={info.oldPrice}
                newPrice={info.newPrice}
                img={info.img}
                discount={info.discount}
                size={info.size}
                
                />
            ))}
        </div>
      </div>  
    )
}