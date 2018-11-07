import React from 'react';
import { Table, Divider, Tag, Icon, Modal } from 'antd';
// 引入
import { connect } from 'react-redux';
import { actionCreators } from './store';

// 引入finDetail的store做finDetail彈出功能
import { actionCreators as actionCreatorsDetail } from './finDetail/store';

import moment from 'moment';

class FinItem extends React.Component{
    render(){    
        // console.log('------ ██████████ ------')
        // console.log('-----(FinItem讀取)inputValue', this.props.inputValue)
        // console.log('-----(FinItem讀取)data', this.props.data)
        // console.log('-----(FinItem讀取)dataSearch', this.props.dataSearch)
        // console.log('-----(FinItem讀取)dataActive', this.props.dataActive)
        // console.log('-----(FinItem讀取)isShowModal', this.props.isShowModal)

        // 設定表檔頭欄位 
        const columns = [
        {
            title: '日期',
            dataIndex: 'date',
            key: 'date',
            width: 110,
            sorter: (a, b) => moment(a.date) - moment(b.date),
        }, 
        {
            title: '收入/支出',
            key: 'types',
            dataIndex: 'types',     
            // render: (text, record) => {
            //     console.log(text, record);                
            //     if(record.types === 1) {
            //         return <span><Tag color="blue" key={text}>收入</Tag></span>
            //         // return <p>bbb</p>
            //     }else {
            //         return <span><Tag color="red" key={11}>支出</Tag></span>
            //     } 
            // }       
            render: (/*text, record, */types) => { 
                // console.log(text, record);          
                if(types === '1') {
                    return <Tag color="blue" key={1}>收入</Tag>
                }else if(types === '2'){
                    return <Tag color="red" key={2}>支出</Tag>
                }else {
                    return ''
                } 
            },
            sorter: (a, b) => a.types - b.types,        
        }, 
        {
            title: '類型相關',
            key: 'category',
            dataIndex: 'category',    
            // render: text => <a href="javascript:;">{text}</a>,     
            render: (category, record) => {   
                // console.log('類別相關',category, record);
                switch (category) {
                    case '1':
                        return <span key={1}>旅遊相關</span>        
                        // break;               
                    case '2':
                        return <span key={2}>交通相關</span>    
                        // break;                    
                    case '3':
                        return <span key={3}>食品相關</span> 
                        // break;                
                    case '4':
                        return <span key={4}>其他相關</span>    
                        // break;     
                    default:
                        break;
                }                
            },
            sorter: (a, b) => a.category - b.category,                  
        }, 
        {
            title: '金額',
            dataIndex: 'amount',
            key: 'amount',
            width: 100,
            sorter: (a, b) => a.amount - b.amount,
            // sorter: (a, b) => { 
            //     console.log('a',a.amount);
            //     console.log('b',b);
            //     // return{
                    
            //     // } 
            // },
        }, 
        {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc'
        }, 

        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a 
                        onClick={(e)=> this.props.handleEditQuick(e, record.id)}
                        href='/'><Icon type="file-text" theme="outlined" /> 直接編輯</a>
                    <Divider type="vertical" />
                    {/* <a href=""><Icon type="file-text" theme="outlined" /> 修改 {record.name}</a> */}
                    <a 
                        onClick={(e)=> this.props.handleEdit(e, record.id, this.props.data)}
                        
                        href='/'><Icon type="file-text" theme="outlined" /> 修改</a>
                    <Divider type="vertical" />
                    <a 
                        // onClick={this.props.handleDelete}
                        // onClick={(e)=> this.props.handleDelete(e, record.id)}
                        onClick={(e)=>this.handlePopConfirm(e, record.id)}
                        href='/'><Icon type="delete" theme="outlined" /> 刪除</a>
                </span>
            )
        }
        ];        

        // 設定資料
        // const data = [{
        //     key: '1',
        //     name: 'John Brown',
        //     date: '2001-01-01',
        //     // types: ['收入'],
        //     types: 1,
        //     category: 1,
        //     amount: 999,
        //     desc: 'New York No. 1 Lake Park',

        // }
        // ];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return(
            <div style={{ margin: '50px 20px', padding: '30px', backgroundColor: '#ffffff'}} >
                <h6>列表清單</h6>  
                <Table 
                    // key={`${Math.floor(Math.random( )*1000)}`} // 不用寫
                    columns={columns} 
                    // dataSource={data} 
                    dataSource={this.props.data} 
                    // dataSource={this.handlegetList}
                    rowSelection={rowSelection}
                />
            </div>
        )
    }
    componentDidMount(){
        this.props.handlegetList();
    }

    handlePopConfirm(e, id){
        console.log(id)
        const _this = this;
        e.preventDefault();
        Modal.confirm({
            title: '您確定要刪除資料嗎?',
            content: 'When clicked the OK button, this dialog will be closed after 1 second 要刪除資料',
            onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                _this.props.handleDelete(e, id);
            }).catch(() => console.log('Oops errors!'));
            
            },
            onCancel() {

            },
        });

    }
    
}

// 引入
const mapStateToProps = (state) => {
    return {        
        inputValue: state.getIn(['fin','inputValue']),
        dataDefault: state.getIn(['fin','dataDefault']),
        data: state.getIn(['fin','data']),
        dataSearch: state.getIn(['finSearch','dataSearch']),
        dataActive: state.getIn(['finDetail','dataActive']),
        isShowModal: state.getIn(['finDetail','isShowModal']),
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {
        // 30. 刪除
        handleDelete(e, id){
            e.preventDefault();
            const action = actionCreators.getDeleteAction(id);
            dispatch(action);
        },
        
        // // 修改按鈕，彈出視窗(----改到別的組件finDetail)
        // handleEdit(e, id){
        //     e.preventDefault();
        //     const action = actionCreators.getEditAction(id);
        //     dispatch(action);
        // },

        // 修改按鈕，彈出視窗(----別的組件finDetail)
        handleEdit(e, id, data){
            e.preventDefault();            
            const action = actionCreatorsDetail.getEditAction(id, data);
            dispatch(action);
        },
        
        
        // 快速編輯
        handleEditQuick(){

        },

        // Ajax資料
        handlegetList(){
            // console.log('獲取Ajax')
            const action = actionCreators.getList();
            dispatch(action);
        }
        
    }
}

export default connect(mapStateToProps, mapDispathToProps)(FinItem);
