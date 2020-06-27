import React, { Component } from 'react'
import axios from 'axios'
import { getPeople } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import './Crud.css'

class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName = '',
      lastName = '',
      city = '',
      country = '',
      employer = '',
      title = '',
      favMovOne = '',
      favMovTwo = '',
      favMovThree = ''
    }
  }

  delete = () => {
    const { single, reset } = this.props
    console.log('hit')
    axios
      .delete(`/people/?id=${single.user_id}`)
      .then(res => {
        reset()
        this.props.getPeople(res.data)
      })
  }

  create = () => {
    const { toggleEdit } = this.props
    axios
      .post('api/new/person', body)
  }

  render() {

    return (
      <div>
        <button onClick={this.delete}>Delete</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps, { getPeople })(Crud)
