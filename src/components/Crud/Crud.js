import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './Crud.css'

class Crud extends Component {
  constructor(props) {
    super(props);
  }

  delete = () => {
    const { single } = this.props
    console.log(single.user_id, 'us')
    axios
      .delete(`/api/person/${single.user_id}`)
      .then(res => {
        this.props.getPerson(res.data)
      })
  }

  create = () => {

  }

  render() {

    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps)(Crud)
