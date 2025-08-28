import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButton, WrapperProduct, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/Slider1.webp'
import slider2 from '../../assets/images/Slider2.webp'
import slider3 from '../../assets/images/Slider3.webp'
import slider4 from '../../assets/images/Slider4.webp'
import slider5 from '../../assets/images/Slider5.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
const HomePage = () => {
  const arr = ['TT', 'Tu Lanh', 'Laptop']
  return (
    <>
    <div style={{padding: '0 70px', margin: '0 auto',  width: '1270px'}}>
      <WrapperTypeProduct>
      {arr.map((item) => {
        return(
          <TypeProduct key={item} name={item} />
        )
      })}
    </WrapperTypeProduct>
    </div>

    <div id ="container" style={{backgroundColor: '#EBEFF3', padding: '0 70px', height: '100%'}}>
      <SliderComponent arrImages = {[slider1, slider2, slider3, slider4, slider5]}/>
      <WrapperProduct>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </WrapperProduct>
      <div  style={{display: 'flex', justifyContent:'center'}}>
          <WrapperButton
          type="outline" 
          size='large' 
          styleButton={{
            border: '1px solid rgb(1,1,1)',
            color: 'rgb (11,116,229)',
            width: '240px',
            height: '45px',
            borderRadius: '4px',
            backgroundColor: '#1561bf',
            marginTop: '15px'
          }}
          variant="primary"
          styleTextButton={{
            color: 'rgba(255, 255, 255, 1)',
            fontSize: '18px',
            fontWeight: '500'
          }}
          textButton = "Xem thêm"/>
      </div>
      
    </div>
    </>
  )
}

export default HomePage