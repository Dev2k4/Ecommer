import React from 'react'
import { Badge, Col } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import {CaretDownOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
const onSearch = (value, _e, info) => console.log(info?.source, value);
const HeaderComponent = () => {
  return (
    <div>
        <WrapperHeader>
            <Col span={4}>
                <WrapperTextHeader>Ecommer</WrapperTextHeader>
            </Col>
            <Col span={13}>
                <ButtonInputSearch
                    size='large'
                    placeholder= 'nhập tên sản phẩm'
                    variant= 'borderless'
                    backgroundColorButton='#2872c7ff'
                    colorButton= '#fff'
                    backgroundColorInput= '#fff'
                    textButton='Tìm kiếm'
                    styleTextButton='{{}}'
                />
            </Col>
            <Col offset={1} span={6}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: 30, padding: 5}}/>   
                    <div>
                        <span><a href="/">Đăng ký</a>/<a href="/" >Đăng nhập</a></span>
                        <div>
                            <WrapperTextHeaderSmall>Tài khoản<CaretDownOutlined /></WrapperTextHeaderSmall>
                        </div>
                    </div>
                    <Badge count={4}>
                        <ShoppingCartOutlined style={{color:'#fff' ,fontSize: 35, padding: 5}}/>  
                    </Badge>
                    <a href="/order">Giỏ hàng</a> 
                    
                </WrapperHeaderAccount>
            </Col>
        </WrapperHeader>
    </div>
  )
}

export default HeaderComponent