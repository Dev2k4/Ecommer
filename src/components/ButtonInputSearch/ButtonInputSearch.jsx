import { SearchOutlined } from '@ant-design/icons';
import React from 'react'
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const {size, placeholder, variant, backgroundColorButton,colorButton, backgroundColorInput, textButton} = props
    console.log(props)
  return (
    <div style={{display: 'flex', width: '100%'}}>

        <InputComponent
            size={size} 
            placeholder={placeholder} 
            variant={variant} 
            style={{backgroundColor: backgroundColorInput}}>
        </InputComponent>

        <ButtonComponent
            size={size} 
            style={{background: backgroundColorButton}}
            variant={variant} 
            icon={<SearchOutlined  color={colorButton} style={{color: '#fff'}}/>}
            textButton = {textButton}
            styleTextButton={{color: colorButton}}
            >
        </ButtonComponent>
    </div>
  )
}

export default ButtonInputSearch