import * as constants from './constants';
import { /*fromJS,*/ Map } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = Map(
    {
        // focused: 444,
        inputValue: '444',
        descDefault: '',
        // 預設資料
        dataDefault : [
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
        data: [
            {
                // key: '156', 不能給key因為要隨機給
                name: '',
                date: '',
                types: '',
                category: '3',
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
        const [...dataDefault] = state.get('dataDefault');
        console.log('收到dataDefault', dataDefault);  
        dataDefault[0].date = action.value
        return state.merge({
            // title: action.title,
            dataDefault: dataDefault
        })
    }

    // 11.金額框變更偵測
    if (action.type === constants.ADD_VALUE) {   
        console.log('收到金額value', action.value)   
        const [...dataDefault] = state.get('dataDefault'); 
        dataDefault[0].amount = action.value
        return state.merge({
            dataDefault: dataDefault
        })
        // return state.merge({
        //     amount: action.value
        // })
    }

    // 16.描述框變更偵測
    if (action.type === constants.ADD_DESC) {   
        console.log('收到描述value', action.value);       
        const [...dataDefault] = state.get('dataDefault'); 
        dataDefault[0].desc = action.value
        return state.merge({
            dataDefault: dataDefault
        }) 
        // return state.merge({
        //     desc: action.value
        // })
    }
    
    // 24.選擇框1變更偵測
    if (action.type === constants.ADD_SELECT1) {   
        console.log('收到描述1value', action.value)       
        const [...dataDefault] = state.get('dataDefault'); 
        dataDefault[0].types = action.value
        return state.merge({
            dataDefault: dataDefault
        })    
        // return state.merge({
        //     types: action.value
        // })
    }

    // 25.選擇框2變更偵測
    if (action.type === constants.ADD_SELECT2) {   
        console.log('收到描述2value', action.value)          
        const [...dataDefault] = state.get('dataDefault'); 
        dataDefault[0].category = action.value
        return state.merge({
            dataDefault: dataDefault
        })    
        // return state.merge({
        //     types: action.value
        // })
    }

    // 29.按鈕變更偵測
    if (action.type === constants.ADD_BTN) {   
        console.log('收到按鈕value', action); 
        const [...dataDefault] = state.get('dataDefault');
        // console.log('收到dataDefault', dataDefault);  

        const [...data] = state.get('data'); 
        dataDefault[0].key = `${Math.floor(Math.random( )*1000)}`

        data.unshift(dataDefault);

        console.log('有收到嗎', data);  

        return state.merge({
            data: data
        }) 
    }

    return state;
}