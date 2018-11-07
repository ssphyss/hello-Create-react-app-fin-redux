import React from 'react';
import { Tag, Icon, Modal, Button, Input, Select, DatePicker } from 'antd';
// 引入
import { connect } from 'react-redux';
import { actionCreators } from './store';
import moment from 'moment';

const InputGroup = Input.Group;
const Option = Select.Option;

class FinDetail extends React.Component{
    render(){    

        // console.log('-----(FinDetail讀取)inputValue', this.props.inputValue)
        // console.log('-----(FinDetail讀取)data', this.props.data)  

        // 確定要刪除嗎?
        // function showConfirm() {
        //     const confirm = Modal.confirm;
        //     confirm({
        //         title: 'Do you want to delete these items?',
        //         content: 'When clicked the OK button, this dialog will be closed after 1 second',
        //         onOk() {
        //         return new Promise((resolve, reject) => {
        //             setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        //         }).catch(() => console.log('Oops errors!'));
        //         },
        //         onCancel() {},
        //     });
        // }

        return(
            <div style={{ margin: '50px 20px', padding: '30px', backgroundColor: '#ffffff'}} >
                <h6>明細</h6>
                <Modal
                    title = '詳細資料'
                    // visible = {false}
                    visible = {this.props.isShowModal}
                    // onCancel = {()=>{
                    //     this.setState({
                    //         isShowModal: false
                    //     })
                    // }}
                    // onCancel = {this.props.isShowModal}
                    onOk= {this.handleSubmit}
                    onCancel={() => this.props.handleShowModal(false)}
                    // onCancel={() =>console.log('anbcx')}
                    okText='確定'
                    cancelText='取消'
                >
                    <span>{this.props.data.id}</span>
                    <p>
                        日期：                
                        <DatePicker
                            value={moment(this.props.dataDefault.date, 'YYYY-MM-DD')}          
                            defaultValue={moment(this.props.dataDefault.date, 'YYYY-MM-DD')} 
                            onChange={(date, dateString)=>this.props.handleAddDate(date, dateString)}
                            placeholder='請選擇日期'  style={{ marginRight: '10px', width: '150px' }}
                        />
                    </p>
                    
                    <p>名目：
                        <Select
                            defaultValue="收入/支出"
                            onChange={this.props.handleSelect1Value}
                            size="large" style={{ width: '120px' }} >
                            <Option value="1"><Icon type="dollar" theme="outlined" /> 收入</Option>
                            <Option value="2"><Icon type="pie-chart" theme="outlined" /> 支出</Option>
                        </Select>
                    </p>

                    <p>名目：
                        <Select
                            defaultValue="請選擇" 
                            onChange={this.props.handleSelect2Value}
                            size="large" style={{ width: 150 }}>
                            <Option value="1">旅遊相關</Option>
                            <Option value="2">交通相關</Option>
                            <Option value="3">食品相關</Option>
                            <Option value="disabled" disabled>Disabled</Option>                        
                        </Select>
                    </p>

                    <p>金額：
                        <Input
                            value={this.props.dataDefault.amount}         // 送出時還原清空要給預設
                            defaultValue={this.props.dataDefault.amount} 
                            onChange={this.props.handleAddValue}
                            placeholder='請輸入金額' style={{ width: '20%'}} size="large"  
                        />        
                    </p>

                    <p>描述：
                        <Input 
                            value={this.props.dataDefault.desc} 
                            onChange={this.props.handleDescValue}
                            placeholder='描述' style={{ width: '25%' }} size="large"
                        />  
                    </p>
                </Modal>
            </div>
        )
    }
}

// 引入
const mapStateToProps = (state) => {
    return {        
        inputValue: state.getIn(['fin','inputValue']),
        dataDefault: state.getIn(['fin','dataDefault']),
        data: state.getIn(['fin','data']),
        isShowModal: state.getIn(['fin','isShowModal']),
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {
        // 30.
        handleDelete(e, id){
            e.preventDefault();            
            const action = actionCreators.getDeleteAction(id);
            dispatch(action);
        },

        handleShowModal(value){
            console.log(value)
            const action = actionCreators.getShowModalAction(value);
            dispatch(action);
        }

    }
}

export default connect(mapStateToProps, mapDispathToProps)(FinDetail);
