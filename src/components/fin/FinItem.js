import React from 'react';
import { Table, Divider, Tag, Icon } from 'antd';
// 引入
import { connect } from 'react-redux';
class FinItem extends React.Component{
    render(){    
        // console.log('-----(FinItem讀取)inputValue', this.props.inputValue)
        // console.log('-----(FinItem讀取)data', this.props.data)
        // 設定表檔頭欄位 
        const columns = [
        {
            title: '日期',
            dataIndex: 'date',
            key: 'date',
            width: 110,
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
                if(types === 1) {
                    return <Tag color="blue" key={1}>收入</Tag>
                }else {
                    return <Tag color="red" key={2}>支出</Tag>
                } 
            }        
        }, 
        {
            title: '類型相關',
            key: 'category',
            dataIndex: 'category',    
            // render: text => <a href="javascript:;">{text}</a>,     
            render: (category, record) => {   
                // console.log(category ,record);
                switch (category) {
                    case 1:
                        return <span key={1}>旅遊相關</span>                       
                    case 2:
                        return <span key={2}>旅遊相關</span>                        
                    case 3:
                        return <span key={3}>交通相關</span>                        
                    case 4:
                        return <span key={4}>其他相關</span>                        
                    default:
                        break;
                }                
            }                  
        }, 
        {
            title: '金額',
            dataIndex: 'amount',
            key: 'amount',
            width: 100,
        }, 
        {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
        }, 

        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    {/* <a href=""><Icon type="file-text" theme="outlined" /> 詳細 {record.name}</a> */}
                    <a href='/'><Icon type="file-text" theme="outlined" /> 詳細</a>
                    <Divider type="vertical" />
                    <a href='/'><Icon type="delete" theme="outlined" /> 刪除</a>
                </span>
            ),
        }
        ];        
        // 設定資料
        const data = [{
            key: '1',
            name: 'John Brown',
            date: '2001-01-01',
            // types: ['收入'],
            types: 1,
            category: 1,
            amount: 999,
            desc: 'New York No. 1 Lake Park',

        }, {
            key: '2',
            name: 'Jim Green',
            date: '2015-10-13',
            // types: ['支出'],
            types: 2,
            category: 2,
            amount: 58999,
            desc: 'London No. 1 Lake Park',
            
        }, {
            key: '3',
            name: 'Joe Black',
            // types: ['收入'],
            types: 1,
            category: 4,
            date: '2018-12-31',
            amount: 999,
            desc: 'Sidney No. 1 Lake Park',
            
        }];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return(
            <div style={{ margin: '50px 20px', padding: '30px', backgroundColor: '#ffffff'}} >
                <h6>列表清單</h6>  
                <Table columns={columns} dataSource={data} rowSelection={rowSelection}/>
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

export default connect(mapStateToProps, mapDispathToProps)(FinItem);
