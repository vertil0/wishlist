import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { actions as rootActions, NAME as ROOT_NAME } from '../index'
import Tabs from '../components/Tabs'
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
    return (
      <Tabs {...this.props}>
      </Tabs>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(sheet);
