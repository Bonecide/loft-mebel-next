import Image from "next/future/image";
import Link from "next/link";
import s from './Header.module.scss'
export default function Header() {

    return(
        <header className={s.header}>
                <div>
                    <Image height={25} width= {113} src={'/img/LOGO.svg'} layout="raw" alt= 'logo'/>
                </div>
                <div className={s.navigation}>
                    <a>Главная</a>
                    <a>О нас</a>
                    <a>Контакты</a>
                </div>
                <div>
                    <input placeholder="Поиск" className={s.input} type="text"  />
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
                    <Link href="">
                        <a>
                            <Image width={0} height={0} src={'/img/icons/wishlist-icon.svg'} alt='wishlist'/>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Image width={0} height={0} src={'/img/icons/bag.svg'} alt='bag'/>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Image width={0} height={0} src={'/img/icons/profile-icon.svg'} alt='profile'/>
                        </a>
                    </Link>
                </div>
        </header>
    )
}