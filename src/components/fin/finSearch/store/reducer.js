import * as constants from './constants';
import { /*fromJS,*/ Map } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = Map(
    {
        // 預設的查詢資料,當資料送出新增時,偵測變化
        dataSearch : 
            {
                // key: '1',
                // id: '999',
                // name: 'John Brown',
                dateFrom: '2018-01-01',
                dateTo: '2018-01-01',
                types: '',
                category: '',
                // amount: '',
                // desc: ''
            }
    }
)
export default (state = defaultState, action) => {
    /**
     * FinSearch
     * */

    // 6.日期框From變更偵測Reducer，更新dataSearch
    if (action.type === constants.SEARCH_DATEFROM) {   
        console.log('日期框From變更偵測Reducer', action.value)    

        const {...dataSearch} = state.get('dataSearch');
        dataSearch.dateFrom = action.value;

        return state.merge({
            dataSearch: dataSearch
        })
        
    }

    // 6.日期框To變更偵測Reducer，更新dataSearch
    if (action.type === constants.SEARCH_DATETO) {   
        console.log('日期框To變更偵測Reducer', action.value)    

        const {...dataSearch} = state.get('dataSearch');
        dataSearch.dateTo = action.value;

        return state.merge({
            dataSearch: dataSearch
        })
    }
   
    // 24.選擇框1變更偵測，更新dataSearch
    if (action.type === constants.SEARCH_SELECT1) {   
        console.log('收到描述1value的Reducer', action.value)     

        const {...dataSearch} = state.get('dataSearch'); 
        dataSearch.types = action.value;
        return state.merge({
            dataSearch: dataSearch
        })   

    }

    // 25.選擇框2變更偵測，更新dataSearch
    if (action.type === constants.SEARCH_SELECT2) {   
        console.log('收到描述2value的Reducer', action.value)       

        const {...dataSearch} = state.get('dataSearch'); 
        dataSearch.category = action.value;

        return state.merge({
            dataSearch: dataSearch
        })   
    }

    // // 29.按鈕AJAX查詢偵測，更新「data」
    // if (action.type === constants.AJAX_LIST_SEARCH) {   
    //     console.log('查詢Ajax收到 Reducer', action);   

    //     // 對data屬性作變化所以複製一份
    //     const [...data] = state.get('data'); 
    //     console.log('data', data);     

    //     data = action.data;
    //     return state.set('data', data);
    // }

    return state;
}