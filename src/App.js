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
      console.log(item)
      this.setState({ music: item.data.music })
    })
  }

  renderMusic = () => {
    
   const priority = {'1': "is-error", "2": "is-warning", "3": "is-success", "4": "is-primary"}
    return this.state.music.map(item => {
      console.log(item.checked)
      return (
        <tr className={"nes-text " + priority[item.priority]} >
        <td>
        <label>
  <input type="checkbox" className="nes-checkbox" onClick={(e) => e.preventDefault()} checked={item.checked}/>
  <span></span>
</label>
  </td>

        <td>{item.name}</td>
        <td>{item.artist}</td>
        <td>{item.price}</td>
      </tr>
      )
    })
}
  render() {
    console.log(this.state.music)
    return (
      <div><div className="nes-container with-title is-centered" id="technics">
      <p className="title"><a href="#technics">#</a>Техника</p>
      <p>"Подымая технику до уровня фантазии, не опусти фантазию до уровня техники."</p>
          <p>Владимир Хочинский </p>
    </div>
    <br/>
    <progress className="nes-progress" value={0} max={this.state.music.length }></progress>
    <div className="nes-table-responsive">
      <table className="nes-table is-bordered is-centered">
        <thead>
          <tr>
            <th></th>
            <th>Название альбома</th>
            <th>Исполнитель</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
    <br/>
        <div className="nes-container with-title is-centered" id="music">
  <p className="title"><a href="#music">#</a>Музыка</p>
  <p>"Биение сердца это первый источник музыки!"</p>
      <p>Сияющий Сатомэ</p>
</div>
<br/>
<progress className="nes-progress" value={0} max={this.state.music.length }></progress>
<div className="nes-table-responsive">
  <table className="nes-table is-bordered is-centered">
    <thead>
      <tr>
        <th></th>
        <th>Название альбома</th>
        <th>Исполнитель</th>
        <th>Цена</th>
      </tr>
    </thead>
    <tbody>
      {this.state.music && this.state.music.length > 0 && this.renderMusic()}
    </tbody>
  </table>
</div>
      {/* <img src="https://geekflare.com/wp-content/uploads/2018/10/uikit.png"  style={{imageRendering: "pixelated"}}></img> */}
      </div>
    )
  }
}

export default App;
