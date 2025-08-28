import React from 'react'
import { WrapperCloseBtn, WrapperContainerLeft, WrapperContainerRight, WrapperIconSignUp, WrapperSignInButton, WrapperTextSignIn } from './style'
import { Badge, Image } from 'antd'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { CloseCircleOutlined } from "@ant-design/icons";
import logo from "../../assets/images/sign_in.png"

const SignUpPage = () => {
  return (
    <div  style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height: '700px'}}>
      <div  style={{display: 'flex',  width: 800, height: 450, border: '1px solid #8d8d8dff', borderRadius: '15px', position: 'relative'}}>
          <WrapperContainerLeft>
              <h2 style={{marginTop: 0,marginBottom:0,  fontSize: 24, fontWeight: '600'}}>Xin chào,</h2>
              <p style={{fontSize: 15, color: '#000'}}>Đăng nhập hoặc Tạo tài khoản</p>
              <InputFormComponent placeholder="Số điện thoại" style={{marginBottom: '10px', fontSize: '25px'}}/>
              <div style={{margin: '20px 0'}}>
                <WrapperSignInButton
                  type="outlined"
                  size='large'
                  styleButton={{
                      backgroundColor: 'rgb(255,57,69)',
                      border: '1px solid rgba(255, 255, 255, 1)',
                      borderRadius: 7,
                      width: '100%',
                      height: '100%',
                  }}
                  variant="borderless"
                  textButton="Tiếp tục"
                  styleTextButton={{
                      color: '#fff', 
                      fontSize: '14px',
                      fontWeight: 600,
                      padding: 10
                  }}
                />
              </div>  
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <WrapperTextSignIn>Đăng nhập bằng Email</WrapperTextSignIn>
                <p>Hoặc tiếp tục bằng</p>
                <div style={{display: 'flex', justifyContent: 'space-around', width:'130px'}}>
                  <WrapperIconSignUp src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" height={50} width={50} preview={false}/>
                  <WrapperIconSignUp src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" height={50} width={50} preview={false}/> 
                </div>
           </div>
         </WrapperContainerLeft>
          <WrapperContainerRight>
              <Image src={logo} preview={false} height={200} width={200}/>
              <p className="Text_under_logo_bold">Mua sắm tại Mall Pack</p>
              <p className="Text_under_logo_basic">Siêu ưu đãi mỗi ngày</p>
          </WrapperContainerRight>
          <WrapperCloseBtn>
            <Image src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png" height={40} width={40} preview={false}/>
          </WrapperCloseBtn>
      </div>
  </div>
  )
}

export default SignUpPage