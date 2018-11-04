import React from 'react';
import FinCenter from './FinCenter.js';
import FinSearch from './FinSearch.js';
import FinAdd from './FinAdd.js';
import FinItem from './FinItem.js';
import'./index.scss';

export default class Fin extends React.Component{
    render(){ 
        return(
            <div className='wrapper--fin'>
                <div className='finbox'>
                    <FinCenter />
                    <FinSearch />
                    <FinAdd />
                    <FinItem />
                </div>    
            </div>
        )
    }
}