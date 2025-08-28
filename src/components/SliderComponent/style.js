import Slider from "react-slick";
import styled from "styled-components";

export const WrapperSliderStyle = styled(Slider)
`
    & .slick-arrow.slick-prev{
        left: 12px !important;
        top: 50% !important;
        z-index: 10 !important;
        &::before{
            font-size: 40px !important;
            color: #fff !important;
        }
    }
    & .slick-arrow.slick-next{
        right: 28px !important;
        top: 50% !important;
        z-index: 10 !important;
        &::before{
            font-size: 40px !important;
            color: #fff !important;
        }
    }
    & .slick-dots{
        z-index: 10;
        bottom: -2px;    
    }

`