import React from "react";
import TopBar from "../../Layout/TopBar";
import { Route } from "react-router-dom";

import Hot from "../Hot";
import Explore from "../Explore";
import Waiting from "../Waiting";

function Home() {
  return (
    <div className="home-page">
      <TopBar />
      <Route exact path="/hot">
        <Hot />
      </Route>
      <Route exact path="/explore">
        <Explore />
      </Route>
      <Route exact path="/waiting">
        <Waiting />
      </Route>
    </div>
  );
}

export default Home;
