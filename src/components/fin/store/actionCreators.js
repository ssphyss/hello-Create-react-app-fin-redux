import * as constants from './constants';

/**
 * FinAdd (value)
 * */
// export const getAddDateAction = (dateString) => ({
//     type: constants.ADD_DATE,
//     value: dateString
// })

// 4.日期框變更偵測
export const getAddDateAction = (dateString) => {
    console.log('dateString', dateString) 
    return {
        type: constants.ADD_DATE,
        value: dateString
    }      
}

// 9.金額框變更偵測
export const getAddValueAction = (value) => {
    console.log('value', value) 
    return {
        type: constants.ADD_VALUE,
        value: value
    }      
}

// 14.描述框變更偵測
export const getAddDescAction = (value) => {
    console.log('value', value) 
    return {
        type: constants.ADD_DESC,
        value: value
    }      
}

// 21.描述框變更偵測
export const getAddSelect1Action = (value) => {
    console.log('value', value) 
    return {
        type: constants.ADD_SELECT1,
        value: value
    }      
}

// 22.描述框變更偵測
export const getAddSelect2Action = (value) => {
    console.log('value', value) 
    return {
        type: constants.ADD_SELECT2,
        value: value
    }      
}


// 27.
export const getAddBtnAction = () => {
    console.log('按鈕value') 
    return {
        type: constants.ADD_BTN
    }      
}






// // 15.送出新增
// export const getItemSubmitAction = () => ({
//     type: constants.ADD_SUBMIT
// })


// /**
//  * TodoItem (value,index)
//  * */

// // 24.輸入框變更偵測
// export const getListChangeAction = (value, index) => ({
//     type: constants.ITEM_CHANGE,
//     payload: {value, index}
// })

// // 30.刪除
// export const getListDeleteAction = (index) => ({
//     type: constants.ITEM_DELETE,
//     payload: {index}
// })

// // 35.變更勾選
// export const getCheckboxAction = (index) => ({
//     type: constants.CHECKBOX_CHANGE,
//     payload: {index}
// })