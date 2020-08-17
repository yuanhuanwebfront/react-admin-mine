import React from "react";
import {Link, NavLink} from "react-router-dom";
import {NAV_LIST} from "../../config";
import Input from '../../components/Input';
import Button from "../../components/Button";

function Index(props) {
    let Logo = require("../../assets/img/logo.png"),
        userLogo = require('../../assets/img/user.png'),
        navList = NAV_LIST.map((info) => {
            return (
                <div className="nav-box" key={info.path}>
                    <NavLink to={info.path}>{info.name}</NavLink>
                </div>
            );
        });

    return (
        <div className="top-bar">
            <div className="inner">
                <Link to="/hot">
                    <img className="logo" src={Logo}/>
                </Link>
                {navList}
                <Input icon="iconfont icon-search" placeholder="请输入内容"/>
                <Button className="search-btn" type="primary" size='small'>提问</Button>
                <div className="flex user-area">
                    <i className="iconfont icon-bell" />
                    <i className="iconfont icon-chat" />
                    <img className='user-img' src={userLogo} />
                </div>
            </div>
        </div>
    );
}

export default Index;
