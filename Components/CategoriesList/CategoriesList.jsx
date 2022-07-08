import CategoriesCard from '../CategoriesCard/CategoriesCard'
import s from './CategoriesList.module.scss'
import CardInfo from '/fake-data/furniture-type.json'
import { useState } from 'react';
export default function CategoriesList({isView,setIsView}) {
    return(
        <div>
            <div className={s.container}>
                {CardInfo.map((info,idx) => (
                    <CategoriesCard title={info.type} categories={info.categories} img={info.img} key={`CardN${idx}`}/>
                ))}
                <div className={s.Card}>
                    <p>Акция</p>
                </div>
                <div className={s.etc}>
                    <p onClick={()=> setIsView(!isView)}>⋮</p>
                
                {isView &&  
            <div className={s.menu_list} onMouseEnter={()=> setIsView(true)} onMouseLeave={()=> setIsView(false)}>
               
                <div>
                    <p>
                        Новинки
                    </p>
                </div>
                <div>
                    <p>
                        Шкафы
                    </p>
                </div>
                <div>
                    <p>
                        Матрасы
                    </p>
                </div>
                <div>
                    <p>
                        Мягкая мебель
                    </p>
                </div>
              
            </div>
            }
            </div>
            </div>
        </div>
    )
}