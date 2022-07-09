import Slick from "react-slick";
import SliderCard from "../../Module/SliderCard/SliderCard";
import s from './Slider.module.scss'
export default function Slider(){
    
    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed : 5000,
        fade: true,

      };
    return(
        <div>
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
            <Slick {...settings} className={s.Slider}>
                <SliderCard/>
                <SliderCard/>
            </Slick>
        </div>
    )
}