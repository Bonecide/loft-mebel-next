import { useState } from "react";
import IMG from "../IMG/IMG";
import s from './CategoriesCard.module.scss'
import { useRouter } from 'next/router';
export default function CategoriesCard({categories , title , img}){
    const router = useRouter()
    const [IsView,SetIsView] = useState(false)
    return(
        <div>
            <div onClick = {() => {
                router.push({
                    pathname: '/catalog',
                    query : {
                        title : title 
                    }
                })
            }} style={{backgroundColor : IsView? '#3f90a8' : 'white'}} onMouseEnter={()=> SetIsView(true)} onMouseLeave={()=> SetIsView(false)} className={s.Card} >
                <IMG src={img} alt='photo' />
                <p style={{color : IsView ? 'white' : 'black'}}>{title}</p>
            </div>
            {IsView &&  
            <div className={s.menu_list} onMouseEnter={()=> SetIsView(true)} onMouseLeave={()=> SetIsView(false)}>
               {categories? categories.map((info,idx) => (
                <div onClick={() => {
                    router.push({
                        pathname: '/catalog',
                        query : {
                            title : title ,
                            category: info
                        }
                    })
                }} key={`fdsfasfd${idx}`}>
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