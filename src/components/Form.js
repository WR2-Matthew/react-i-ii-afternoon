import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPerson } from '../redux/actionCreators'
import axios from 'axios'

class Form extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  // componentDidMount = () => {
  //   const { people, count } = this.props
  //   console.log(people)
  //   axios
  //     .get(`api/person/${people[count - 1].user_id}`)
  //     .then(res => {
  //       this.props.getPerson(res.data)
  //     })
  // }

  render() {
    const { single, count, people } = this.props
    return (

      <div className='form' >

        <div className='formHeader'>

          <div className='names'>
            <h1>{`${single.first_name} ${single.last_name}`}</h1>
          </div>

          <div className='count'>
            <h1>{}</h1>
          </div>

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    people: state.people,
  }
}

export default connect(mapStateToProps, { getPerson })(Form)