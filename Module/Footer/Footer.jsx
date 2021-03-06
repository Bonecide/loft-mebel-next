import s from './Footer.module.scss'
import IMG from './../../Components/IMG/IMG';
import { useRouter } from 'next/router';
export default function Footer() {
    const router = useRouter()
    return(
        <footer className={`container ${s.footer}`}>
                <div className={s.navigation}>
                    <div>
                        <h2>НАВИГАЦИЯ</h2>
                    </div>
                    <div className={s.lists}>
                        <ul>
                            <li onClick={() => router.push({
                                pathname: '/catalog',
                                query : {
                                    title : 'Кухни' 
                                }
                            })}>Кухни</li>
                            <li onClick={() => router.push({
                                pathname: '/catalog',
                                query : {
                                    title : 'Спальни' 
                                }
                            })}>Спальни</li>
                            <li onClick={() => router.push({
                                pathname: '/catalog',
                                query : {
                                    title : 'Гостинные' 
                                }
                            })}>Гостинные</li>
                        </ul>
                        <ul>
                            <li onClick={() => router.push({
                                pathname: '/catalog',
                                query : {
                                    title : 'Прихожие' 
                                }
                            })}>Прихожие</li>
                            <li onClick={() => router.push({
                                pathname: '/catalog',
                                query : {
                                    title : 'Офисная мебель' 
                                }
                            })}>Офисная мебель</li>
                            <li onClick={() => router.push({
                                pathname: '/catalog',
                                query : {
                                    title : 'Детская' 
                                }
                            })}>Детская</li>
                        </ul>
                        <ul>
                            <li>Шкафы</li>
                            <li>Матрасы</li>
                            <li>Мягкая мебель</li>
                        </ul>
                    </div>
                    <div className={s.special}>
                      <p onClick ={() => scrollTo(0,0)}>Вверх</p>
                    </div>
                </div>
                <div className={s.second_column}>
                    <div>
                        <IMG src={'/img/mini-logo.svg'} alt='logo' />
                    </div>
                    <div className={s.address}>
                        <p>
                            г. Анапа, Анапское шоссе,
                            <br />
                            30 Ж/К Черное море
                        </p>
                    </div>
                    <div className={s.contacts}>
                        <div>
                            <IMG src={'/img/icons/phone.svg'}/>
                            <p>8 (964) 89 99 119</p>
                        </div>
                        <div>
                            <IMG src={'/img/icons/inst.svg'}/>
                            <p>INSTAGRAM</p>
                        </div>
                        <div>
                            <IMG src={'/img/icons/mail.svg'}/>
                            <p>mebel_loft_anapa@mail.ru</p>
                        </div>
                    </div>
                </div>
                <div className={s.footer_mobile}>
                    <div className={s.address_mobile}>
                        <IMG className={s.logo_mobile} src={'/img/mini-logo.svg'} alt='logo' />
                        <p>г. Анапа, Анапское шоссе,
                        <br />
                            30 Ж/К Черное море
                        </p>
                    </div>
                    <div className={s.mobile_contacts}>
                            <div className={s.phone_mobile}>
                            <div className={s.top}><p onClick={()=> scrollTo(0,0)}>Вверх</p></div>
                               <div>
                                    <IMG src={'/img/icons/phone.svg'}/>
                              
                                <p>8 (964) 89 99 119</p>
                                </div>  
                                
                            </div>

                            <div className ={s.mail_inst}>

                                <div>
                                    <IMG src={'/img/icons/inst.svg'}/>
                                    <p>INSTAGRAM</p>
                                </div>
                                    <div>
                                        <IMG src={'/img/icons/mail.svg'}/>
                                        <p>mebel_loft_anapa@mail.ru</p>
                                    </div>    
                            </div>    
                    </div>
                </div>
        </footer>
    )
}