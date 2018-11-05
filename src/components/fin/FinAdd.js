import React from 'react';
import { Button, Input, Select, DatePicker, Icon } from 'antd';
// 引入
import { connect } from 'react-redux';

const InputGroup = Input.Group;
const Option = Select.Option;

// const options = [{
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [{
//     value: 'hangzhou',
//     label: 'Hangzhou',
//     children: [{
//         value: 'xihu',
//         label: 'West Lake',
//     }],
//     }],
// }, {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [{
//     value: 'nanjing',
//     label: 'Nanjing',
//     children: [{
//         value: 'zhonghuamen',
//         label: 'Zhong Hua Men',
//     }],
//     }],
// }];

// function onPanelChange(value, mode) {
//     console.log(value, mode);
// }
class FinAdd extends React.Component{
    state = {
        dataSource: [],
      }
    render(){
        // console.log('-----(FinAdd讀取)inputValue', this.props.inputValue)
        // console.log('-----(FinAdd讀取)data', this.props.data)
        return(
            <div style={{ margin: '50px 20px', padding: '30px', backgroundColor: '#ffffff'}} >
                <h6>新增</h6>  
                <InputGroup size="large" compact>
                    {/* 日期 */}
                    <DatePicker placeholder='請選擇日期'  style={{ marginRight: '10px', width: '150px' }} />                          
                    
                    {/* 類別 */}
                    <Select defaultValue="收入/支出" size="large" style={{ width: '120px' }} >
                        <Option value="Zhejiang"><Icon type="dollar" theme="outlined" /> 收入</Option>
                        <Option value="Jiangsu"><Icon type="pie-chart" theme="outlined" /> 支出</Option>
                    </Select>

                    {/* 類別2 */}
                    <Select defaultValue="請選擇" size="large" style={{ width: 150 }}>
                        <Option value="OB1">旅遊相關</Option>
                        <Option value="OB2">交通相關</Option>
                        <Option value="OB3">食品相關</Option>
                        <Option value="disabled" disabled>Disabled</Option>                        
                    </Select>

                    {/* 金額 */}
                    <Input defaultValue="" placeholder='請輸入金額' style={{ width: '20%' }} datasource={this.state.dataSource} />                            
                    
                    {/* 描述 */}
                    <Input defaultValue="" placeholder='描述' style={{ width: '25%' }}  />  
                    {/* 新增 */}  
                    <Button type="primary" size="large" style={{ width: 'auto' }} >快速新增</Button>            
                </InputGroup>               
                
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

export default connect(mapStateToProps, mapDispathToProps)(FinAdd);