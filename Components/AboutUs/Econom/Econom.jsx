import s from './Econom.module.scss'
import item from '../../../fake-data/econom.json'
import IMG from '../../IMG/IMG'
export default function Econom() {

    return(

        <div className ={s.econom}>
            <h3>Мы поможем сэкономить время, силы и деньги!</h3>
                <div className = {s.container}>
                    {item.map((info,idx) => (
                        <div className = {s.card} key={`economN${idx}`}>
                                <div>
                                    <IMG src={'/img/icons/tick.svg'} alt={'tick'}/>
                                </div>
                                <div className ={s.text}>
                                        <h2>
                                            {info.title}
                                        </h2>
                                        <p>
                                            {info.body}
                                        </p>
                                </div>
                        </div>
                    ))}
                </div>
              <h4>
                На чем мы не экономим?
                <br />
                На вашем комфорте и качестве мебели!
              </h4>
               
        </div>
    )
} 