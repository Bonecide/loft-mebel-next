
import Outlet from './../Components/Outlet/Outlet';
import CategoriesCard from './../Components/CategoriesCard/CategoriesCard';
import CategoriesList from '../Components/CategoriesList/CategoriesList';
import { useState } from 'react';
export default function MainPage() {
    const [isView,setIsView] = useState(false)

    return(
        <Outlet>
           <CategoriesList isView={isView} setIsView={setIsView}/>
        </Outlet>
    )
}