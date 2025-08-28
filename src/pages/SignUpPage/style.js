import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from 'antd'

export const WrapperContainerLeft = styled.div
`
    flex: 0.65;
    padding: 40px;
    display: flex;
    flex-direction: column;
    p {
     color: rgba(125, 138, 153, 1);
    }
`
export const WrapperContainerRight = styled.div
`
    flex: 0.35;
    height: 100%;
    background-color: rgb(222,235,255);
    display: flex;
    flex-direction: column;
    justify-content: center; 
    text-align: center;
    align-items: center;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    p.Text_under_logo_bold{
        color: rgba(63, 137, 255, 1);
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 5px;
    }
    p.Text_under_logo_basic{
        color: rgb(11,105,255);
        margin-top: 0;
    }
`

export const WrapperSignInButton = styled(ButtonComponent)
`   
    &:hover{
        background-color: rgba(253, 67, 80, 0.81) !important;
    }
`
export const WrapperTextSignIn = styled.span
`
    color: rgb(32,110,200);
    font-size: 14px;
    margin-bottom: 30px;
    &:hover{
        cursor: pointer;
    }
`
export const WrapperIconSignUp = styled(Image)
`   
    &:hover{
        cursor: pointer;
    }
`

export const WrapperCloseBtn = styled.div
`   position: absolute;
    right: -15px;
    top: -15px;
    z-index: 10;
    border: 1px solid #000;
    border-radius: 90px;
    &:hover{
        cursor: pointer;
    }
`
