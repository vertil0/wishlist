import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import sheet from './modules/sheet/containers/sheet'
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={sheet} />
      </Router>
    )
  }
}

export default App
