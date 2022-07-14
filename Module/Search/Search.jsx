import s from './Search.module.scss'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import items from '../../fake-data/catalog.json'
import IMG from '../../Components/IMG/IMG';
import { useRouter } from 'next/router';
export default function Search({value,setValue}) {
    const router = useRouter()

    const search = value && value.toString()
    const result = []
    if(search) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].type.toLowerCase().includes( search.toLowerCase()) ||
             items[i].name.toLowerCase().includes( search.toLowerCase()) ) { 
               result.push(items[i])
            }    
           }
    }
   
    
    
    return(
        <div className ={s.search}>
            <input value={value} onChange ={(e) => setValue(e.target.value)} placeholder='Поиск' type="text" className={s.input} />
            {result && 
            <div className={s.parent}>
                
                <div className={s.wrap}>

                    {result.map((info,idx) => (
                        <div onClick = {() => router.push(`/catalog/item/${info.name}`)} className={s.card} key={`SerchN${idx}`}>
                            <div><IMG src={info.img}/></div>
                            <div>
                            <h3>{info.name}</h3>
                            <p>{info.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>}
            <div onClick={() => setValue(null)} className={s.kostil}/>
        </div>
    )
}