import * as constants from './constants';
import axios from 'axios';
import {objToUrl} from './../../../utils/ObjectToUrl';


// 彈出修改
export const getEditAction = (id, data) => {
    // console.log('修改按鈕Action', id) 
    return {
        type: constants.ITEM_EDIT,
        payload: {id, data}
    }      
}

/**
 * FinDetail (value)
 * */


// 取消Modal修改getCancelModalAction
export const getModalCancel = (value) => {
    // console.log('修改按鈕取消Action', value)
    return {
        type: constants.DETAIL_CANCLE,
        value: value
    }      
}

// Modal日期修改
export const getModalDate = (id, dateString) => {
    // console.log('Modal日期修改Action', id, dateString)
    return {
        type: constants.DETAIL_DATE,
        payload: {id, dateString}
    }      
}


// Modal類別1修改
export const getModalSelect1 = (id, value) => {
    // console.log('Modal類別1修改Action', id, value)
    return {
        type: constants.DETAIL_S1,
        payload: {id, value}
    }      
}

// Modal類別2修改
export const getModalSelect2 = (id, value) => {
    // console.log('Modal類別2修改Action', id, value)
    return {
        type: constants.DETAIL_S2,
        payload: {id, value}
    }      
}

// Modal金額修改
export const getModalAmount = (id, value) => {
    // console.log('Modal金額修改', id, value)
    return {
        type: constants.DETAIL_AMOUNT,
        payload: {id, value}
    }      
}

// Modal描述修改
export const getModalDesc = (id, value) => {
    // console.log('Modal描述修改', id, value)
    return {
        type: constants.DETAIL_DESC,
        payload: {id, value}
    }      
}

// Modal修改OK
export const getModalOK = () => {
    console.log('Modal修改OKAction-----')
    return {
        type: constants.DETAIL_OK
    }      
}