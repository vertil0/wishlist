import React, { Component } from 'react'

export default class Attributes extends Component {
  constructor(props) {
    super(props)
    this.state = { character: {} }
  }
  componentDidMount() {
    this.setState({ character: this.props.character })
  }
  render() {
    const { character } = this.props
    return (
      <div>
        <div className="columns">
          <div className="column">
            <div className="field ">
              <label className="label">Сила</label>
              <div className="field has-addons">
                <div className="control">
                  <input className="input is-static" type="text" readonly value={'0'} />
                </div>
                <p class="control">
                  <a class="button">
                    <span class="icon is-small">
                      <i class="fas fa-align-left"></i>
                    </span>
                    <span>Left</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button">
                    <span class="icon is-small">
                      <i class="fas fa-align-center"></i>
                    </span>
                    <span>Center</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button">
                    <span class="icon is-small">
                      <i class="fas fa-align-right"></i>
                    </span>
                    <span>Right</span>
                  </a>
                </p>
              </div>
            </div>

            <div className="field ">
              <label className="label">Ловкость</label>
              <div className="control">
                <input className="input" type="text" placeholder="Зелёные" />
              </div>
            </div>
            <div className="field ">
              <label className="label">Интелект</label>
              <div className="control">
                <input className="input" type="text" placeholder="Светлая, Веснушчатая" />
              </div>
            </div>
            <div className="field ">
              <label className="label">Здоровья</label>
              <div className="control">
                <input className="input" type="text" placeholder="Правая" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
