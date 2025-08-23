import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({size, styleButton, variant, styleTextButton, textButton, ...props}) => {
  return (
    <div>
        <Button
            size={size} 
            style={styleButton}
            variant={variant} 
            {...props}
            >
            <span style={styleTextButton}>{textButton}</span> 
        </Button>
    </div>
  )
}

export default ButtonComponent