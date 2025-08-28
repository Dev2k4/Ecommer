import React from 'react'
import { WrapperContent, WrapperLableText, WrapperPrice, WrapperRateText, WrapperTextValue } from './style'
import { Checkbox, Col, Rate, Row } from 'antd'

const NavBarComponent = () => {
    const renderContent = (type, options) => {
        switch(type){
            case 'text':
                
                return options.map((option) => {
                    
                        return (
                            <WrapperTextValue>{option}</WrapperTextValue>
                            )
        
                })
            case 'checkbox':
                return (
                    <>
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {options.map((option)=>{    
                            return(
                                <>
                                <Checkbox value={option.value}>{option.lable}</Checkbox>
                                </>
                            )
                            
                        })}
                    </Checkbox.Group>
                    </>
                )
            case 'star':
                return options.map((option)=>{    
                    return(
                        <div style={{display: 'flex', alignItems: 'center', gap: '5px', marginBottom: 9}}>
                            <Rate style={{fontSize: 12}} disabled defaultValue={option} />
                            <WrapperTextValue>Tu {option} sao</WrapperTextValue>

                        </div>
                    )
                })
                case 'price':
                
                return options.map((option) => {
                    
                        return (
                            <WrapperPrice><WrapperTextValue>{option}</WrapperTextValue></WrapperPrice>
                            )
        
                })
            default:
                return{}

        }
    }
  return (
    <div style={{backgroundColor: '#fff', height: '100%', padding: 10}}>
        <WrapperLableText>Lable</WrapperLableText>
        <WrapperContent>
            {renderContent('text', ['Tu lanh', 'Tv', 'May giat'])}
        </WrapperContent>
        
    </div>
  )
}

export default NavBarComponent