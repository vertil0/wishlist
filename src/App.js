import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import sheet from './modules/sheet/containers/sheet'
const isAuthenticated = user => !!user
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={test} />
        <Route path="/sheet/" component={sheet} />
      </Router>
    )
  }
}

function test() {
  return (
    <div className="columns" style={{
      height: "100vh",
      padding: "0",
      flexWrap: "nowrap",
      justifyContent: "center",
      alignItems: "center"
    }}>
    <Link to="/sheet"> 
    <div class="is-8">
      <article class="tile is-child notification is-warning" style={{width: "200px"}}>
          <p class="title">Создать</p>
          <p class="subtitle">нового персонажа</p>
        </article>
        </div>
        </Link>
    </div>
  )
}

export default App
