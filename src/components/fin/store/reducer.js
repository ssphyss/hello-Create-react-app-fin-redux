import * as constants from './constants';
import { /*fromJS,*/ Map } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = Map(
    {
        // focused: 444,
        inputValue: '444',
        descDefault: '',
        // 預設資料
        data : [
            {
                key: '1',
                name: 'John Brown',
                date: '2001-01-01',
                // types: ['收入'],
                types: 1,
                category: 1,
                amount: 999,
                desc: 'New York No. 1 Lake Park'
            }
        ],
        // 清單
        listData: [
            {
                key: '',
                name: '',
                date: '',
                types: '',
                category: '',
                amount: '',
                desc: ''
            }
        ]
    }
)
export default (state = defaultState, action) => {
    /**
     * FinAdd
     * */

    // 6.日期框變更偵測
    if (action.type === constants.ADD_DATE) {   
        console.log('收到dateString', action.value)     
        const [...data] = state.get('data');
        console.log('收到data', data);  
        data[0].date = action.value
        return state.merge({
            // title: action.title,
            data: data
        })
    }

    // 11.金額框變更偵測
    if (action.type === constants.ADD_VALUE) {   
        console.log('收到金額value', action.value)   
        const [...data] = state.get('data'); 
        data[0].amount = action.value
        return state.merge({
            data: data
        })
        // return state.merge({
        //     amount: action.value
        // })
    }

    // 16.描述框變更偵測
    if (action.type === constants.ADD_DESC) {   
        console.log('收到描述value', action.value);       
        const [...data] = state.get('data'); 
        data[0].desc = action.value
        return state.merge({
            data: data
        }) 
        // return state.merge({
        //     desc: action.value
        // })
    }
    
    // 24.選擇框1變更偵測
    if (action.type === constants.ADD_SELECT1) {   
        console.log('收到描述1value', action.value)       
        const [...data] = state.get('data'); 
        data[0].types = action.value
        return state.merge({
            data: data
        })    
        // return state.merge({
        //     types: action.value
        // })
    }

    // 25.選擇框2變更偵測
    if (action.type === constants.ADD_SELECT2) {   
        console.log('收到描述2value', action.value)          
        const [...data] = state.get('data'); 
        data[0].category = action.value
        return state.merge({
            data: data
        })    
        // return state.merge({
        //     types: action.value
        // })
    }

    // 29.按鈕變更偵測
    if (action.type === constants.ADD_BTN) {   
        console.log('收到按鈕value', action)  
        const [...data] = state.get('data');
        console.log('收到data', data);  
    }

    return state;
}