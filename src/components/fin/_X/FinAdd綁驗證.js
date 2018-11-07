import React from 'react';
import { Button, Input, Select, DatePicker, Icon, Form } from 'antd';
// 引入
import { connect } from 'react-redux';
import moment from 'moment';
import { actionCreators } from './store';

const InputGroup = Input.Group;
const Option = Select.Option;

class FinAdd extends React.Component{

    render(){
        // console.log('-----(FinAdd讀取)inputValue', this.props.inputValue)
        // console.log('-----(FinAdd讀取)dataDefault', this.props.dataDefault.date)

        // antD固定的,一定要這樣寫
        const { getFieldDecorator } = this.props.form;

        let typesValue;
        if (this.props.dataDefault.types === '1'){
            typesValue = '收入'
        }else if (this.props.dataDefault.types === '2'){
            typesValue = '支出'
        }else{
            typesValue = '請選擇'
        }
        

        let categoryValue;
        if (this.props.dataDefault.category === '1'){
            categoryValue = '旅遊相關'
        }else if (this.props.dataDefault.category === '2'){
            categoryValue = '交通相關'
        }else if (this.props.dataDefault.category === '3'){
            categoryValue = '食品相關'
        }else if (this.props.dataDefault.category === '4'){
            categoryValue = '其他相關'
        }else if(this.props.dataDefault.category === ''){
            categoryValue = '請選擇'
        }

        return(
            <div style={{ margin: '50px 20px', padding: '30px', backgroundColor: '#ffffff'}} >
                <h6>新增</h6>  
                <Form onSubmit={this.props.handleAddBtn}>
                    <InputGroup size="large" compact>
                        {/* 日期 */}
                        {/* <Form.Item>
                            {
                                getFieldDecorator('date', {
                                    initialValue: '1'
                                })(
                                    <DatePicker                     
                                        // 1.   
                                        value={moment(this.props.dataDefault.date, 'YYYY-MM-DD')}          
                                        defaultValue={moment(this.props.dataDefault.date, 'YYYY-MM-DD')} 
                                        // 2.
                                        onChange={(date, dateString)=>this.props.handleAddDate(date, dateString)}
                                        placeholder='請選擇日期'  style={{ marginRight: '10px', width: '150px' }} 
                                    />        
                                )
                            }
                        </Form.Item>  */}
                        <DatePicker                     
                            // 1.   
                            value={moment(this.props.dataDefault.date, 'YYYY-MM-DD')}          
                            // defaultValue={moment(this.props.dataDefault.date, 'YYYY-MM-DD')} 
                            // 2.
                            onChange={(date, dateString)=>this.props.handleAddDate(date, dateString)}
                            placeholder='請選擇日期'  style={{ marginRight: '10px', width: '150px' }} 
                        />    
                        {/* 類別 */}
                        {/* {this.props.dataDefault.types === '1' ?  */}
                                         
                        <Form.Item>
                            {
                                getFieldDecorator('types', {
                                    initialValue: typesValue,
                                    // rules: [
                                    //     {
                                    //         required: true,
                                    //         message: '必填'
                                    //     }
                                    // ]           
                                })(
                                    <Select
                                        // 17.
                                        // defaultValue="請選擇"
                                        // value={'收入'}
                                        // value={typesValue}
                                        onChange={this.props.handleSelect1Value}                        
                                        size="large" style={{ width: '120px' }} >
                                        <Option value="1"><Icon type="dollar" theme="outlined" /> 收入</Option>
                                        <Option value="2"><Icon type="pie-chart" theme="outlined" /> 支出</Option>
                                    </Select> 
                                )
                            }
                        </Form.Item>
                        {/* 類別2 */}
                        
                        <Form.Item>
                            {
                                getFieldDecorator('category', {
                                    initialValue: categoryValue,           
                                })(
                                    <Select 
                                        // 18.
                                        // defaultValue="請選擇" 
                                        // value={categoryValue}
                                        onChange={this.props.handleSelect2Value}
                                        size="large" style={{ width: 150 }}>
                                        <Option value="1">旅遊相關</Option>
                                        <Option value="2">交通相關</Option>
                                        <Option value="3">食品相關</Option>
                                        <Option value="disabled" disabled>Disabled</Option>                        
                                    </Select>
                                )
                            }
                        </Form.Item>
                        {/* 金額 */}
                                                   
                        <Form.Item>
                            
                                {
                                    getFieldDecorator('amount', {
                                        initialValue: '999',
                                        rules:[{
                                            required: true,
                                            message: '不能為空'
                                        }]
                                    })(
                                        <Input
                                            // 7.
                                            // value={this.props.inputValue}
                                            // defaultValue={this.props.inputValue} 
                                            // value={this.props.dataDefault[0].amount} 
                                            // value={this.props.dataDefault.amount}         // 送出時還原清空要給預設
                                            defaultValue={this.props.dataDefault.amount} 
                                            onChange={this.props.handleAddValue}
                                            placeholder='請輸入金額' 
                                        /> 
                                    )
                                }
               
                            
                        </Form.Item>
                        {/* 描述 */}
                        <Input 
                            // 12.
                            value={this.props.dataDefault.desc} 
                            // defaultValue={this.props.descDefault} 
                            onChange={this.props.handleDescValue}
                            placeholder='描述' style={{ width: '25%' }}  />  
                            
                        {/* 新增 */}  
                        <Button 
                            // onClick={this.props.handleAddBtn}
                            type="primary" size="large" style={{ width: 'auto' }} >快速新增</Button>            
                    </InputGroup>               
                </Form>
            </div>
        )
    }
}

// 引入
const mapStateToProps = (state) => {
    return {        
        inputValue: state.getIn(['fin','inputValue']),
        dataDefault: state.getIn(['fin','dataDefault'])
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {
        // 3.日期偵測
        handleAddDate(date, dateString){
            // console.log(date, dateString)
            const action = actionCreators.getAddDateAction(dateString);
            dispatch(action);
        },
        // 8.金額偵測
        handleAddValue(e){
            // console.log('金額框變更偵測',e.target.value)
            const action = actionCreators.getAddValueAction(e.target.value);
            dispatch(action);
        },
        // 13.描述偵測
        handleDescValue(e){
            // console.log('描述框變更偵測',e.target.value)
            const action = actionCreators.getAddDescAction(e.target.value);
            dispatch(action);
        },

        // 19.類別-收入支出偵測
        handleSelect1Value(value, option){
            // console.log('選擇框1變更偵測',value)
            // console.log('選擇框1變更偵測option',option)
            const action = actionCreators.getAddSelect1Action(value);
            dispatch(action);
        },

        // 20.類別-旅遊/交通/飲食偵測
         handleSelect2Value(value, option){
            // console.log('選擇框2變更偵測',value)
            const action = actionCreators.getAddSelect2Action(value);
            dispatch(action);
        },
        // 26.送出新增
        handleAddBtn(){
            // console.log('按鈕點擊偵測')
            const action = actionCreators.getAddBtnAction();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Form.create()(FinAdd));

// export default Form.create()(FinAdd);