import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LIST } from "../../config";
import Input from '../../components/Input';

function Index(props) {
  let Logo = require("../../assets/img/logo.png"),
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
          <img className="logo" src={Logo} />
        </Link>
        {navList}
        <Input icon="iconfont icon-search" placeholder="请输入内容" />
      </div>
    </div>
  );
}

export default Index;
