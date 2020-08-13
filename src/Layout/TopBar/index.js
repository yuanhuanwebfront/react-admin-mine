import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV_LIST = [
  {
    path: "/hot",
    name: "首页",
  },
  {
    path: "/explore",
    name: "发现",
  },
  {
    path: "/waiting",
    name: "等你回答",
  }
];

function Index(props) {
  let Logo = require("../../assets/img/logo.png"),
      navList = NAV_LIST.map(info => {
          return <div className="nav-box" key={info.path}>
              <NavLink to={info.path}>{info.name}</NavLink>
          </div>
      });

  return (
    <div className="top-bar">
      <div className="inner">
        <Link to="/">
          <img className="logo" src={Logo} />
        </Link>
        {navList}
      </div>
    </div>
  );
}

export default Index;
