import React, {useState} from 'react';

import NavTab from './part/Nav';
import RankItem from "../../components/Rank-Item";

import { HOT_RANK } from "../../mock";

console.log(HOT_RANK)
export default function Hot(){

    let [currentTab, setCurrentTab] = useState('hot');

    function selectNavTab(tab) {
        if(tab === currentTab) return;
        setCurrentTab(tab);
    }

    let rankList = HOT_RANK.data.map((item, idx) => {
        return <RankItem title={item.target.title_area.text} key={item.id}
                  desc={item.target.excerpt_area.text}
                  img={item.target.image_area.url}
                  hot={item.target.metrics_area.text}
                  num={idx + 1}
        />
    })

    return <div className='hot-content'>
        <div className="main">
            <NavTab current={currentTab} selectTab={selectNavTab}/>
            <div>
                {rankList}
            </div>
        </div>
        <div className="sticky"></div>
    </div>
}