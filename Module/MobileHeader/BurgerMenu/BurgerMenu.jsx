import s from './BurgerMenu.module.scss'
import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InfoIcon from '@mui/icons-material/Info';
import IMG from '../../../Components/IMG/IMG';
import CardInfo from '../../../fake-data/furniture-type.json'
import { useRouter } from 'next/router';
export default function BurgerMenu({setOpen}) {
    const router = useRouter()
    return(
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
                    { CardInfo && CardInfo.map((info,idx) => (
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