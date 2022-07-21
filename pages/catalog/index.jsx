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
import CloseIcon from '@mui/icons-material/Close';



export default function Catalog() {
    const router = useRouter()
    
    const filter = ['По убыванию цены','По возрастанию цены','По популярности']
    const copy = [...item]
    const trueCategories = []
    const[open,setOpen] = useState(false)
    const [goods,setGoods] = useState(router.query.title ? item.filter((i) => i.tags.includes(type)) : (router.query.category ? copy.filter((i) => i.tags.includes(type)  && i.tags.includes(category) ): copy ) )
    const [Pricefilter,setPricefilter] = useState(copy)
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
    console.log(router.query)
    useEffect(() => {
        setPricefilter(item.filter((i) => i.tags.includes(type)))
    },[type])
    useEffect(() => {
        setPricefilter(copy.filter((i) => i.tags.includes(type)  && i.tags.includes(category)))
    },[category])
    useEffect(() => {
        setPricefilter(goods)
    },[sort])
   useEffect(()=> {
    for (let i = 0; i < Pricefilter.length; i++) {
        if (price && Pricefilter[i].newPrice > price[0] * 1000 &&  Pricefilter[i].newPrice < price[1] * 1000  ) {

            timly.push(Pricefilter[i])
        }
      
        
    }
        if (sort === 'По возрастанию цены') {
        setGoods(sortbyPrice(timly))
       }
       else if (sort === 'По убыванию цены') {
        setGoods(sortbyPrice(timly).reverse())
       }
       else if (sort === 'По возрастанию цены') {
        setGoods(sortbyId(timly))
       }

    else  setGoods(timly)
        
   },[price])
   useEffect(()=> {
    for (let i = 0; i < types.length; i++) {
        if (type && types[i].type === type ) {

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
    
    if(category === "Выберите Категорию") {
        if (type ==="Выберите Раздел") {
            
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
   useEffect(() => {
    if(type === 'Выберите Раздел') {
        setGoods(item)
    }
   },[type])
   const sortbyPrice = (array) => array.sort((a,b)=> a.newPrice-b.newPrice)
   const sortbyId = (array) => array.sort((a,b)=> a.id-b.id)
   useEffect(() => {
    if (sort ==='По возрастанию цены') {
        
            setGoods(sortbyPrice([...goods]))
            setvalue(1)
         
    }
    if (sort === "По убыванию цены") {
        setGoods(sortbyPrice([...goods]).reverse())
        setvalue(3)
        
       
    }
    if (sort === "По популярности") {
        const CopyId = [...goods]
        sortbyId(CopyId)
        setvalue(4123)
       
    }
   },[sort])
    const [mobileFilters,setMobileFilters] = useState(false)
   const OpenMobileFilters = ()=> {
    setMobileFilters(true)
   }
   const CloseMobileFilters = ()=> {
    setMobileFilters(false)
   }
   const ToggleSort = () => {
    setOpen(!open)
   }
   const CloseSort = () => {
    setOpen(false)
   }
    return(
        <Layout title={'Каталог'}>
            <div className={`${s.catalog} container`}>
                <div onClick ={CloseSort} className={s.filters}>
                    <div>
                        <h2>Раздел</h2>
                        <div className={s.selects}>
                            <select value={type}  onChange={(e)=> setType(e.target.value)} >
                                <option value={null}>Выберите Раздел</option>
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
                <div  className ={s.goodsList}>
                  <div className={s.sortContainer}>  
                    <div onClick ={ToggleSort}  className={s.sort}>
                        <p>{sort}</p>
                        <IMG src={'/img/icons/sort.svg'}/>
                       
                    </div>
                    <div className={s.mobileFilterButton}>
                        <button onClick={OpenMobileFilters}>Фильтр</button>
                    </div>    
                  </div>  
                    
                    <div onClick ={CloseSort} className={s.parent}>  
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
                    <div onClick ={CloseSort} className={s.container}>
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
            {mobileFilters &&<div>
            <div className={s.mobileFiltersContainer}  onClick ={CloseSort} >
                    <div className={s.mobileFiltersTitle}>
                        <p>Фильтр</p>
                        <CloseIcon onClick ={CloseMobileFilters} className={s.closeIcon}/>
                    </div>    
                    <div className={s.mobileFilters}>
                        <h2>Раздел</h2>
                        <div className={s.selects}>
                            <select value={type}  onChange={(e)=> setType(e.target.value)} >
                                <option value={null}>Выберите Раздел</option>
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
                     <div className={s.MobilePrice}>
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
            </div>}
        </Layout>
    )
}