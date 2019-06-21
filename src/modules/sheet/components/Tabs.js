import React, { Component } from 'react'


export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      points: 0,
      modalShow: false
    }
  }
  componentDidMount() {
    this.setState({ points: this.props.points })
  }
  render() {
    const { switchTab, tabName } = this.props
    const { points } = this.state
    return (
      <div className="tabs">
        <ul>  
          <li style={{ marginLeft: '10px', marginRight: '10px' }}>
            <a className="button is-small" onClick={() => this.setState({ modalShow: true })}>{this.props.points} очков</a>
          </li>

          <li className={tabName === '1' ? "is-active" : ''} onClick={() => switchTab('1')}>
            <a>
              <span>Описание</span>
            </a>
          </li>
          <li className={tabName === '2' ? "is-active" : ''} onClick={() => switchTab('2')}>
            <a>
              <span>Атрибуты</span>
            </a>
          </li>
          <li className={tabName === '3' ? "is-active" : ''} onClick={() => switchTab('3')}>
            <a>
              <span>Преимущества и недостатки</span>
            </a>
          </li>
          <li className={tabName === '4' ? "is-active" : ''} onClick={() => switchTab('4')}>
            <a>
              <span>Умения</span>
            </a>
          </li>
        </ul>
        <div className={`modal ${this.state.modalShow && 'is-active'}`}>
          <div className="modal-background"></div>
          <div className="modal-content" style={{ width: "200px" }}>
            <div className='is-8'>
              <article className="tile notification is-child has-background-white" >
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Очки</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" value={this.state.points} onChange={e => this.setState({points: e.target.value})} />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Преимущества</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input is-static" type="text" readOnly />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Недостатки</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input is-static" type="text" readOnly />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Умения</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input is-static" type="text" readOnly />
                      </p>
                    </div>
                  </div>
                </div>
                <span className="button is-success" style={{borderRadius: 4 + 'px !important'}} onClick={() => {
                  this.setState({ modalShow: false })
                  this.props.changePoints(points)
                  }}>Success</span>  
              </article>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={() => this.setState({ modalShow: false })}></button>
        </div>
      </div>
    )
  }
} 
