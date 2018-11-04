import React from 'react';
import { Button } from 'antd';  // js子組件用{}形式解構,代表一個子集
// import 'antd/dist/antd.css';    // or 'antd/dist/antd.less' 按需加載後可以移除

export default class Example extends React.Component{
    render(){
        return(
            <div>
                <Button type="primary">Primary</Button>
            </div>
        )
    }
}