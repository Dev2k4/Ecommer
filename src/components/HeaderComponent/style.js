import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)
`
    align-items: center;
    padding: 10px 70px;
    gap: 16px;
    background-color: #2596be;
    flex-wrap: nowrap;
`
export const WrapperTextHeader = styled.span
`
    font-size: 18px;
    color: white;
    text-align: left;
`
export const WrapperTextHeaderSmall = styled.span
`
    font-size: 12px;
    color: white;
    text-align: left;
`
export const WrapperHeaderAccount = styled.div
`   
    display: flex;
    padding: 6px;
    align-items: center;
    color: #fff;
    white-space: nowrap;
    gap: 10px;
        a{
            font-size: 12px;
            color: #fff;
            text-decoration: none;
            &:hover{
                color: #873e23;

            }

        }
`