import s from './Bonus.module.scss'
import  Link  from 'next/link';
import IMG from '../../IMG/IMG';

export default function Bonus() {

    return(

        <div className='container'>
            <div className={s.crumb}>
                <Link href={'/'}>
                    <a>Главная</a>
                </Link>
            <p>/</p>
            <Link href={'/personalaccount'}>
               <a> Личный кабинет </a>
            </Link>
           </div>
           <div className={s.bonus}>
            <div className={s.text}>
                <h2>Бонусная программа</h2>
               <div>
                    <p>У вас <span> 0 </span> бонусных баллов</p>
                    <Link href={''}>
                    <a>
                    Правила бонусной программы
                    </a>
                    </Link>
               </div>
            </div>
            <div className={s.container}> 
                <div>
                        <IMG src={'/img/icons/cashback.svg'} alt={'cashback'}/>
                        <p>Возвращаем до 7% на бонусный счет</p>
                </div>
                <div>
                        <IMG src={'/img/icons/ruble.svg'} alt={'cashback'}/>
                        <p>1 бонус = 1 рубль</p>
                </div>
                <div>
                         <IMG src={'/img/icons/present.svg'} alt={'cashback'}/>
                        <p>Оплачивайте бонусами до 20% от покупки</p>
                </div>
            </div>
           </div>
        </div>
    )
}