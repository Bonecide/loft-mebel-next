import AccForm from '../../../Module/AccForm/AccForm'
import s from './MainInfoAcc.module.scss'
import PersonalInfo from './../../../Module/PersonalInfo/PersonalInfo';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function MainInfoAcc() {
    const info = useSelector((state) => state.personal.info);

    const [isChange,setIsChange] = useState(info.length ? false : true)
    return(

        <div className='container'>
            {!isChange ? <PersonalInfo change={setIsChange}/> : <AccForm change={setIsChange}/> }
            
            
        </div>
    )
}