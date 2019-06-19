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
  render() {
    const {switchTab, tab, points, changePoints, character} = this.props
    return (
      <div>
        1
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(sheet);
