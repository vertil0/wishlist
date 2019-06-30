import React, { Component, Fragment } from 'react'

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
        console.log(items)
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
                            {items && Object.keys(items).length > 0 &&
                                Object.keys(items).map((comics, index) => {
                                    return (
                                        <Fragment>
                                        <tr>
                                        <td colspan="3" style={{textAlign: 'center'}}>
                                                {comics}
                                        </td>
                                        </tr>
                                        {items[comics].map(item => {
                                            return (
                                                <tr className={"nes-text " + (item.checked ? 'is-disabled' : priority[item.priority])} key={item.name} >
                                                    <td>
                                                        <label>
                                                            <input type="checkbox" className="nes-checkbox" onClick={(e) => e.preventDefault()} checked={item.checked} />
                                                            <span></span>
                                                        </label>
                                                    </td>
                                                    <td onClick={() => openModal(item)} className='nes-pointer'>{item.name}</td>
                                                    <td>{item.price}</td>
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