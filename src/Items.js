import React, { Component } from 'react'

const ProgressBar = {
    margin: 'auto',
    display: 'block',
    width: "90%"
  }

export default class Items extends Component {
    getCount = () => {
        let count = 0
        this.props.items.forEach(item => {
            item.checked && (count = count + 1)
        })
        return count
    }

    getStyle = () => {
        const { items } = this.props
        const count = this.getCount()
        const maxCount = items.length
        if( (maxCount / 3) > count ) {
            return 'is-warning'
        } else if ( ((maxCount / 3) * 2) > count) {
            return 'is-success'
        } else if (maxCount > count) {
            return 'is-primary'
        } else {
            return 'is-pattern'
        }
    }
    render() {
        const priority = { '1': "is-primary", "2": "is-success", "3": "is-success", "4": "is-error" }
        const {
            items,
            openModal
        } = this.props
        return (
            <div>
                <br />
                <progress className={"nes-progress " + (items.length > 0 && this.getStyle())} value={0} value={items.length > 0 && this.getCount()} max={items.length} style={ProgressBar}></progress>
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
                                        <tr className={"nes-text " + (item.checked ? 'is-disabled' : priority[item.priority])} key={item.name} >
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