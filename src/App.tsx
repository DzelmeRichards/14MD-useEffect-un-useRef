import React from 'react';
import './App.scss';
import FirstA from './components/First/FirstA';
import FirstB from './components/First/FirstB';
import Third from './components/First/Third';
import ButtonDisabled from './components/First/ButtonDisabled';
import Fifth from './components/First/Fifth';
import ColorBox from './components/First/ColorBox';

const App = () => (
  <div className="container container-fluid">
    <div className="row">
      <FirstA />
    </div>
    <div className="row">
      <FirstB />
    </div>
    <div className="row">
      <Third />
    </div>
    <div className="row">
      <ButtonDisabled />
    </div>
    <div className="row">
      <Fifth />
    </div>
    <div className="row">
      <ColorBox />
    </div>
  </div>
);

export default App;
