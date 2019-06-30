import React, { Component } from 'react'
import Items from './Items'
import Modal from './Modal'
import Papers from './Papers'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { tab: '1', music: {}, technics: {}, games: {}, papers: {}, modal: false, modalItem: {} }
  }
  changeTab = (tab) => {
    this.setState({ tab })
  }
  componentWillMount() {
    axios.get('wishes.json').then(item => {
      console.log(item)
      this.setState({ music: item.data.music, technics: item.data.technics, games: item.data.games, papers: item.data.papers })
    })
  }

  openModal = (item) => {
    console.log(item.img)
    this.setState({ modal: true, modalItem: item })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }
  render() {
    return (
      <div>
        <div class="nes-container is-dark with-title is-centered">
          <p class="title">Список желаний</p>
          <p><a href="#papers">#</a>Печатные издания</p>
          <p><a href="#games">#</a>Игры</p>
          <p><a href="#technics">#</a>Техника</p>
          <p><a href="#music">#</a>Музыка</p>
        </div>
        <br/>
      <div className="nes-container with-title is-centered is-rounded" id="papers">
        <p className="title"><a href="#papers">#</a>Печатные издания</p>
        <p>"Комиксы, как сиськи. Они прекрасно выглядят на компьютере, но лучше бы я держал их в руках."</p>
        <p>Стэн Ли</p>
      </div>
      <Papers
        items={this.state.papers}
        openModal={this.openModal} />
      <div className="nes-container with-title is-centered is-rounded" id="games">
        <p className="title"><a href="#games">#</a>Игры</p>
        <p>"Игра - это праздник, потому что она выводит нас за пределы прагматики и на самый серьёзный вопрос нашего времени «зачем?» отвечает, глазом не моргнув: да просто так!"</p>
        <p>Роже Кайуа</p>
      </div>
      <Items
        items={this.state.games}
        openModal={this.openModal} />
      <div className="nes-container with-title is-centered is-rounded" id="technics">
        <p className="title"><a href="#technics">#</a>Техника</p>
        <p>"Подымая технику до уровня фантазии, не опусти фантазию до уровня техники."</p>
        <p>Владимир Хочинский </p>
      </div>
      <Items
        items={this.state.technics}
        openModal={this.openModal} />
      <div className="nes-container with-title is-centered is-rounded" id="music">
        <p className="title"><a href="#music">#</a>Музыка</p>
        <p>"Биение сердца это первый источник музыки!"</p>
        <p>Сияющий Сатомэ</p>
      </div>
      <Items
        items={this.state.music}
        openModal={this.openModal} />
        {
      this.state.modal &&
      <Modal
        closeModal={this.closeModal}
        item={this.state.modalItem}
      />
    }
    {/* <img src="https://geekflare.com/wp-content/uploads/2018/10/uikit.png"  style={{imageRendering: "pixelated"}}></img> */ }
      </div >
    )
  }
}

export default App;
