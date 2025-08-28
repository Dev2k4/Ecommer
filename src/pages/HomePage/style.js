import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div
`
    display: flex;
    align-items: center;
    gap : 4px;
    justify-content: flex-start;
`
export const WrapperButton = styled(ButtonComponent)
`
    &:hover {
        background-color: #fff !important;
        border: 1px solid #1561bf !important;
        span {
        color: #1561bf !important;
        }
  
`
export const WrapperProduct= styled.div
`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 14px;
    margin-top: 12px;
`