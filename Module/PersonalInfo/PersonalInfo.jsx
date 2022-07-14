import s from './PersonalInfo.module.scss'
import { useSelector } from 'react-redux';

export default function PersonalInfo({change}) {
    const info = useSelector((state) => state.personal.info);
    console.log(info)
    return(

        <div className={s.container}>
        <h2>Личные данные</h2>
        <div className={s.wrapper}>
            <div className={s.card}>
                <div className={s.userinfo}>
                    <div>
                        <p className={s.text}>
                            Имя
                        </p>
                        <div>
                            <p className={s.text}>
                               {info.name}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>E-mail</p>
                        <div>
                            <p className={s.text}>
                                {info.mail}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>Фамилия</p>
                        <div>
                            <p className={s.text}>
                                {info.surname}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>Номер телефона</p>
                        <div>
                            <p className={s.text}>
                                {info.phone}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={s.place}>
                        <div>
                            <p>
                                Город
                            </p>
                            <div>
                                <p className={s.text}>
                                    {info.town}
                                </p>
                            </div>
                        </div>
                        <div className={s.street}>
                            <p>Улица</p>
                            <div>
                            <p className={s.text}>
                                {info.street}
                            </p>
                        </div>
                        </div>
                        <div className={s.home}>
                              <div>
                                    <p> Дом/Корпус</p>
                                    <div className={s.wrap}>
                                        <p className={s.text}>{info.house}</p>
                                    </div>
                              </div>
                              <div>
                                    <p> Квартира</p>
                                    <div className={s.wrap}>
                                        <p className={s.text}>{info.number}</p>
                                    </div>
                              </div>
                        </div>
                </div>
                <div className={s.button}>
                    <button onClick = {() => change(false)}>Изменить</button>
                </div>
            </div>
        </div>
    </div>
    )
}