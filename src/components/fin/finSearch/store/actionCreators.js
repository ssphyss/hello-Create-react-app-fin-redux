import * as constants from './constants';
import axios from 'axios';
import {objToUrl} from './../../../utils/ObjectToUrl';

/**
 * FinSearch (value)
 * */

// 4.日期框From變更偵測
export const getSearchDateFrom = (dateString) => {
    console.log('日期From框Action', dateString) 
    return {
        type: constants.SEARCH_DATEFROM,
        value: dateString
    }      
}

// 4.日期框To變更偵測
export const getSearchDateTo = (dateString) => {
    console.log('日期To框Action', dateString) 
    return {
        type: constants.SEARCH_DATETO,
        value: dateString
    }      
}

// 14.選擇框1變更偵測
export const getSearchSelect1 = (value) => {
    console.log('選擇框value1', value) 
    return {
        type: constants.SEARCH_SELECT1,
        value: value
    }      
}

// 14.選擇框2變更偵測
export const getSearchSelect2 = (value) => {
    console.log('選擇框value2', value) 
    return {
        type: constants.SEARCH_SELECT2,
        value: value
    }      
}

// 送出查詢
// export const getSearchBtnAction = () => {
//     console.log('查詢按鈕Action') 
//     return {
//         type: constants.SEARCH_BTN
//     }      
// }

// const changeList = (data) => ({
//     type: constants.AJAX_LIST_SEARCH,
//     data
// })

// 送出查詢
export const getSearchList = (dataSearch) => {
    return async (dispatch) => {
        console.log('AAA');   
        console.log('dataSearch---', dataSearch);     // 看傳甚麼給後端

        console.log('objToUrl---',objToUrl(dataSearch))  // 把參數傳給後端
        const url = objToUrl(dataSearch);
        // console.log(`https://easy-mock.com/mock/5be154988432fb26b49b1174/finapis/finListSearch?${url}`)
        // https://easy-mock.com/mock/5be154988432fb26b49b1174/finapis/finListSearch?dateFrom=2018-01-01&dateTo=2018-01-01&types=1&category=2

        // const res = await axios.get('https://easy-mock.com/mock/5be154988432fb26b49b1174/finapis/finListSearch')
        const res = await axios.get(`https://easy-mock.com/mock/5be154988432fb26b49b1174/finapis/finListSearch?${url}`)
            .catch(()=>{alert('err')})
        console.log('Ajax結果', res.data);  // 到時候看後端傳回的

        const data = res.data.result.data;
        const action = {
            type: constants.AJAX_LIST_SEARCH,
            data: data    
        }        
        dispatch(action);        
        
    }
}