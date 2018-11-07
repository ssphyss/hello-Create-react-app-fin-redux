import * as constants from './constants';
import * as constantsSearch from './../finSearch/store/constants';
// import * as constantsDetail from './../finDetail/store/constants';
import { /*fromJS,*/ Map } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = Map(
    {
        // focused: 444,
        // descDefault: '', 
        inputValue: '444',               

        // 預設的資料,當資料送出新增時,偵測變化
        dataDefault : 
            {
                key: '1',
                id: '999',
                name: 'John Brown',
                date: '2018-01-01',
                // types: ['收入'],
                types: '',
                category: '',
                amount: '',
                desc: ''
            }
        ,        
        // 列表清單
        data : [
            {
                key: '8',
                id: '532',
                name: 'John Brown',
                date: '2018-01-01',
                // types: ['收入'],
                types: '1',
                category: '1',
                amount: '999',
                desc: '預設描述1'
            },
            {
                key: '2',
                id: '455',
                name: 'John Brown',
                date: '2018-06-01',
                // types: ['收入'],
                types: '2',
                category: '3',
                amount: '666',
                desc: '預設描述2'
            },
            {
                key: '3',
                id: '789',
                name: 'John Brown',
                date: '2018-12-31',
                // types: ['收入'],
                types: '1',
                category: '2',
                amount: '888',
                desc: '預設描述3'
            }
        ],   
        /**
         * FinSearch
         * */
        // // 預設的查詢資料,當資料送出新增時,偵測變化
        // dataSearch : 
        //     {
        //         key: '1',
        //         id: '999',
        //         name: 'John Brown',
        //         date: '2018-01-01',
        //         // types: ['收入'],
        //         types: '',
        //         category: '',
        //         amount: '',
        //         desc: ''
        //     }
        // ,
        /**
         * FinDetail
         * */
        // isShowModal: false,
        // // 選取的資料     
        // dataActive:{},

        // // 選取的資料修改     
        // dataActiveEdit:{}
    }
)
export default (state = defaultState, action) => {
    /**
     * FinAdd
     * */

    // 6.日期框變更偵測
    if (action.type === constants.ADD_DATE) {   
        // console.log('收到dateString', action.value)    

        const {...dataDefault} = state.get('dataDefault');
        dataDefault.date = action.value;

        return state.merge({
            dataDefault: dataDefault
        })
    }

    // 11.金額框變更偵測
    if (action.type === constants.ADD_VALUE) {   
        // console.log('收到金額value', action.value)   

        const {...dataDefault} = state.get('dataDefault'); 
        dataDefault.amount = action.value;

        return state.merge({
            dataDefault: dataDefault
        })
        // return state.merge({
        //     amount: action.value
        // })
    }

    // 16.描述框變更偵測
    if (action.type === constants.ADD_DESC) {   
        // console.log('收到描述value', action.value);   

        const {...dataDefault} = state.get('dataDefault'); 
        dataDefault.desc = action.value;

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

        const {...dataDefault} = state.get('dataDefault'); 
        dataDefault.types = action.value;

        return state.merge({
            dataDefault: dataDefault
        })    
        // return state.merge({
        //     types: action.value
        // })
    }

    // 25.選擇框2變更偵測
    if (action.type === constants.ADD_SELECT2) {   
        // console.log('收到描述2value', action.value)       

        const {...dataDefault} = state.get('dataDefault'); 
        dataDefault.category = action.value;

        return state.merge({
            dataDefault: dataDefault
        })    
        // return state.merge({
        //     types: action.value
        // })
    }

    // 29.按鈕變更偵測
    if (action.type === constants.ADD_BTN) {   
        // console.log('新增按鈕Reducer', action); 
        // console.log('新增按鈕Types', action.types); 
        
        // 對dataDefault屬性作變化所以複製一份
        const {...dataDefault} = state.get('dataDefault');        
        // console.log('新增按鈕Types', dataDefault.types); 

        dataDefault.key = `${Math.floor(Math.random( )*1000)}`;
        dataDefault.id = `${Math.floor(Math.random( )*1000)}`;
        console.log('dataDefault', dataDefault);

        // 對data屬性作變化所以複製一份
        const [...data] = state.get('data'); 
        console.log('data', data);       
        data.unshift(dataDefault);
        // return state.merge({
        //     data: data,
        //     dataDefault: initdataDefault
        // }) 


        // 定義一個初始值
        const initdataDefault =            
            {
                // key: '1',
                // id: '',
                name: 'John Brown',
                date: '2001-01-01',
                types: '',
                category: '',
                amount: '',
                desc: ''
            } ;
        
        return state.set('data', data).set('dataDefault', initdataDefault);
    }

    /**
     * FinItem (id)
     * */

    // 33.按鈕刪除偵測
    if (action.type === constants.ITEM_DELETE) {   
        // console.log('刪除按鈕Reducer', action.id); 

        const i = action.id;

        let [...data] = state.get('data');
        data = data.filter((item) => {
            if(item.id === i){
                return false  // 不要的就是return false (那筆就不要的意思)
            }else {
                return true
            }
        })         
        return state.set('data', data);
    }
    
    // // 33.修改編輯
    // if (action.type === constants.ITEM_EDIT) {   
    //     console.log('編輯按鈕Reducer--', action.id);   
    //     let [...data] = state.get('data');   
    
    //     let selectData;        
    //     data.forEach((item)=>{
    //         if(item.id === action.id){
    //             selectData = item; 
    //         }
    //     })  
    //     console.log('selectData', selectData)
    //     return state.set('isShowModal', true)

    //     // return state.set('isShowModal', true).set('dataActive', selectData);
    // }


    // // 34.取消Modal修改
    // if (action.type === constants.DETAIL_CANCLE) {   
    //     // console.log('取消按鈕Reducer', action.value);                
    //     // return state.set('isShowModal', false);
    //     return state.set('isShowModal', action.value);
    // }

    // /**
    //  * FinDetail (id)
    //  * */

    // // Modal修改日期
    // if (action.type === constants.DETAIL_DATE) {   
    //     // console.log('修改日期Reducer', action.payload.dateString);       
    //     let {...dataActive} = state.get('dataActive');   
    //     dataActive.date = action.payload.dateString;
    //     dataActive.id = action.payload.id;
    //     return state.set('dataActive', dataActive);
    // }

    // Modal修改OK
    if (action.type === constants.DETAIL_OK) {   
        console.log('修改OKReducer');    
        let dataActive = action.dataActive
        // let {...dataActive} = state.get('dataActive');

        console.log('修改dataActive', dataActive);       

        let [...data] = state.get('data');
        // data裡面會有一筆的id跟dataActive的id相等
        // 把dataActive的每一個屬性都要重置給data

        // 1.簡單的情況,整筆複製
        // data = data.map((item) => {
        //     if(item.id === dataActive.id){
        //         item = dataActive;
        //     } 
        //     return item;            
        // }) 

        // 2.較有彈性
        data = data.map((item) => {
            // 如果有對應到id
            if(item.id === dataActive.id){
                // console.log('有對應到id')
                // 2.賦值
                Object.keys(dataActive).forEach((key)=>{
                    // item.date = dataActive.date;
                    // item.id = dataActive.id;
                    item[key] = dataActive[key]
                })
            }  
            return item;            
        }) 
        return state.set('data', data);
        // return state.set('data', data).set('isShowModal', false);
    }
   
    // // Modal修改S1
    // if (action.type === constants.DETAIL_S1) {   
    //     // console.log('Modal修改類別1 Reducer', action.payload);       
    //     let {...dataActive} = state.get('dataActive');   
    //     dataActive.types = action.payload.value;
    //     dataActive.id = action.payload.id;
    //     return state.set('dataActive', dataActive);
    // }

    // // Modal修改S2
    // if (action.type === constants.DETAIL_S2) {   
    //     // console.log('Modal修改類別2 Reducer', action.payload);       
    //     let {...dataActive} = state.get('dataActive');   
    //     dataActive.category = action.payload.value;
    //     dataActive.id = action.payload.id;
    //     return state.set('dataActive', dataActive);
    // }

    // // Modal修改金額
    // if (action.type === constants.DETAIL_AMOUNT) {   
    //     // console.log('Modal修改金額 Reducer', action.payload);       
    //     let {...dataActive} = state.get('dataActive');   
    //     dataActive.amount = action.payload.value;
    //     dataActive.id = action.payload.id;
    //     return state.set('dataActive', dataActive);
    // }

    // // Modal修改描述
    //  if (action.type === constants.DETAIL_DESC) {   
    //     // console.log('Modal修改金額 Reducer', action.payload);       
    //     let {...dataActive} = state.get('dataActive');   
    //     dataActive.desc = action.payload.value;
    //     dataActive.id = action.payload.id;
    //     return state.set('dataActive', dataActive);
    // }   
    
    //Ajax    
    if (action.type === constants.AJAX_LIST) {   
        // console.log('Ajax收到 Reducer', action);   
        // console.log('Ajax收到data Reducer', action.data);       
        // let {...dataActive} = state.get('dataActive');   
        // dataActive.desc = action.payload.value;
        // dataActive.id = action.payload.id;

        let data = action.data;
        return state.set('data', data);
    }   

    /**
     * FinSearch (value)
     * */

    // 29.Search按鈕AJAX查詢偵測
    if (action.type === constantsSearch.AJAX_LIST_SEARCH) {   
        console.log('查詢Ajax收到 Reducer---', action);   

        // 對data屬性作變化所以複製一份
        let [...data] = state.get('data'); 
        console.log('data', data);     

        data = action.data;
        return state.set('data', data);
    }

    return state;
}