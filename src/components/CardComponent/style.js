import { Card } from "antd"
import styled from "styled-components"
export const StyleNameProduct = styled.div
`
    font-weight: 400;
    font-size: 12px;
    line-weight: 16;
    color: rgb(56,56,61);
`
export const WrapperReportText = styled.div
`
    font-size: 11px;
    color: rgb(128,128, 132);
    display: flex;
    margin: 6px 0;


`
export const WrapperPriceText=styled.div
`
    font-size: 15px;
    color: rgba(232, 110, 94, 1);
    font-weight: 500;
    margin: 8px 0;
    
`
export const WrapperDiscountText=styled.span
`  
    margin-left: 5px;
    font-size: 13px;
    color: rgba(232, 110, 94, 1);
    font-weight: 500;
`
export const WrapperCardStyle = styled(Card)
`
    width: 180px;
    & img{
        height: 180px;
        width: 180px;
    }
`