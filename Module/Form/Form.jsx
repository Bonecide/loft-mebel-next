import { useForm } from "react-hook-form";
import s from './Form.module.scss'
export default function Form(){

    const {
        register,
        handleSubmit,
        reset,
       
      } = useForm({
        mode: "onSubmit"
      });
      const connect = (data) => {
        
         console.log(data)
          reset()
      }

    return(
        <div className={s.form}>
            <div className={s.inputs_container}>
                <form onSubmit={handleSubmit(connect)} >
                    <div className={s.yourName}>
                        <div>
                            <p>
                            Ваше имя
                            </p>
                            <input {...register ('name')} required type="text" />
                        </div>
                        <div>
                            <p>
                            Ваш e-mail
                            </p>
                            <input {...register ('mail')} required type="email" />
                        </div>
                    </div>
                    <div className={s.textarea}>
                        <p>Сообщение</p>
                        <textarea  id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className={s.file}>
                        <label htmlFor="file"> Прикрепить файл</label>
                        <input {...register ('file')} id={'file'} type="file"  />
                        <button type='submit'>Отправить</button>
                    </div>
                </form>  
            </div>
            <div>
                    <div>
                            <div>
                                
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                    </div>
                    <div>

                    </div>
            </div>
        </div>
    )
}