import React from 'react';
import { Icon, Modal, Input, Select, DatePicker } from 'antd';
// 引入
import { connect } from 'react-redux';
import { actionCreators } from './store';
import moment from 'moment';

// const InputGroup = Input.Group;
const Option = Select.Option;

class FinDetail extends React.Component{
    render(){    
        // console.log('-----(FinDetail讀取)inputValue', this.props.inputValue)
        // console.log('-----(FinDetail讀取)data', this.props.data)  
        // console.log('-----(FinDetail讀取)data', this.props.dataActive.amount)   
        // console.log('-----(FinDetail讀取)types',this.props.dataActive.types)
        // console.log('-----(FinDetail讀取)id',this.props.dataActive.id)

        let typesValue;
        if (this.props.dataActive.types === '1'){
            typesValue = '收入'
        }else if (this.props.dataActive.types === '2'){
            typesValue = '支出'
        }else{
            typesValue = '請選擇'
        }

        let categoryValue;
        if (this.props.dataActive.category === '1'){
            categoryValue = '旅遊相關'
        }else if (this.props.dataActive.category === '2'){
            categoryValue = '交通相關'
        }else if (this.props.dataActive.category === '3'){
            categoryValue = '食品相關'
        }else if (this.props.dataActive.category === '4'){
            categoryValue = '其他相關'
        }else{
            categoryValue = '請選擇'
        }

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
                    visible = {this.props.isShowModal}
                    onOk= {this.props.handleSubmit}
                    onCancel={() => this.props.handleCancelModal(false)}
                    okText='確定'
                    cancelText='取消'
                >
                    <div>ID：{this.props.dataActive.id}</div>
                    <div className='itemBox'>
                        日期：                
                        <DatePicker
                            value={moment(this.props.dataActive.date, 'YYYY-MM-DD')}          
                            // defaultValue={moment(this.props.dataActive.date, 'YYYY-MM-DD')} 
                            onChange={(date, dateString)=>this.props.handleModalDate(date, dateString, this.props.dataActive.id)}
                            placeholder='請選擇日期'  
                            style={{ marginRight: '10px', width: '150px' }}
                        />
                    </div>
                    
                    <div className='itemBox'>
                        名目：                        
                        <Select
                            value={typesValue}
                            // onChange={this.props.handleModalSelect1}
                            onChange={ (value)=>this.props.handleModalSelect1( this.props.dataActive.id, value) }
                            size="large" style={{ width: '120px' }} >
                            <Option value="1"><Icon type="dollar" theme="outlined" /> 收入</Option>
                            <Option value="2"><Icon type="pie-chart" theme="outlined" /> 支出</Option>
                        </Select> 
                    </div>

                    <div>名目：
                        <Select
                            // defaultValue="請選擇" 
                            value={categoryValue}
                            // onChange={this.props.props.handleModalSelect2}
                            onChange={ (value)=>this.props.handleModalSelect2( this.props.dataActive.id, value) }
                            size="large" style={{ width: 150 }}>
                            <Option value="1">旅遊相關</Option>
                            <Option value="2">交通相關</Option>
                            <Option value="3">食品相關</Option>
                            <Option value="disabled" disabled>Disabled</Option>                        
                        </Select>
                    </div>

                    <div className='itemBox'>
                        金額：
                        <Input
                            value={this.props.dataActive.amount}           // 送出時還原清空要給預設
                            // defaultValue={this.props.dataActive.amount} 
                            onChange={(e)=>this.props.handleModalAmount(this.props.dataActive.id, e.target.value)}
                            placeholder='請輸入金額' style={{ width: '20%'}} size="large"  
                        />        
                    </div>

                    <div className='itemBox'>
                        描述：
                        <Input 
                            value={this.props.dataActive.desc} 
                            // onChange={this.props.handleDescValue}
                            onChange={(e)=>this.props.handleModalDesc(this.props.dataActive.id, e.target.value)}
                            placeholder='描述' style={{ width: '25%' }} size="large"
                        />  
                    </div>

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
        dataActive: state.getIn(['fin','dataActive']),
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

        // 取消Modal修改
        handleCancelModal(value){
            console.log(value)
            const action = actionCreators.getCancelModalAction(value);
            dispatch(action);
        },

        // 修改日期
        handleModalDate(date, dateString, id){
            console.log('修改日期 id',id)
            console.log('修改日期', dateString)
            const action = actionCreators.getModalDate(id, dateString);
            dispatch(action);
        },

        // 確定
        handleSubmit(){
            console.log('確定') 
            const action = actionCreators.getModalOK();
            dispatch(action);
        },

        // 19.類別-收入支出偵測
        handleModalSelect1(id, value){
            console.log('選擇框1變更偵測',id, value)
            const action = actionCreators.getModalSelect1(id, value);
            dispatch(action);
        },

        // 20.類別-旅遊交通偵測
        handleModalSelect2(id, value){
            console.log('選擇框2變更偵測',id, value)
            const action = actionCreators.getModalSelect2(id, value);
            dispatch(action);
        },

        // 修改金額
        handleModalAmount(id, value){
            console.log('修改金額', id, value)
            const action = actionCreators.getModalAmount(id, value);
            dispatch(action);
        },

        // 修改描述
        handleModalDesc(id, value){
            console.log('修改描述', id, value)
            const action = actionCreators.getModalDesc(id, value);
            dispatch(action);
        }       

    }
}

export default connect(mapStateToProps, mapDispathToProps)(FinDetail);
