import s from './MobileHeader.module.scss'
import { useState, useEffect } from 'react';
import IMG from '../../Components/IMG/IMG';
import  Link  from 'next/link';
import { useSelector } from 'react-redux';
import Search from './../Search/Search';
import CardInfo from '/fake-data/furniture-type.json'
import { useRouter } from 'next/router';
import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InfoIcon from '@mui/icons-material/Info';
export default function MobileHeader() {
    const item = useSelector((state) => state.basket);
    const router = useRouter()
    const [open,setOpen] = useState(false)
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
        <header className = {`container ${s.container}`}>
            <div className={s.navigation}>
                <div className={s.logo_and_burger} >
                    <IMG onClick={() => setOpen(true)} className={s.burger} src={'/img/icons/menu-icon.svg'}/>
                    <IMG onClick={() => router.push('/')} className={s.logo} src={'/img/LOGO.svg'}/>
                </div>
                <div className={s.icons}>
                        <Link href="/wishlist">
                            <a>
                                <IMG  src={'/img/icons/wishlist-icon.svg'} alt='wishlist'/>
                            </a>
                        </Link>
                        <Link href="/basket">
                            <a>
                                <IMG  src={'/img/icons/bag.svg'} alt='bag'/>
                                {isFully && <div className={s.redcircle}/>}
                            </a>
                        </Link>
                        <Link href="/personalaccount">
                            <a>
                                <IMG src={'/img/icons/profile-icon.svg'} alt='profile'/>
                            </a>
                        </Link>
                    </div>
            </div>
            <div className={s.search}>
            <Search value={value} setValue={setValue}/>
            </div>
            <div className={s.categoryContainer}>
                {CardInfo.map ((info,idx) => (
                    <div onClick={() => router.push({
                        pathname: '/catalog',
                        query : {
                            title : info.type 
                        }
                    })} className={s.Card} key={`HeaderInfoFurnitureN${idx}`}>
                        <div className = {s.CardImg}>
                            <IMG src={info.img}/>
                        </div>
                        <p>{info.type}</p>
                    </div>
                ))}
            </div>
            {open && (
                <div className ={s.burger_menu}>
                    <div className={s.burger_title}>
                        <h3>Меню</h3>
                        <div onClick={()=> setOpen(false)} className={s.close}><ClearIcon className={s.close_icon}/></div>
                    </div>
                    <div className={s.burger_info}>
                        <div onClick={() => router.push('/')} >
                        <HomeIcon className={s.icon}/>
                        <p>Главная</p>
                        </div>
                        <div onClick={() => router.push('/aboutUs')}>
                        <InfoIcon className={s.icon}/>
                        <p>О нас</p>
                        </div>
                        <div onClick={() => router.push('/contacts')}>
                        <AlternateEmailIcon className={s.icon}/>
                        <p>Контакты</p>
                        </div>
                    </div>
                    <div className={s.categories}>
                            <h3>Категории</h3>
                            <div className={s.Burger_container}>
                                {CardInfo.map((info,idx) => (
                                    <div onClick={() => {
                                        router.push({
                                            pathname: '/catalog',
                                            query : {
                                                title : info.type ,
                                                
                                            }
                                        })
                                    }} className={s.BurgerCard} key={`burgerCategoryN${idx}`}>
                                        <IMG src={info.img}/>
                                        <p>{info.type}</p>
                                    </div>    
                                ))}
                            </div>
                    </div>
                </div>
            )
                
            }
        </header>
    )
}