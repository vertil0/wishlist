import React, { Component } from 'react'

export default class Description extends Component {
    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <div className="field ">
                            <label className="label">Имя</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Alex Smith"/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field ">
                            <label className="label">Статус</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Жив" />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field ">
                            <div className="field ">
                                <label className="label">Религия</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Будизм" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns" style={{borderTop: '1px solid lightgray'}}> 
                    <div className="column is-one-quarter">
                        <div className="field ">
                            <label className="label">Раса</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Человек" />
                            </div>
                        </div>
                        <div className="field ">
                            <label className="label">Пол</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Мужской" />
                            </div>
                        </div>
                        <div className="field ">
                            <label className="label">Возраст</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="22 года" />
                            </div>
                        </div>
                        <div className="field ">
                            <label className="label">День рождения</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="30 апреля 1876 г. н.э." />
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-quarter">
                        <div className="field ">
                            <label className="label">Рост</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="181 см" />
                            </div>
                        </div>
                        <div className="field ">
                            <label className="label">Вес</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="65 кг" />
                            </div>
                        </div>
                        <div className="field ">
                            <label className="label">Размер</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="+0" />
                            </div>
                        </div>
                        <div className="field ">
                            <label className="label">ТУ</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="6" />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field ">
                            <label className="label">Волосы</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Коричневые, Волнистые, Средние" />
                            </div>
                        </div>
                        <div className="field ">
                            <label className="label">Глаза</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Зелёные" />
                            </div>
                        </div>
                        <div className="field ">
                            <label className="label">Кожа</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Светлая, Веснушчатая" />
                            </div>
                        </div>
                        <div className="field ">
                            <label className="label">Рабочая рука</label>
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
