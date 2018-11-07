import React from 'react';
import FinCenter from './FinCenter.js';
import FinSearch from './finSearch/FinSearch.js';
import FinAdd from './FinAdd.js';
import FinItem from './FinItem.js';
import FinDetail from './FinDetail.js';

// 引入
import { connect } from 'react-redux';
import'./index.scss';

class Fin extends React.Component{    
    render(){ 
        // console.log('-----inputValue', this.props.inputValue)
        // console.log('-----data', this.props.data)
        return(
            <div className='wrapper--fin'>
                <div className='finbox'>
                    <FinCenter />
                    <FinSearch />
                    <FinAdd />
                    <FinItem />
                    <FinDetail />
                </div>    
            </div>
        )
    }
}

// 引入
const mapStateToProps = (state) => {
    return {
        // focused: state.fin.focused,
        // 改成調用immutable數據
        // focused: state.fin.get('focused')

        // 有兩種寫法
        // focused: state.get('fin').get('focused'),
        // focused: state.getIn(['fin','focused']),
        
        inputValue: state.getIn(['fin','inputValue']),
        data: state.getIn(['fin','data'])
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispathToProps)(Fin);