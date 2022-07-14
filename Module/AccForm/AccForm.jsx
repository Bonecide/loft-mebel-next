import s from './AccForm.module.scss'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateInfo } from '../../store/Slices/personalInfoSlice';
import { useState } from 'react';

export default function AccForm({change}) {
    const info = useSelector((state) => state.personal.info);
    const[value,setValue] = useState(   info ? info : {})
    
    const {
        register,
        handleSubmit,
        reset,
       
      } = useForm({
        mode: "onSubmit"
      });
      const dispatch = useDispatch()
      const success = (data) => {
         change(true)
         dispatch(UpdateInfo(data))
         
      }
    console.log(value)
    
    return(
        <div className={s.container}>
            <h2>Личные данные</h2>
            <div className={s.form}>
                <form onSubmit={handleSubmit(success)}>
                    <div className={s.userinfo}>
                        <div>
                            <p>
                                Имя
                            </p>
                            <input value={value.name} onInput  = {(e) => setValue({name: e.target.value })} required {...register ('name')} type="text" />
                        </div>
                        <div>
                            <p>E-mail</p>
                            <input value={value.mail} onInput  = {(e) => setValue({mail: e.target.value })} required {...register ('mail')} type="email" />
                        </div>
                        <div>
                            <p>Фамилия</p>
                            <input value={value.surname} onInput  = {(e) => setValue({surname: e.target.value })} required {...register ('surname')} type="text"  />
                        </div>
                        <div>
                            <p>Номер телефона</p>
                            <input value={value.phone} onInput  = {(e) => setValue({phone: e.target.value })} required {...register ('phone')} type="number" maxLength={12} />
                        </div>
                    </div>
                    <div className={s.place}>
                            <div>
                                <p>
                                    Город
                                </p>
                                <input value={value.town} onInput  = {(e) => setValue({town: e.target.value })} {...register ('town')} type="text" />
                            </div>
                            <div className={s.street}>
                                <p>Улица</p>
                                <input value={value.street} onInput  = {(e) => setValue({street: e.target.value })} {...register ('street')} type="text" />
                            </div>
                            <div className={s.home}>
                                    <div>
                                        <p>Дом/Корпус</p>
                                        <input value={value.house} onInput  = {(e) => setValue({house: e.target.value })} {...register ('house')} type="text" />
                                    </div>
                                    <div>
                                        <p>Квартира</p>
                                        <input value={value.number} onInput  = {(e) => setValue({number: e.target.value })} {...register ('number')} type="number" />
                                    </div>
                            </div>
                    </div>
                    <div className={s.button}>
                        <button className={s.cancell} onClick= {() => change(true)}>Отмена</button>
                        <button type='submit'>Готово</button>
                      
                    </div>
                </form>
            </div>
        </div>
    )
}