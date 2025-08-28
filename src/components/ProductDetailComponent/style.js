import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export const WrapperSmallImage = styled(Image)
`
    padding: 5px !important;
    aspect-ratio: 1/1 !important;
    width: 100% !important; 
    height: auto !important;


`
export const WrapperColImage = styled(Col)
`

    display: flex !important;
    justify-content: space-between !important;

`
export const WrapperNameProduct = styled.span
`
    margin: 0px;
    color: rgb(39, 39, 42);
    font-size: 40px;
    line-height: 150%;
    word-break: break-word;
    white-space: break-spaces;
`
export const WrapperTextSelled = styled.span
`   margin: 0 8px;
    font-size: 14px;
    line-height: 24px;
    color: rgba(85, 84, 84, 1);
`
export const WrapperNumberEvaluate = styled.span
`   margin: 0 8px;
    font-size: 14px;
    line-height: 24px;
    color: rgba(34, 34, 34, 1);
`
export const WrapperTextPrice = styled.span
`
    font-size: 30px;
    color: rgba(255, 0, 0, 1);
    font-weight: 500;
    margin: 8px 0;
    font-weight: bold;
`
export const WrapperDiscount = styled.div
`
    background: rgba(173, 168, 168, 1);
    text-align: center;
    padding: 5px;
    border-radius: 6px;
`
export const WrapperTextDiscount = styled.span
`
    margin-left: 4px;
    font-size: 13px;
    color: rgba(44, 44, 44, 1);
    font-weight: 500;
`
export const WrapperTextOldPrice = styled.span
`
    margin: 8px;
    font-size: 20px;
    line-height: 24px;
    color: rgb(120, 120, 120);
    text-decoration: line-through;
`

export const WrapperTextAdress = styled.div
`
    span.adress{
        margin: 3px;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
        color: rgba(24, 24, 24, 1);
        text-decoration: underline;
    };
    span.change_adress{
        margin: 2px;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        color: rgba(85, 150, 247, 1);
    }
`
export const WrapperQuantyProduct = styled.div
`
    display: flex;
    gap: 4px;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 120px;
    justify-content: space-around;
`
export const WrapperBtnQuantyProduct = styled.button
`
    padding: 0 3px;
    border: none;
    background: #fff;
`
export const WrapperInputNumber = styled(InputNumber)
`
   &.ant-input-number.ant-input-number-sm{
        width: 40px !important;
        border-radius: 0px;
        border-top: none;
        border-bottom: none;
   }
`
export const WrapperBuyButton = styled(ButtonComponent)
`
    &:hover{
        background-color: #fff !important;
        border: 1px solid rgba(255, 0, 17, 1) !important;
        span{
            color: rgb(255,57,69) !important;
            font-weight: bold;
        }
    }
`
export const WrapperLoanButton = styled(ButtonComponent)
`   
    &:hover{
        background-color: #292dffff !important;
        span{
            color: rgba(255, 255, 255, 1) !important;
            font-weight: bold;
        }
    }
`