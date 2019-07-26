import React from 'react';
import Header from './sections/header';
import Menu from './sections/menu'
import Content from './sections/content'
import './App.css';

import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter} from "react-router-dom";
import {SegmentGroup} from "semantic-ui-react";

const App = () => {
  return <BrowserRouter>
    <div className={"application"}>
      <SegmentGroup>
        <Header/>
        <Menu/>
        <Content/>
      </SegmentGroup>
    </div>
  </BrowserRouter>;
};

export default App;
