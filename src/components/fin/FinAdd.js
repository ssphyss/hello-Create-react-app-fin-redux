import React from 'react';
import { Button, Input, Select, DatePicker, Icon } from 'antd';
// 引入
import { connect } from 'react-redux';
import moment from 'moment';
import { actionCreators } from './store';

const InputGroup = Input.Group;
const Option = Select.Option;

class FinAdd extends React.Component{

    render(){
        // console.log('-----(FinAdd讀取)inputValue', this.props.inputValue)
        // console.log('-----(FinAdd讀取)data', this.props.data[0].date)
        return(
            <div style={{ margin: '50px 20px', padding: '30px', backgroundColor: '#ffffff'}} >
                <h6>新增</h6>  
                <InputGroup size="large" compact>
                    {/* 日期 */}
                    <DatePicker                     
                        // 1.   
                        value={moment(this.props.data[0].date, 'YYYY-MM-DD')}          
                        defaultValue={moment(this.props.data[0].date, 'YYYY-MM-DD')} 
                        // 2.
                        onChange={(date, dateString)=>this.props.handleAddDate(date, dateString)}
                        placeholder='請選擇日期'  style={{ marginRight: '10px', width: '150px' }} />                          
                    
                    {/* 類別 */}
                    <Select
                        // 17.
                        defaultValue="收入/支出"
                        onChange={this.props.handleSelect1Value}
                        
                        size="large" style={{ width: '120px' }} >
                        <Option value="OA1"><Icon type="dollar" theme="outlined" /> 收入</Option>
                        <Option value="OA2"><Icon type="pie-chart" theme="outlined" /> 支出</Option>
                    </Select>

                    {/* 類別2 */}
                    <Select 
                        // 18.
                        defaultValue="請選擇" 
                        onChange={this.props.handleSelect2Value}

                        size="large" style={{ width: 150 }}>
                        <Option value="OB1">旅遊相關</Option>
                        <Option value="OB2">交通相關</Option>
                        <Option value="OB3">食品相關</Option>
                        <Option value="disabled" disabled>Disabled</Option>                        
                    </Select>

                    {/* 金額 */}
                    <Input
                        // 7.
                        // value={this.props.inputValue}
                        // defaultValue={this.props.inputValue} 
                        // value={this.props.data[0].amount} 
                        defaultValue={this.props.data[0].amount} 
                        onChange={this.props.handleAddValue}
                        placeholder='請輸入金額' style={{ width: '20%' }} 
                    />                            
                    
                    {/* 描述 */}
                    <Input 
                        // 12.
                        defaultValue={this.props.descDefault} 
                        onChange={this.props.handleDescValue}
                        placeholder='描述' style={{ width: '25%' }}  />  
                    {/* 新增 */}  
                    <Button 
                        onClick={this.props.handleAddBtn}
                        type="primary" size="large" style={{ width: 'auto' }} >快速新增</Button>            
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
        // 3.
        handleAddDate(date, dateString){
            console.log(date, dateString)
            const action = actionCreators.getAddDateAction(dateString);
            dispatch(action);
        },
        // 8.
        handleAddValue(e){
            console.log('金額框變更偵測',e.target.value)
            const action = actionCreators.getAddValueAction(e.target.value);
            dispatch(action);
        },
        // 13.
        handleDescValue(e){
            console.log('描述框變更偵測',e.target.value)
            const action = actionCreators.getAddDescAction(e.target.value);
            dispatch(action);
        },

        // 19.
        handleSelect1Value(value, option){
            console.log('選擇框1變更偵測',value)
            const action = actionCreators.getAddSelect1Action(value);
            dispatch(action);
        },

        // 20.
         handleSelect2Value(value, option){
            console.log('選擇框2變更偵測',value)
            const action = actionCreators.getAddSelect2Action(value);
            dispatch(action);
        },
        // 26.
        handleAddBtn(){
            console.log('按鈕點擊偵測')
            const action = actionCreators.getAddBtnAction();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(FinAdd);