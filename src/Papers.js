import React, { Component, Fragment } from 'react'

const ProgressBar = {
    margin: 'auto',
    display: 'block',
    width: "90%"
  }

export default class Items extends Component {
    getCount = () => {
        let count = 0
        Object.keys(this.props.items).forEach(comics => {
            this.props.items[comics].forEach(item => {
                item.checked && (count = count + 1)
            })
        })
        return count
    }
    getMaxCount = () => {
        let count = 0
        Object.keys(this.props.items).forEach(comics => {
            count += this.props.items[comics].length
        })
        return count
    }
    getStyle = () => {
        const count = this.getCount()
        const maxCount = this.getMaxCount()
        if( (maxCount / 3) > count ) {
            return 'is-error'
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
                <progress className={"nes-progress " + this.getStyle()} value={Object.keys(items) && this.getCount()} max={Object.keys(items) && this.getMaxCount()} style={ProgressBar}></progress>
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
                            {items && Object.keys(items).length > 0 &&
                                Object.keys(items).map(comics => {
                                    return (
                                        <Fragment key={comics}>
                                        <tr>
                                        <td colSpan={3} style={{textAlign: 'center'}}>
                                                {comics}
                                        </td>
                                        </tr>
                                        {items[comics].map(item => {
                                            return (
                                                <tr className={"nes-text " + (item.checked ? 'is-disabled' : priority[item.priority])} key={item.name} >
                                                    <td>
                                                        <label>
                                                            <input type="checkbox" className="nes-checkbox" onClick={(e) => e.preventDefault()} onChange={(e) => e.preventDefault()} checked={item.checked} />
                                                            <span></span>
                                                        </label>
                                                    </td>
                                                    <td onClick={() => openModal(item)} className='nes-pointer'>{item.name}</td>
                                                    <td>{this.props.exchangeCurrency(item.price)}</td>
                                                </tr>
                                            )
                                        })}
                                        </Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <br />
            </div>
        )
    }
}