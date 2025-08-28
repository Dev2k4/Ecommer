import React from 'react'
import { StarFilled } from '@ant-design/icons';
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style';
const CardComponent = () => {
  return (
    
    <div>
    <WrapperCardStyle
    hoverable
    style={{ width: 184}}
    styles= {{
        header:{width: '180px', height: '180px'},
        body:{padding: 10}
    }}
    cover={<img alt="example" src="https://cdn2.cellphones.com.vn/insecure/rs:fill:356:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png" />}>
    <StyleNameProduct>Iphone</StyleNameProduct>    
    <WrapperReportText>
        <span>
            <span>4.5</span><StarFilled style={{fontSize: 11, color: '#f0c955ff'}}/>
        </span>
        <span>|Da ban 1000+</span>
    </WrapperReportText>
    <WrapperPriceText>
        19.000.000 VND<WrapperDiscountText>-24%</WrapperDiscountText>  
    </WrapperPriceText>


    
  </WrapperCardStyle>
    </div>
  )
}

export default CardComponent