import s from './YouLikeIt.module.scss'
import item from '../../fake-data/hits.json'
import { useEffect } from 'react'
import HitsCard from '../../Module/HitsCard/HitsCard';
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function YouLikeIt() {
    const router = useRouter()
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const [LikeIt,setLikeIt] = useState()
    useEffect(()=> {
        const basket = []
        for (let i = 0; i < 4; i++) {
            let number = (getRandomInt(1 , 12))
            basket.push(item[number])
            setLikeIt(basket)
        }
        
        
    },[])
    return(

        <div className={s.YouLike}>
            <h2>Вам может понравиться</h2>
            <div className={s.CardContainer}>
                {LikeIt? LikeIt.map((info,idx)=> (
                   info ?
                   <HitsCard
                   onClick = {() => router.push(`/catalog/item/${info.name}`)}
                    key ={`You'll like it${idx + 1}`}
                   name={info.name}
                   type={info.type}
                   oldPrice={info.oldPrice}
                   newPrice={info.newPrice}
                   img={info.img}
                   discount={info.discount}
                   size={info.size}
                   info={info}
                   /> : null
                        
                )) : null}
            </div>  
        </div>
    )
}