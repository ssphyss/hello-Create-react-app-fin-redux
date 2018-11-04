import React from 'react';
import { Row, Col, Card } from 'antd';

export default class FinCenter extends React.Component{
    render(){    
        return(
            <div style={{ margin: '50px 20px', padding: '30px', backgroundColor: '#ffffff'}}  >
                <h6>總覽</h6>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card>
                            <span>總收入</span>
                            <h2>1,000,500</h2>                            
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <span>總支出</span>
                            <h2>500</h2>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <span>總結餘</span>
                            <h2>1,000,000</h2>
                        </Card>
                    </Col>
                </Row>                
            </div>
        )
    }
}