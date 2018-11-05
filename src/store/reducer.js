// 1. 引入
// import { combineReducers } from  'redux';
// 改引用redux-immutable
import { combineReducers } from  'redux-immutable';
// 2. 傳入小的reducer
import { reducer as finReducer } from './../components/fin/store';

const reducer = combineReducers ({
    // abc : todoListReducer
    fin : finReducer
})
export default reducer;
