import Layout from './../../Components/Layout/Layout';
import {  useState } from 'react';
import HitsCard from './../../Module/HitsCard/HitsCard';
import s from '../../styles/catalog.module.scss'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import types from '../../fake-data/furniture-type.json'
import {  Slider } from '@mui/material';
import IMG from './../../Components/IMG/IMG';
import item from '../../fake-data/catalog.json'




export default function Catalog() {
    const router = useRouter()
    
    const filter = ['По убыванию цены','По возрастанию цены','По популярности']
    const copy = [...item]
    const trueCategories = []
    const[open,setOpen] = useState(false)
    const [goods,setGoods] = useState(copy)
    console.log(goods)
    const [type,setType] = useState(router.query.title )
    const[category,setCategory] = useState(router.query.category)
    const[categories,setCategories] = useState([])
    const[price,setPrice] = useState([0,30])
    const [sort,setSort] = useState('Сортировать')
    const[value,setvalue] = useState(0)
    const handleChange = (event, newValue) => {
        setPrice(newValue);
        
      };
   
    const timly = []
   useEffect(()=> {
    
    for (let i = 0; i < copy.length; i++) {
        if (price && copy[i].newPrice > price[0] * 1000 &&  copy[i].newPrice < price[1] * 1000  ) {

            timly.push(copy[i])
        }
        setGoods(timly)
     
    }
   },[price])
   useEffect(()=> {
    for (let i = 0; i < types.length; i++) {
        if (type && types[i].type === type.toString() ) {

            trueCategories.push(types[i])
        }
    }
    setCategories(trueCategories)
  
   },[type])
   useEffect(()=> {
    setType(router.query.title && router.query.title)
    setCategory(router.query.category && router.query.category)
   },[router.query.title , router.query.category])

   useEffect(()=> {
    setGoods(type && copy.filter((i) => i.tags.includes(type)  && i.tags.includes(category)))
    if(type === 'Выберите Раздел') {
        setGoods(item)
    }
    if(category === "Выберите Категорию") {
        if (type ==='Выберите Раздел') {
            setGoods(item)
        }
        else {
            setGoods(item.filter((i) => i.tags.includes(type)))
        }
        
    }
   if (!category ) {
    setGoods(item.filter((i) => i.tags.includes(type)))
   }
   },[type , category])
   useEffect(() => {
    if(!category && !type) {
        setGoods(copy)
    }
   },[])
   const sortbyPrice = (array) => array.sort((a,b)=> a.newPrice-b.newPrice)
   const sortbyId = (array) => array.sort((a,b)=> a.id-b.id)
   useEffect(() => {
    if (sort ==='По возрастанию цены') {
        
            setGoods(sortbyPrice(goods))
            setvalue(1)
         
    }
    if (sort === "По убыванию цены") {
        setGoods(sortbyPrice(goods).reverse())
        setvalue(3)
        
       
    }
    if (sort === "По популярности") {
        sortbyId(goods)
        setvalue(2)
       
    }
   },[sort])
    
 
    return(
        <Layout title={'Каталог'}>
            <div className={`${s.catalog} container`}>
                <div className={s.filters}>
                    <div>
                        <h2>Раздел</h2>
                        <div className={s.selects}>
                            <select value={type}  onChange={(e)=> setType(e.target.value)} >
                                <option>Выберите Раздел</option>
                                {types.map((info,idx) => (

                                    <option key={`TypeOfFurniture${idx}`}>
                                        {info.type}
                                    </option>
                                ))}

                                
                            </select>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option>Выберите Категорию</option>
                                {categories.length && categories[0].categories.map((info,idx) => (
                                    <option key={`categoriesMN${idx}`}>
                                        {info}
                                    </option>
                                ))}
                            </select>
                            
                        </div>
                     </div>
                     <div className={s.price}>
                        <h2>Цена</h2>
                        <div>
                            <Slider
                            max={30}
                            value={price}
                            onChange={handleChange}
                            valueLabelDisplay="off"
                            
                            />
                        <div className={s.price_container}>  
                            <div>
                                <p>{price[0] * 1000}</p>
                            </div>
                                 <hr/>
                            <div>
                                <p>{price[1] * 1000}</p>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                            
                </div>
                <div onClick ={()=> setOpen(!open)} className ={s.goodsList}>
                    <div className={s.sort}>
                        <p>{sort}</p>
                        <IMG src={'/img/icons/sort.svg'}/>
                       
                    </div>
                    <div className={s.parent}>  
                        {open && 
                            <div className={s.absolute}>
                                {filter.map((info,idx) => (
                                    <div onClick ={() => setSort(info)} key={`sortN${idx}`}>
                                        <p>{info}</p>
                                    </div>    
                                ))}
                            </div>    
                            }
                    </div>    
                    <div className={s.container}>
                    {goods && goods.map((info,idx) => (
                        <HitsCard
                        onClick = {() => router.push(`/catalog/item/${info.name}`)}
                        key ={`GoodsItem${idx + 1}`}
                        name={info.name}
                        type={info.type}
                        oldPrice={info.oldPrice}
                        newPrice={info.newPrice}
                        img={info.img}
                        discount={info.discount}
                        size={info.size}
                        info={info}
                        />

                    ))}
                  </div>  
                </div>
            </div>
        </Layout>
    )
}