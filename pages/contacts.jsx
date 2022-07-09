
import Link from 'next/link';
import Outlet from './../Components/Outlet/Outlet';
import s from '../styles/contacts.module.scss'
import Form from '../Module/Form/Form';
export default function Contacts() {

    return(

        <Outlet title={"Контакты"}>
           <div className={s.crumb}>
                <Link href={'/'}>
                    <a>Главная</a>
                </Link>
            <p>/</p>
            <Link href={'/contacts'}>
               <a> Контакты </a>
            </Link>
           </div>
           <Form/>
        </Outlet>
    )
}