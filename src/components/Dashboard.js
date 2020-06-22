import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getPeople } from '../redux/actionCreators'
import Form from './Form'

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    }
  }

  componentDidMount = () => {
    axios
      .get('/api/people')
      .then(res => {
        this.props.getPeople(res.data)
      })
  }

  getSinglePerson = () => {
    const { people } = this.props
    const { count } = this.state
    return people[count - 1]
  }

  render() {
    const { people } = this.props
    const { count } = this.state
    return (

      <div className='dash'>

        <div>
          {people.length === 0 ? <div></div> :
            <Form
              single={this.getSinglePerson()}
              count
            />}
        </div>

        <div className='functionality'>

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps, { getPeople })(Dashboard)






 // const { people } = this.props,
    //   { count } = this.state,
    //   currentP = people[count - 1],
    //   currentPerson = []
    // currentPerson.push(currentP)
    // const mappedPerson = currentPerson.map((e, i) => {
    //   return <Form
    //     key={i}
    //     fName={e.first_name}
    //     lName={e.last_name}
    //     city={e.city}
    //     country={e.country}
    //     title={e.job_title}
    //     employer={e.employer}
    //     favOne={e.favorite_movie_one}
    //     favTwo={e.favorite_movie_two}
    //     favThree={e.favorite_movie_three}
    //   />
    // })
