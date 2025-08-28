import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons';
import big from "../../assets/images/big.webp"
import small from "../../assets/images/small.webp"
import { WrapperBtnQuantyProduct, WrapperBuyButton, WrapperColImage, WrapperDiscount, WrapperInputNumber, WrapperLoanButton, WrapperNameProduct, WrapperNumberEvaluate, WrapperQuantyProduct, WrapperSmallImage, WrapperTextAdress, WrapperTextDiscount, WrapperTextOldPrice, WrapperTextPrice, WrapperTextSelled } from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const ProductDetailComponent = () => {
    const onChange = () => {}
  return (
        <Row style={{padding: 16, background:'#fff'}}>
            <Col span={10}>
                <Image src={big} alt="Big" preview = {false}/>
                <Row style={{paddingTop: 10}}> 
                    <WrapperColImage span={4}>
                        <WrapperSmallImage src={small} alt="Small" preview = {false} />
                    </WrapperColImage>

                    <WrapperColImage span={4}>
                        <WrapperSmallImage src={small} alt="Small" preview = {false} />
                    </WrapperColImage>

                    <WrapperColImage span={4}>
                        <WrapperSmallImage src={small} alt="Small" preview = {false} />
                    </WrapperColImage>

                    <WrapperColImage span={4}>
                        <WrapperSmallImage src={small} alt="Small" preview = {false} />
                    </WrapperColImage>

                    <WrapperColImage span={4}>
                        <WrapperSmallImage src={small} alt="Small" preview = {false} />
                    </WrapperColImage>

                    <WrapperColImage span={4}>
                        <WrapperSmallImage src={small} alt="Small" preview = {false} />
                    </WrapperColImage>
                </Row>
            </Col>

            <Col span={14} style={{paddingLeft: '20px', borderLeft: '1px solid #e0e0e0ff'}}>
                <WrapperNameProduct>Apple iphone 16</WrapperNameProduct>
                <div style={{display: 'flex', alignItems: 'center', paddingTop: '10px'}}>
                    <WrapperNumberEvaluate>5.0</WrapperNumberEvaluate>
                    <StarFilled style={{fontSize: 15, color: '#f0c955ff'}}/>
                    <StarFilled style={{fontSize: 15, color: '#f0c955ff'}}/>
                    <StarFilled style={{fontSize: 15, color: '#f0c955ff'}}/>
                    <StarFilled style={{fontSize: 15, color: '#f0c955ff'}}/>
                    <StarFilled style={{fontSize: 15, color: '#f0c955ff'}}/>

                    <WrapperTextSelled>(36 đánh giá)</WrapperTextSelled>
                    <span>|</span>
                    <WrapperTextSelled>Đã bán 80</WrapperTextSelled>
                </div>
                <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#f5f4f45d'}}>
                    <WrapperTextPrice> 18.900.000<sup>đ</sup></WrapperTextPrice>
                    <WrapperDiscount>
                        <WrapperTextDiscount> -17% </WrapperTextDiscount>
                    </WrapperDiscount>
                    <WrapperTextOldPrice> 22.000.000<sup>đ</sup> </WrapperTextOldPrice>
                </div>
                <WrapperTextAdress>
                    <span>Giao đến</span>
                    <span className="adress">Số 16, Liền kề 32, Hub Vân Canh</span>
                    <span className="change_adress">- Đổi địa chỉ</span>
                </WrapperTextAdress>
                <div style={{margin: '5px 0 10px', padding: '10px 0', border: '1px solid #e7e5e5ff', borderLeft: 'none', borderRight: 'none' }}>
                    <div style={{marginBottom: '10px'}} >Số lượng</div>
                    <WrapperQuantyProduct>
                        
                        <WrapperBtnQuantyProduct>
                            <MinusOutlined style={{fontSize: '15px'}} />
                        </WrapperBtnQuantyProduct>
                        
                        <WrapperInputNumber
                                controls={false} 
                                defaultValue={3} 
                                onChange={onChange} 
                                size="small" 
                                style={{width: 30}}
                        />
                        <WrapperBtnQuantyProduct>
                            <PlusOutlined style={{fontSize: '15px'}} />
                        </WrapperBtnQuantyProduct>
                    </WrapperQuantyProduct>
                </div>
                
                <div style={{display: 'flex', justifyContent: 'flex-start', gap:'12px', height: '45px'}}>
                    <WrapperBuyButton
                        type="outlined"
                        size='large'
                        styleButton={{
                            backgroundColor: 'rgb(255,57,69)',
                            border: '1px solid rgb(255,57,69)',
                            borderRadius: 7,
                            width: 200,
                            height: '100%',
                        }}
                        variant="borderless"
                        textButton="Chọn Mua"
                        styleTextButton={{
                            color: '#fff', 
                            fontSize: '14px',
                            fontWeight: 450,
                            padding: 10
                        }}
                    />
                    <WrapperLoanButton
                        type="outlined"
                        size='large'
                        styleButton={{
                            backgroundColor: '#ffffffff',
                            border: '2px solid #0003a3ff',
                            height: '100%',
                            borderRadius: 7,
                            width: 200

                        }}
                        variant="borderless"
                        textButton="Mua trước trả sau"
                        styleTextButton={{
                            color: '#292dffff', 
                            fontSize: '14px',
                            fontWeight: 450,
                        }}
                    />
                </div>
                    
                
            </Col>
        </Row>
  )
}

export default ProductDetailComponent