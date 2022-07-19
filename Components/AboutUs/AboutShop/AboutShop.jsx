import IMG from '../../IMG/IMG'
import s from './AboutShop.module.scss'
export default function AboutShop() {


    return(
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.aboutShop}>
                        <p className={s.title}>О магазине</p>
                        <h1>Интернет-магазин «Лофт Мебель»: купите хорошую мебель в один клик!</h1>
                        <div>
                       <p>
                         Уникальный формат интернет-магазина позволит вам купить лучшую
                        мебель крупнейших российских фабрик максимально быстро и по
                        выгодной цене!
                       </p>
                        <p>Мы благодарим за доверие более десятка производителей, которые дали
                        нам возможность представлять лучшие образцы их продукции в
                        российском интернет-пространстве. Прямые договоры на поставку
                        мебели с фабрик обеспечивают наиболее привлекательные условия для
                        наших покупателей.</p>


                        </div>
                </div>
             
                <div className={s.img_container}>
                    <IMG src={'/img/aboutUs_coach.svg'} alt='coach'/>
                    <div className={s.bluesquare}/>
                </div>
                
                </div>    
            
            
        </div>
    )
}