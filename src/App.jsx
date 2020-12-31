import React, { Component } from 'react'
import './css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/home.jsx';
import Index from './component/admin/index';
import Login from './component/admin/login';
import InputPartner from './component/admin/inputPartner';
import InputPortofolio from './component/admin/inputPortofolio';
import InputYoutube from './component/admin/inputYoutube';
import InputClient from './component/admin/inputClient';
import InputWeDo from './component/admin/inputWeDo.jsx';
import DataPt from './component/admin/dataPt';
import InputAbout from './component/admin/inputAbout';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />

        </Switch>
      </BrowserRouter>
    );
  }
}
