import React from 'react';
import { Row, Col, Card } from 'antd';
// 引入
import { connect } from 'react-redux';

class FinCenter extends React.Component{
    render(){    
        // console.log('-----(FinCenter讀取)inputValue', this.props.inputValue)
        // console.log('-----(FinCenter讀取)data', this.props.data)
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
// 引入
const mapStateToProps = (state) => {
    return {        
        inputValue: state.getIn(['fin','inputValue']),
        data: state.getIn(['fin','data'])
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispathToProps)(FinCenter);