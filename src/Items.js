import React, { Component } from 'react'

const ProgressBar = {
    margin: 'auto',
    display: 'block',
    width: "90%"
  }

export default class Items extends Component {
    render() {
        const priority = { '1': "is-primary", "2": "is-success", "3": "is-success", "4": "is-error" }
        const {
            items,
            openModal
        } = this.props
        return (
            <div>
                <br />
                <progress className="nes-progress" value={0} max={items.length} style={ProgressBar}></progress>
                <br />
                <br />
                <div className="nes-table-responsive">
                    <table className="nes-table is-bordered is-centered">
                        <thead>
                            <tr>
                                <th></th>
                                <th style={{ width: '100%' }}>Именование</th>
                                <th>Цена</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items && items.length > 0 &&
                                items.map(item => {
                                    return (
                                        <tr className={"nes-text " + priority[item.priority]} key={item.name} >
                                            <td>
                                                <label>
                                                    <input type="checkbox" className="nes-checkbox" onClick={(e) => e.preventDefault()} checked={item.checked} />
                                                    <span></span>
                                                </label>
                                            </td>
                                            <td onClick={() => openModal(item)} className='nes-pointer'>{item.name}</td>
                                            <td>{this.props.exchangeCurrency(item.price)}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
                <br />
            </div>
        )
    }
}