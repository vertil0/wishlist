import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { actions as rootActions, NAME as ROOT_NAME } from '../index'
import Tabs from '../components/Tabs'
import Description from '../components/Description'
import Attributes from '../components/Attributes'
function mapStateToProps (state) {
  return {
    ...state[ROOT_NAME]
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...rootActions
}, dispatch)
class sheet extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  rechangePoints = () => {
    const { character } = this.props
    let newPonits = (character.ST - 10) * 10
    this.props.changePoints(newPonits)
  }
  render() {
    const {switchTab, tab, points, changePoints, character} = this.props
    return (
      <div>
        <Tabs 
        switchTab = {switchTab}
        tabName = {tab}
        points = {points}
        changePoints = {changePoints}
        />
        <section className="section">
        {tab === '1' && 
        <Description/>}
        {tab === '2' && 
        <Attributes
        rechangePoints = {this.rechangePoints}
        character = {character}/>}
        </section>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(sheet);
