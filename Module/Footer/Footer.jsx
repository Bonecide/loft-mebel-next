import s from './Footer.module.scss'
import IMG from './../../Components/IMG/IMG';
export default function Footer() {

    return(
        <footer className={s.footer}>
                <div>
                    <div>
                        <h2>НАВИГАЦИЯ</h2>
                    </div>
                    <div className={s.lists}>
                        <ul>
                            <li>Кухни</li>
                            <li>Спальни</li>
                            <li>Гостинные</li>
                        </ul>
                        <ul>
                            <li>Прихожие</li>
                            <li>Офисная мебель</li>
                            <li>Детская</li>
                        </ul>
                        <ul>
                            <li>Шкафы</li>
                            <li>Матрасы</li>
                            <li>Мягкая мебель</li>
                        </ul>
                    </div>
                    <div className={s.special}>
                        <p className={s.discount}>
                            Акция
                        </p>
                        <p>
                            Новинки
                        </p>
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
        </footer>
    )
}