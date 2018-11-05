import * as constants from './constants';
import { fromJS } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = fromJS(
    {
        // focused: 444,
        inputValue: '0',
        // 設定資料
        data : [{
            key: '1',
            name: 'John Brown',
            date: '2001-01-01',
            // types: ['收入'],
            types: 1,
            category: 1,
            amount: 999,
            desc: 'New York No. 1 Lake Park'
        }]
    }
)
export default (state = defaultState, action) => {
    return state;
}