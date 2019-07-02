import React, { Component } from 'react'

const ModalStyle = {
    position: 'fixed', 
    zIndex: 1, 
    left: 0, 
    top: 0, 
    width: "100%", 
    height: "100%", 
    overflow: 'auto', 
    backgroundColor: "rgba(0,0,0,0.4)"
}
export default class Modal extends Component {
    render(){
    const {
        img,
        name,
        price,
        link,
        priority,
        comment
      } = this.props.item
  
      const priorityList = { '1': "Невероятно сильно хочу", "2": "Очень хочу", "3": "Очень хочу", "4": "Хочу" }
      const priorityClass = { '1': "is-primary", "2": "is-success", "3": "is-success", "4": "is-error" }
      return (
        <div style={ModalStyle}>
          <dialog className="nes-dialog" open style={{ margin: "1% auto", width: '400px' }}>
            <p className="title">{name}</p>
            <img style={{ width: "100%"}} src={img} alt=''></img>
            <br/>
            <br/>
            <p>Приоритет: <span className={"nes-text " + priorityClass[priority]}>{priorityList[priority]}</span></p>
            <p>Цена: {price}</p>
            {comment && <p>{comment}</p>}
            <menu className="dialog-menu">
              <button className="nes-btn" onClick={() => this.props.closeModal()}>Закрыть</button>
              <button className="nes-btn is-primary" onClick={() => window.open(link, "_blank")}>Купить</button>
            </menu>
          </dialog>
        </div>)
    }
}