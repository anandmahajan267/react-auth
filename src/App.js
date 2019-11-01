import React from 'react';
import './App.css';
import Auth from './components/auth'
import Home from './components/Home'
import Header from './components/header'
import Footer from './components/footer'

import { Provider } from "react-redux";
import store from "./store/store";
import history from './history/history'

import {
  Router,
  Switch,
  Route
} from "react-router-dom";

function layout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <>
        <Header></Header>
        <WrappedComponent {...this.props} />
        <Footer></Footer>
      </>
    }
  }
}

function App() {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={layout(Home)} exact></Route>
          </Switch>
          <Auth></Auth>
        </Router >
      </Provider>
    </>
  );
}

export default App;
