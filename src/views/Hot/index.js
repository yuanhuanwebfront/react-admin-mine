import React, {useState} from 'react';
import NavTab from './part/Nav';

export default function Hot(){

    let [currentTab, setCurrentTab] = useState('hot');

    function selectNavTab(tab) {
        if(tab === currentTab) return;
        setCurrentTab(tab);
    }

    return <div className='hot-content'>
        <div className="main">
            <NavTab current={currentTab} selectTab={selectNavTab}/>
        </div>
        <div className="sticky"></div>
    </div>
}