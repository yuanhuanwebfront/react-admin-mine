import React from "react";

const LIST = [{
    name: '推荐',
    id: 'recommend'
},{
    name: '关注',
    id: 'focus'
},{
    name: '热榜',
    id: 'hot'
}];

export default function NavTab(props){
    return <nav className='flex'>
        {LIST.map(item => {
            return <div onClick={() => {props.selectTab(item.id)}}
                        className={`nav-item ${props.current === item.id ? 'active' : ''}`}
                        key={item.id}>
                {item.name}
            </div>
        })}
    </nav>
}