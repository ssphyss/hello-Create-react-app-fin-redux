import * as constants from './constants';

import { fromJS, Map } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = Map(
    {
        isShowModal: false,
        // 選取的資料     
        dataActive:{},

        // 選取的資料修改     
        dataActiveEdit:{}
    }
)
export default (state = defaultState, action) => {
    /**
     * FinDetail (id)
     * */

    // 33.修改編輯
    if (action.type === constants.ITEM_EDIT) {   
        console.log('編輯按鈕Reducer*****', action.payload.id);   
        console.log('編輯按鈕Reducer*****', action.payload.data);   
        
        // let [...data] = state.get('data');   
        // console.log('編輯按鈕Reducer*****data', data);


        // let selectData;        
        // data.forEach((item)=>{
        //     if(item.id === action.id){
        //         selectData = item; 
        //     }
        // })  
        // console.log('selectData', selectData)

        let selectData;
        action.payload.data.forEach((item)=>{
            // 知道選中的ID的資料是什麼
            // selectData 就等於選中的資料
            if(item.id === action.payload.id){
                selectData = item; 
            }
        })  

        // 打印選中的資料,把資料賦給dataActive讀取
        console.log('selectData', selectData)

        // return state.set('isShowModal', true)
        return state.set('isShowModal', true).set('dataActive', selectData);
    }

    // Modal修改日期
    if (action.type === constants.DETAIL_DATE) {   
        console.log('修改日期Reducer', action.payload.dateString);       
        let {...dataActive} = state.get('dataActive');   
        dataActive.date = action.payload.dateString;
        dataActive.id = action.payload.id;
        // console.log('修改日期Reducer--dataActive', dataActive);  
        return state.set('dataActive', dataActive);
    }

    // Modal修改OK
    if (action.type === constants.DETAIL_OK) {   

    //     console.log('修改OKR按鈕Reducer*****', action); 
     
    //     let {...dataActive} = state.get('dataActive');

    //     console.log('修改dataActive', dataActive);       

    //     // let [...data] = state.get('data');
    //     // data裡面會有一筆的id跟dataActive的id相等
    //     // 把dataActive的每一個屬性都要重置給data

    //     // 1.簡單的情況,整筆複製
    //     // data = data.map((item) => {
    //     //     if(item.id === dataActive.id){
    //     //         item = dataActive;
    //     //     } 
    //     //     return item;            
    //     // }) 

    //     // 2.較有彈性
    //     // data = data.map((item) => {
    //     //     // 如果有對應到id
    //     //     if(item.id === dataActive.id){
    //     //         // console.log('有對應到id')
    //     //         // 2.
    //     //         Object.keys(dataActive).forEach((key)=>{
    //     //             // item.date = dataActive.date;
    //     //             // item.id = dataActive.id;
    //     //             item[key] = dataActive[key]
    //     //         })
    //     //     }  
    //     //     return item;            
    //     // }) 
    //     // return state.set('data', data).set('isShowModal', false);
    return state.set('isShowModal', false);
    }
   
    // Modal修改S1
    if (action.type === constants.DETAIL_S1) {   
        // console.log('Modal修改類別1 Reducer', action.payload);       
        let {...dataActive} = state.get('dataActive');   
        dataActive.types = action.payload.value;
        dataActive.id = action.payload.id;
        return state.set('dataActive', dataActive);
    }

    // Modal修改S2
    if (action.type === constants.DETAIL_S2) {   
        // console.log('Modal修改類別2 Reducer', action.payload);       
        let {...dataActive} = state.get('dataActive');   
        dataActive.category = action.payload.value;
        dataActive.id = action.payload.id;
        return state.set('dataActive', dataActive);
    }

    // Modal修改金額
    if (action.type === constants.DETAIL_AMOUNT) {   
        // console.log('Modal修改金額 Reducer', action.payload);       
        let {...dataActive} = state.get('dataActive');   
        dataActive.amount = action.payload.value;
        dataActive.id = action.payload.id;
        return state.set('dataActive', dataActive);
    }

    // Modal修改描述
     if (action.type === constants.DETAIL_DESC) {   
        // console.log('Modal修改金額 Reducer', action.payload);       
        let {...dataActive} = state.get('dataActive');   
        dataActive.desc = action.payload.value;
        dataActive.id = action.payload.id;
        return state.set('dataActive', dataActive);
    }   
    
    // 34.取消Modal修改
    if (action.type === constants.DETAIL_CANCLE) {   
        // console.log('取消按鈕Reducer', action.value);                
        // return state.set('isShowModal', false);
        return state.set('isShowModal', action.value);
    }

    return state;
}