import { Input } from 'antd'
import React, { useState } from 'react'
import { WrapperInput } from './style'
const InputFormComponent = (props) => {
  const [valueInput, setValueInput] = useState('')
  const {placeholder, ...rests} = props
  return (
    <div>
        <WrapperInput placeholder={placeholder} value={valueInput} onChange={(e)=>{setValueInput(e.target.value)}} {...rests}/>
    </div>
  )
}

export default InputFormComponent