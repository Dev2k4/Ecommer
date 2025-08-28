import {Image} from 'antd'
import Slider from "react-slick";

import React from 'react'
import { WrapperSliderStyle } from './style';

const SliderComponent = ({arrImages}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        }
  return (
 
    <WrapperSliderStyle {...settings}>
        {arrImages.map((image) => {
            return(
                <Image src = {image} alt="slider" preview={false} width="100%" height={400} />
            )
        })}
    </WrapperSliderStyle>

        
)
}

export default SliderComponent