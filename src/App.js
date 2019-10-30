import React from 'react';
import './App.css';
import Auth from './components/auth'
import Home from './components/Home'
import Header from './components/header'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
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
      <Router>
        <Switch>
          <Route path="/" component={layout(Home)} exact></Route>
        </Switch>
        <Auth></Auth>
      </Router >
    </>
  );
}

export default App;
