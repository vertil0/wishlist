import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { tab: '1', music: {} }
  }
  changeTab = (tab) => {
    this.setState({ tab })
  }
  componentWillMount() {
    axios.get('wishes.json').then(item => {
      this.setState({ music: item.data.music })
    })
  }

  renderMusic = () => {
    return this.state.music.map(item => {
      return (
        <div className="column is-one-third">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                {item.name}
              </p>
            </header>
            <div className="card-image">
              <figure className="image is-1by1">
                <img src={item.img} alt="Placeholder image" />
                <span className="tag is-success is-overlay is-centered" style={{ width: 70, margin: '5px 5px 0 auto', padding: 5 }}>{item.price}</span>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="subtitle is-6 has-text-justified">Artist: {item.artist}</p>
                </div>
              </div>
              {item.comment && <div className="content">
                {item.comment}
              </div>
              }
            </div>
            <footer className="card-footer">
              <a href={item.link} className="card-footer-item ">Buy</a>

            </footer>
          </div>
        </div>)
    })
  }
  render() {
    console.log(this.state.music)
    return (
      <div>
        <div className="tabs">
          <ul>
            <li className={this.state.tab === '1' && "is-active"} onClick={() => this.changeTab('1')}><a>1</a></li>
            <li className={this.state.tab === '2' && "is-active"} onClick={() => this.changeTab('2')}><a>2</a></li>
            <li className={this.state.tab === '3' && "is-active"} onClick={() => this.changeTab('3')}><a>3</a></li>
            <li className={this.state.tab === '4' && "is-active"} onClick={() => this.changeTab('4')}><a>4</a></li>
          </ul>
        </div>
        <div className="columns is-multiline">
          {this.state.music.length > 0 && this.renderMusic()}
        </div>
      </div>
    );
  }
}

export default App;
