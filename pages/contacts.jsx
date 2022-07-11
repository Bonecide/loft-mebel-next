
import Link from 'next/link';
import Layout from './../Components/Layout/Layout';
import s from '../styles/contacts.module.scss'
import Form from '../Module/Form/Form';
import Map from '../Components/map/Map';
export default function Contacts() {

    return(

        <Layout title={"Контакты"}>
         <div className='container'>
           <div className={s.crumb}>
                <Link href={'/'}>
                    <a>Главная</a>
                </Link>
            <p>/</p>
            <Link href={'/contacts'}>
               <a> Контакты </a>
            </Link>
           </div>
           <h2 className={s.title}>Свяжитесь с нами</h2>
           <Form/>
           <Map/>
           </div>     
        </Layout>
    )
}