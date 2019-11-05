import React, { Component } from 'react'
import Items from './Items'
import Modal from './Modal'
import Papers from './Papers'
import axios from 'axios'
import $ from "jquery"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: '1',
      music: {},
      technics: {},
      games: {},
      papers: {},
      clothes: {},
      boardGames: {},
      foods: {},
      other: {},
      modal: false,
      modalItem: {},
      сurrency: '₴',
      exchange: {
        "₴": 24.804,
        "₽": 63.359,
        "¥": 108.83,
        "$": 1
      }
    }
  }
  changeTab = (tab) => {
    this.setState({ tab })
  }
  onclick = () => {
    $("html, body").animate({ scrollTop: 0 }, 1000)
  }
  componentWillMount() {
    axios.get('wishes.json').then(item => {
      this.setState({
        music: item.data.music,
        technics: item.data.technics,
        games: item.data.games,
        papers: item.data.papers,
        clothes: item.data.clothes,
        boardGames: item.data.boardGames,
        foods: item.data.foods,
        other: item.data.other
      })
    })
  }
  exchangeCurrency = (price) => {
    const cur = price[price.length - 1]
    const numPrice = parseInt(price, 10)
    const { сurrency, exchange } = this.state
    if (cur === "₽" && сurrency !== cur) {
      return Math.round((numPrice / exchange[cur]) * exchange[сurrency]).toString() + сurrency
    } else if (cur === "₴" && сurrency !== cur) {
      return Math.round((numPrice / exchange[cur]) * exchange[сurrency]).toString() + сurrency
    } else if (cur === "¥" && сurrency !== cur) {
      return Math.round((numPrice / exchange[cur]) * exchange[сurrency]).toString() + сurrency
    } else if (cur === "$" && сurrency !== cur) {
      return Math.round(numPrice * exchange[сurrency]).toString() + сurrency
    }
    return price
  }
  openModal = (item) => {
    this.setState({ modal: true, modalItem: item })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }
  render() {
    const { сurrency } = this.state
    return (
      <div>
        <div className="nes-container is-dark with-title is-centered">
          <p className="title">Список желаний</p>
          <p><a href="#bgames">#</a>Настольные игры</p>
          <p><a href="#clothes">#</a>Одежда и акссесуары</p>
          <p><a href="#papers">#</a>Печатные издания</p>
          <p><a href="#games">#</a>Игры</p>
          <p><a href="#technics">#</a>Техника</p>
          <p><a href="#foods">#</a>Еда</p>
          <p><a href="#music">#</a>Музыка</p>
          <p><a href="#other">#</a>Другое</p>
          <div>
            <label>
              <input type="radio" className="nes-radio is-dark" name="сurrency" checked={сurrency === "₴"} onChange={e => this.setState({сurrency: e.target.value})} value={"₴"}/>
              <span>₴</span>
            </label>
            <label>
              <input type="radio" className="nes-radio is-dark" name="сurrency" checked={сurrency === "$"} onChange={e => this.setState({сurrency: e.target.value})} value={"$"}/>
              <span>$</span>
            </label>
            <label>
              <input type="radio" className="nes-radio is-dark" name="сurrency" checked={сurrency === "₽"} onChange={e => this.setState({сurrency: e.target.value})} value={"₽"}/>
              <span>₽</span>
            </label>
          </div>
        </div>
        <br />
        <div className="nes-container with-title is-centered is-rounded" id="bgames">
          <p className="title"><a href="#bgames">#</a>Настольные игры</p>
          <p>"Приглашаю в субботу на Battlestar Galactica!"</p>
          <p>Александр Маришенков</p>
        </div>
        <Items
          items={this.state.boardGames}
          openModal={this.openModal}
          exchangeCurrency={this.exchangeCurrency} />
        <div className="nes-container with-title is-centered is-rounded" id="clothes">
          <p className="title"><a href="#clothes">#</a>Одежда и акссесуары</p>
          <p>"Господи, почему я не родилась мальчиком! Открыла шкаф, что оттуда выпало — в том и пошла!"</p>
          <p>Людмила Сергеевна Васнецова</p>
        </div>
        <Items
          items={this.state.clothes}
          openModal={this.openModal}
          exchangeCurrency={this.exchangeCurrency} />
        <div className="nes-container with-title is-centered is-rounded" id="papers">
          <p className="title"><a href="#papers">#</a>Печатные издания</p>
          <p>"Комиксы, как сиськи. Они прекрасно выглядят на компьютере, но лучше бы я держал их в руках."</p>
          <p>Стэн Ли</p>
        </div>
        <Papers
          items={this.state.papers}
          openModal={this.openModal}
          exchangeCurrency={this.exchangeCurrency} />
        <div className="nes-container with-title is-centered is-rounded" id="games">
          <p className="title"><a href="#games">#</a>Игры</p>
          <p>"Игра - это праздник, потому что она выводит нас за пределы прагматики и на самый серьёзный вопрос нашего времени «зачем?» отвечает, глазом не моргнув: да просто так!"</p>
          <p>Роже Кайуа</p>
        </div>
        <Items
          items={this.state.games}
          openModal={this.openModal}
          exchangeCurrency={this.exchangeCurrency} />
        <div className="nes-container with-title is-centered is-rounded" id="technics">
          <p className="title"><a href="#technics">#</a>Техника</p>
          <p>"Подымая технику до уровня фантазии, не опусти фантазию до уровня техники."</p>
          <p>Владимир Хочинский</p>
        </div>
        <Items
          items={this.state.technics}
          openModal={this.openModal}
          exchangeCurrency={this.exchangeCurrency} />
        <div className="nes-container with-title is-centered is-rounded" id="foods">
          <p className="title"><a href="#foods">#</a>Еда</p>
          <p>"Ну, если ты будешь есть сладкое, но при этом думать, то не потолстеешь."</p>
          <p>L</p>
        </div>
        <Items
          items={this.state.foods}
          openModal={this.openModal}
          exchangeCurrency={this.exchangeCurrency} />
        <div className="nes-container with-title is-centered is-rounded" id="music">
          <p className="title"><a href="#music">#</a>Музыка</p>
          <p>"Биение сердца это первый источник музыки!"</p>
          <p>Сияющий Сатомэ</p>
        </div>
        <Items
          items={this.state.music}
          openModal={this.openModal}
          exchangeCurrency={this.exchangeCurrency} />
          <div className="nes-container with-title is-centered is-rounded" id="other">
          <p className="title"><a href="#other">#</a>Другое</p>
          <p>"Имеешь одно, будешь иметь и другое."</p>
          <p>Латинская пословица</p>
        </div>
        <Items
          items={this.state.other}
          openModal={this.openModal}
          exchangeCurrency={this.exchangeCurrency} />
        {
          this.state.modal &&
          <Modal
            closeModal={this.closeModal}
            item={this.state.modalItem}
          />
        }
        <button type="button" className="nes-btn is-error" style={{bottom: "25px", 
        position: "fixed", 
        right: "10px", 
        transform: "rotateZ(-90deg)"}} onClick={this.onclick}>></button>
      </div >
    )
  }
}

export default App;
