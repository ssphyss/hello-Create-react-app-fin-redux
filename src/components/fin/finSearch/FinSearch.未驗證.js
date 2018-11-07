import React from 'react';
import { Button, Input, Select, DatePicker, Icon } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;

export default class FinSearch extends React.Component{
    state = {
        dataSource: [],
      }
    render(){
        return(
            <div style={{ margin: '50px 20px', padding: '30px', backgroundColor: '#ffffff'}} >
                <h6>查詢</h6>  
                <InputGroup size="large" compact>
                    {/* 日期 */}
                    <DatePicker placeholder='請選擇日期'  style={{ marginRight: '10px', width: '150px' }} />  
                    <span> - </span> <DatePicker placeholder='請選擇日期'  style={{ marginRight: '10px', width: '150px' }} />   
                    
                    {/* 類別1 */}
                    <Select defaultValue="收入/支出" size="large" style={{ width: '120px' }} >
                        <Option value="Zhejiang"><Icon type="dollar" theme="outlined" />  收入</Option>
                        <Option value="Jiangsu"><Icon type="pie-chart" theme="outlined" /> 支出</Option>
                    </Select>
                    
                    {/* 類別2 */}
                    <Select defaultValue="請選擇" size="large" style={{ width: 150 }}>
                        <Option value="jack">旅遊相關</Option>
                        <Option value="lucy">交通相關</Option>
                        <Option value="Yiminghe">食品相關</Option>
                        <Option value="disabled" disabled>Disabled</Option>                        
                    </Select>
                    {/* 新增 */}  
                    <Button type="primary" size="large" style={{ width: 'auto' }} >送出</Button> 
                    <Button type="primary" size="large" style={{ width: 'auto' }} >重置</Button>              
                </InputGroup>               
                
            </div>
        )
    }
}