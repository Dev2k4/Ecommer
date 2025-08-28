import React, { Fragment } from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperPagination, WrapperProduct } from './style'

const TypeProductPage = () => {
  return (
  <div style={{width: '100%', background: '#EBEFF3'}}>
    <div style={{width: 1420, marginLeft: '70px'}}>
      <Row style={{display: 'flex', flexWrap: 'nowrap', paddingTop: '10px'}}>
        <WrapperNavbar span={4}>
          <NavBarComponent/>
        </WrapperNavbar>

        <Col span={20}>
          <WrapperProduct >
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
          </WrapperProduct>

          <WrapperPagination>
            <Pagination
              defaultCurrent={1}
              total={100}
              showTotal={total => `Total ${total} items`}
              style={{textAlign: 'center', marginTop: '10px'}}
            />
          </WrapperPagination>
        </Col>
      </Row>
    </div>
  </div>
    
     
  

    )
}

export default TypeProductPage