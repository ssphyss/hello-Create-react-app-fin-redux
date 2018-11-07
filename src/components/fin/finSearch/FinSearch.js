import React from 'react';
import { Button, Input, Select, DatePicker, Icon, Form, Message } from 'antd';
// 引入
import { connect } from 'react-redux';
import moment from 'moment';
import { actionCreators } from './store';

const InputGroup = Input.Group;
const Option = Select.Option;

class FinSearch extends React.Component{
    state = {
        dataSource: [],
    }
    render(){
        // antD固定的,一定要這樣寫
        const { getFieldDecorator } = this.props.form;
        return(
            <div style={{ margin: '50px 20px', padding: '30px', backgroundColor: '#ffffff'}} >
                <h6>查詢</h6>  
                <InputGroup size="large" compact>
                    {/* 日期 */}
                    <Form.Item>
                        {
                            getFieldDecorator('dateFrom', {
                                initialValue: moment(new Date(), 'YYYY-MM-DD'),
                                rules: [

                                ]           
                            })(
                                <DatePicker 
                                    onChange={(date, dateString)=>this.props.handleSearchDateFrom(date, dateString)}
                                    placeholder='請選擇日期'  style={{ marginRight: '10px', width: '150px' }} 
                                />  
                            )
                        }
                    </Form.Item>                    
                    <span> - </span> 
                    <Form.Item>
                        {
                            getFieldDecorator('dateTo', {
                                initialValue: moment(new Date(), 'YYYY-MM-DD'),
                                rules: [

                                ]           
                            })(
                                <DatePicker 
                                    onChange={(date, dateString)=>this.props.handleSearchDateTo(date, dateString)}
                                    placeholder='請選擇日期'  style={{ marginRight: '10px', width: '150px' }} 
                                />  
                            )
                        }
                    </Form.Item>  
                    
                    {/* 類別1 */}                    
                    <Form.Item>
                        {
                            getFieldDecorator('types', {
                                initialValue: '請選擇',
                                rules: [
                                    // {
                                    //     required: true,
                                    //     message: '必填'
                                    // },
                                    {
                                        validator:(rule, value, cb)=>{
                                            console.log('-----value',value)
                                            if(value === '請選擇'){
                                                cb('必填')
                                            }else{
                                                cb()
                                            }
                                        }
                                    }
                                ]           
                            })(
                                // <Select
                                //     // 17.
                                //     // value={typesValue}
                                //     // defaultValue={'請選擇'}
                                //     onChange={this.props.handleSelect1Value}                        
                                //     size="large" style={{ width: '120px' }} >
                                //     <Option value="1"><Icon type="dollar" theme="outlined" /> 收入</Option>
                                //     <Option value="2"><Icon type="pie-chart" theme="outlined" /> 支出</Option>
                                // </Select>   
                                <Select 
                                    // defaultValue="請選擇" 
                                    onChange={this.props.handleSearchSelect1Value}  
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
                                initialValue: '請選擇',
                                rules: [ 
                                    {
                                        validator:(rule, value, cb)=>{
                                            console.log('-----value',value)
                                            if(value === '請選擇'){
                                                cb('必填')
                                            }else{
                                                cb()
                                            }
                                        }
                                    }
                                ]           
                            })(
                                <Select 
                                    // defaultValue="請選擇" 
                                    onChange={this.props.handleSearchSelect2Value}  
                                    size="large" style={{ width: 150 }}>
                                    <Option value="1">旅遊相關</Option>
                                    <Option value="2">交通相關</Option>
                                    <Option value="3">食品相關</Option>
                                    <Option value="disabled" disabled>Disabled</Option>                        
                                </Select>
                            )
                        }
                    </Form.Item>

                    {/* 送出 */}  
                    <Form.Item>
                        <Button 
                            onClick={(e)=>this.handleSubmit(e, this.props.dataSearch)}
                            type="primary" size="large" style={{ width: 'auto' }} >送出
                        </Button> 
                    </Form.Item>

                    {/* 重置 */}  
                    <Form.Item>
                        <Button type="primary" size="large" style={{ width: 'auto' }} >重置</Button> 
                    </Form.Item>             
                </InputGroup>               
                
            </div>
        )
    }
     // 必寫,送出表單
     handleSubmit = (e, dataSearch)=>{
        e.preventDefault();
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){

                // this.props.form.setFieldsValue({types: '請選擇' })
                // this.props.form.setFieldsValue({category: '請選擇' })
                // this.props.form.setFieldsValue({amount: '' })
                // this.props.form.setFieldsValue({desc: '' })
                this.props.form.resetFields();

                // Message.success(`${userInfo.userName}恭喜你已經通過驗證,密碼為${userInfo.userPwd}`)
                this.props.handleSearchBtn(dataSearch);
            }
        })
    }
}
// 引入
const mapStateToProps = (state) => {
    return {        
        inputValue: state.getIn(['fin','inputValue']),
        dataDefault: state.getIn(['fin','dataDefault']),
        dataSearch: state.getIn(['finSearch','dataSearch'])
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {
        // 3.日期偵測
        handleSearchDateFrom(date, dateString){
            console.log('日期偵測From',date, dateString)
            const action = actionCreators.getSearchDateFrom(dateString);
            dispatch(action);
        },
        // 3.日期偵測
        handleSearchDateTo(date, dateString){
            console.log('日期偵測To',date, dateString)
            const action = actionCreators.getSearchDateTo(dateString);
            dispatch(action);
        },
        
        // 19.類別-收入支出偵測
        handleSearchSelect1Value(value, option){
            console.log('選擇框1變更偵測',value)
            // console.log('選擇框1變更偵測option',option)
            const action = actionCreators.getSearchSelect1(value);
            dispatch(action);
        },

        // 20.類別-旅遊/交通/飲食偵測
        handleSearchSelect2Value(value, option){
            console.log('選擇框2變更偵測',value)
            const action = actionCreators.getSearchSelect2(value);
            dispatch(action);
        },

        // 26.送出查詢(記得帶dataSearch)
        handleSearchBtn(dataSearch){           
            console.log('查詢按鈕偵測');
            console.log('dataSearch---', dataSearch)
            const action = actionCreators.getSearchList(dataSearch);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Form.create()(FinSearch));