import React from "react";


export default function RankItem(props){
    return <div className="flex rank-item">
        <div className='rank-num-box'>
            <div className={`rank-num ${props.num <= 3 ? 'active' : ''}`}>{props.num}</div>
        </div>
        <div className='content'>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
            <p className="share">
                <span>
                    <i className="iconfont icon-fire" /> {props.hot}
                </span>
                <span className="share-icon">
                    <i className="iconfont icon-share-arrow" /> 分享
                </span>
            </p>
        </div>
        <img alt="" className="news-img" src={props.img} />
    </div>
}