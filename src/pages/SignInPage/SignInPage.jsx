import React, { useState } from 'react'
import logo from "../../assets/images/sign_in.png"
import { WrapperCloseBtn, WrapperContainerLeft, WrapperContainerRight, WrapperSignInButton, WrapperTextSignIn } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { Image } from 'antd'
import { EyeOutlined, EyeInvisibleOutlined, CloseCircleOutlined} from '@ant-design/icons';
import Password from 'antd/es/input/Password'
const SignInPage = () => {
  const [isShowPassword, setIshowPassword] = useState(false)
  return (
  <div  style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height: '700px'}}>
    <div  style={{display: 'flex',  width: 800, height: 450, border: '1px solid #000', borderRadius: '15px', position: 'relative'}}>
        <WrapperContainerLeft>
            <Image src="https://salt.tikicdn.com/ts/upload/0b/43/2f/7c7435e82bce322554bee648e748c82a.png" width={32} height={32} preview={false} />
            <h2 style={{marginTop: 40,marginBottom:0,  fontSize: 24, fontWeight: '600'}}>Đăng nhập bằng email</h2>
            <p style={{fontSize: 15, color: '#000'}}>Nhập email và mật khẩu tài khoản Mall</p>
            <InputFormComponent placeholder="Nhập tên hoặc số điện thoại" style={{marginBottom: '10px'}}/>
            
            <div style={{position: 'relative'}}>
                <span style={{
                  zIndex: 10,
                  position: 'absolute',
                  top: 4,
                  right: 8,

                }} onClick={()=>{setIshowPassword(!isShowPassword)}}
                >
                  {isShowPassword ? (<EyeOutlined />) : (<EyeInvisibleOutlined />)}
                </span>     
              <InputFormComponent placeholder="Nhập mật khẩu" type={isShowPassword ? "text":"password"}/>    
            </div>
            
            <div style={{margin: '20px 0'}}>
              <WrapperSignInButton
                type="outlined"
                size='large'
                styleButton={{
                    backgroundColor: 'rgb(255,57,69)',
                    border: '1px solid rgba(255, 255, 255, 1)',
                    borderRadius: 7,
                    width: 200,
                    height: '100%',
                }}
                variant="borderless"
                textButton="Đăng nhập"
                styleTextButton={{
                    color: '#fff', 
                    fontSize: '14px',
                    fontWeight: 600,
                    padding: 10
                }}
              />
            </div>
            <WrapperCloseBtn>
              <Image src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png" height={40} width={40} preview={false}/>
            </WrapperCloseBtn>

            <WrapperTextSignIn>Quên mật khẩu?</WrapperTextSignIn>
            <p style={{marginTop: '7px', fontSize: 15}}>Chưa có tài khoản? 
              <WrapperTextSignIn>Tạo tài khoản</WrapperTextSignIn>
            </p>
            </WrapperContainerLeft>

            <WrapperContainerRight>
                <Image src={logo} preview={false} height={200} width={200}/>
                <p className="Text_under_logo_bold">Mua sắm tại Mall Pack</p>
                <p className="Text_under_logo_basic">Siêu ưu đãi mỗi ngày</p>
            </WrapperContainerRight>
    </div>
  </div>
    
  )
}

export default SignInPage