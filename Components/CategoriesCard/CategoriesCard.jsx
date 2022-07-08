import { useState } from "react";
import IMG from "../IMG/IMG";
import s from './CategoriesCard.module.scss'
export default function CategoriesCard({categories , title , img}){
    const [IsView,SetIsView] = useState(false)
    return(
        <div>
            <div style={{backgroundColor : IsView? '#3f90a8' : 'white'}} onMouseEnter={()=> SetIsView(true)} onMouseLeave={()=> SetIsView(false)} className={s.Card} >
                <IMG src={img} alt='photo' />
                <p style={{color : IsView ? 'white' : 'black'}}>{title}</p>
            </div>
            {IsView &&  
            <div className={s.menu_list} onMouseEnter={()=> SetIsView(true)} onMouseLeave={()=> SetIsView(false)}>
               {categories? categories.map((info,idx) => (
                <div key={`fdsfasfd${idx}`}>
                    <p >
                    {info}
                    </p>
                </div>
               )) : null}
            </div>
            }
            
        </div>
    )
}