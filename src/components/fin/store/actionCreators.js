import * as constants from './constants';
import axios from 'axios';

/**
 * FinSearch (value)
 * */

// // 送出查詢
// export const getSearchBtnAction = () => {
//     console.log('查詢按鈕Action') 
//     return {
//         type: constants.SEARCH_BTN
//     }      
// }


/**
 * FinAdd (value)
 * */
// export const getAddDateAction = (dateString) => ({
//     type: constants.ADD_DATE,
//     value: dateString
// })

// 4.日期框變更偵測
export const getAddDateAction = (dateString) => {
    // console.log('dateString', dateString) 
    return {
        type: constants.ADD_DATE,
        value: dateString
    }      
}

// 9.金額框變更偵測
export const getAddValueAction = (value) => {
    // console.log('value', value) 
    return {
        type: constants.ADD_VALUE,
        value: value
    }      
}

// 14.描述框變更偵測
export const getAddDescAction = (value) => {
    // console.log('value', value) 
    return {
        type: constants.ADD_DESC,
        value: value
    }      
}

// 21.描述框變更偵測
export const getAddSelect1Action = (value) => {
    // console.log('value', value) 
    return {
        type: constants.ADD_SELECT1,
        value: value
    }      
}

// 22.描述框變更偵測
export const getAddSelect2Action = (value) => {
    // console.log('value', value) 
    return {
        type: constants.ADD_SELECT2,
        value: value
    }      
}

// 27.送出新增
export const getAddBtnAction = () => {
    // console.log('按鈕value') 
    return {
        type: constants.ADD_BTN
    }      
}

/**
 * FinItem (id)
 * */

// 31.刪除
export const getDeleteAction = (id) => {
    // console.log('刪除按鈕Action', id) 
    return {
        type: constants.ITEM_DELETE,
        id: id
    }      
}

// // 修改
// export const getEditAction = (id) => {
//     // console.log('修改按鈕Action', id) 
//     return {
//         type: constants.ITEM_EDIT,
//         id: id
//     }      
// }

// /**
//  * FinDetail (value)
//  * */


// // 取消Modal修改getCancelModalAction
// export const getModalCancel = (value) => {
//     // console.log('修改按鈕取消Action', value)
//     return {
//         type: constants.DETAIL_CANCLE,
//         value: value
//     }      
// }

// // Modal日期修改
// export const getModalDate = (id, dateString) => {
//     // console.log('Modal日期修改Action', id, dateString)
//     return {
//         type: constants.DETAIL_DATE,
//         payload: {id, dateString}
//     }      
// }


// // Modal類別1修改
// export const getModalSelect1 = (id, value) => {
//     // console.log('Modal類別1修改Action', id, value)
//     return {
//         type: constants.DETAIL_S1,
//         payload: {id, value}
//     }      
// }

// // Modal類別2修改
// export const getModalSelect2 = (id, value) => {
//     // console.log('Modal類別2修改Action', id, value)
//     return {
//         type: constants.DETAIL_S2,
//         payload: {id, value}
//     }      
// }

// // Modal金額修改
// export const getModalAmount = (id, value) => {
//     // console.log('Modal金額修改', id, value)
//     return {
//         type: constants.DETAIL_AMOUNT,
//         payload: {id, value}
//     }      
// }

// // Modal描述修改
// export const getModalDesc = (id, value) => {
//     // console.log('Modal描述修改', id, value)
//     return {
//         type: constants.DETAIL_DESC,
//         payload: {id, value}
//     }      
// }

// // Modal修改OK
// export const getModalOK = () => {
//     // console.log('Modal修改OKAction')
//     return {
//         type: constants.DETAIL_OK
//     }      
// }

// Modal修改OK
export const getModalOK = (dataActive) => {
    // console.log('Modal修改OKAction')
    return {
        type: constants.DETAIL_OK,
        dataActive: dataActive
    }      
}


// const changeList = (data) => ({
//     type: constants.AJAX_LIST,
//     data
// })

export const getList = () => {
    return async (dispatch) => {
        // console.log('AAA');        
        const res = await axios.get('https://easy-mock.com/mock/5be154988432fb26b49b1174/finapis/finList')
            .catch(()=>{alert('err')})

        console.log(res.data);

        const data = res.data.result.data;

        const action = {
            type: constants.AJAX_LIST,
            data        
        }        
        dispatch(action);
        
        // const action = changeList(data)

        // axios.get('https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/todolistAntd')
        // .then((res)=>{
        //     console.log('Ajax輸出：', res.data);
        //     // const data = res.data;
        //     // const action = {
        //     //     type: 'AJAX_LIST',
        //     //     data: data.data
        //     // }
        //     // dispatch(action);

        //     // const action = changeList(data.data);
        //     // dispatch(changeList(data.data));
        // })
        // .catch(()=>{alert('err')})
    }
}