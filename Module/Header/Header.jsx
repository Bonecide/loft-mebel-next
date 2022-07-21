import Image from "next/future/image";
import Link from "next/link";
import s from './Header.module.scss'
import CategoriesList from './../../Components/CategoriesList/CategoriesList';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Search from "../Search/Search";
export default function Header({without}) {
    const item = useSelector((state) => state.basket);
    const [isFully,setIsFully] = useState(false)
    const [value,setValue] = useState()
    useEffect(()=> {
        if (item.length) {
            setIsFully(true)
        }
        else {
            setIsFully(false)
        }
    },[item])
    return(
        <header onClick={()=> setValue(null)} className={`container ${s.container}`}>
           <div className={s.fixed}>
            <div className={s.header}>
                    <div>
                        <Link href = {'/'}>
                        <Image height={25} className={s.logo} width= {113} src={'/img/LOGO.svg'} layout="raw" alt= 'logo'/>
                        </Link>
                    </div>
                    <div className={s.navigation}>
                        <Link href = {'/'} >Главная</Link>
                        <Link href = {'/aboutUs'} >О нас</Link>
                        <Link href = {'/contacts'} >Контакты</Link>
                    </div>
                    <div>
                        <Search value={value} setValue={setValue}/>
                    </div>
                    <div className={s.info_wrapper}>
                        <div className={s.contact}>
                            <Image width={0} height={0}  src={'/img/icons/phone.svg'} alt='phone' layout="raw"/>
                            <p>8 (964) 89 99 119</p>
                        </div>
                        <div className={s.delivery}>
                            <Image width={0} height={0}  src={'/img/icons/delivery-icon.svg'} alt='delivery' layout="raw"/>
                            <p>Доставка</p>
                        </div>
                    </div>
                    <div className={s.icons}>
                        <Link href="/wishlist">
                            <a>
                                <Image width={0} height={0} src={'/img/icons/wishlist-icon.svg'} alt='wishlist'/>
                            </a>
                        </Link>
                        <Link href="/basket">
                            <a>
                                <Image width={0} height={0} src={'/img/icons/bag.svg'} alt='bag'/>
                                {isFully && <div className={s.redcircle}/>}
                            </a>
                        </Link>
                        <Link href="/personalaccount">
                            <a>
                                <Image width={0} height={0} src={'/img/icons/profile-icon.svg'} alt='profile'/>
                            </a>
                        </Link>
                    </div>
                    
            </div>
            </div>
            {!without && <CategoriesList />}
            
        </header>
    )
}