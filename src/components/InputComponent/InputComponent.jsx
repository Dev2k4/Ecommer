import {Input } from 'antd'
import React from 'react'

const InputComponent = ({size, placeholder, variant, style, ...rest}) => {
  return (
    <div style={{flex: 1}}>
        <Input
            size={size} 
            placeholder={placeholder} 
            variant={variant} 
            style={style}
            {...rest}
            >
        </Input>   
    </div>
  )
}

export default InputComponent
