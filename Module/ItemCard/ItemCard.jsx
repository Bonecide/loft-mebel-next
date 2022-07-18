import Slider from 'react-slick'
import IMG from '../../Components/IMG/IMG'
import s from './ItemCard.module.scss'
import { useState, useEffect } from 'react';
import  Link  from 'next/link';
import { AddBasket } from '../../store/Slices/basketSlice';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { increment } from '../../store/Slices/priceSlice';
export default function ItemCard({info}) {
    const dispatch = useDispatch()
    const [image,setImage] = useState(0)
    useEffect(()=> {
        setImage(0)
    },[info.images])
    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,

      };
      const addBasket = () => {
        dispatch(AddBasket({...info , date: dayjs().format('DD.MM.YYYY')}))
        dispatch(increment(info.newPrice))
      }
    return(
        <div className={s.container}>
                        <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
                <div className={s.firstcolumn}>
                    <div className ={s.mainImage}>
                        <IMG src ={info.images[image]}/>
                    </div>
                    <div className={s.slider}>
                        <Slider {...settings} >
                            {info.images.map((info,idx) => (
                                <div onClick={() => {setImage(idx)}} key={`dfsdfjasdfahewrN${idx} `}>
                                    
                                    <IMG 
                                    src={info}
                                    />
                                </div>
                            ))}

                        </Slider>
                    </div>
                </div>
                <div className={s.secondcolumn}>
                    <div className={s.name}>
                        <h2>{info.name}</h2>
                    
                        <Link href={'#'}>
                            <a>
                                {info.type}
                            </a>
                        </Link>
                    </div>
                    <div className={s.buy}>
                            <h3>
                                {info.newPrice}₽
                            </h3>
                            <button onClick={addBasket}>Купить</button>
                    </div>
                    <div className={s.quality}>
                        <div>
                            <p>Цвет</p>
                            <div style={{"background" : info.color}}/>
                        </div>
                        <div>
                            <p>Количество</p>
                            <div>
                                <p>1</p>
                            </div>
                        </div>
                        <div>
                            <p>Размер (Д x Ш x В)</p>
                            <div className={s.size}>
                            {info.size.map((info,idx) => (
                            <p className={s.sizeValue} key={`fdsfjasdfawrtnkjklskdfN${idx}`}>
                                {info.width} x {info.deep} x {info.height}
                            </p>
                            ))}
                            </div>
                        </div>
                       
                    </div>
                    <div className={s.description}>
                            <h3>Описание</h3>
                            <div>
                                <p>{info.description}</p>
                            </div>
                        </div>
                </div>
        </div>
    )
}