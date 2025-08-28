import Input from "antd/es/input/Input";
import styled from "styled-components";

export const WrapperInput = styled(Input)
`
    margin-bottom: 10px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-radius: 0px;
    border-bottom: 1px solid;
    &:focus{
        background-color: #fff7f7ff;
    }
`