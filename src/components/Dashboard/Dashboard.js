import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getPeople } from '../../redux/actionCreators'
import Form from '../Form/Form'
import './Dashboard.css'
import Crud from '../Crud/Crud'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
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

  previous = () => {
    const { people } = this.props
    const { count } = this.state
    if (count === 1) {
      this.setState({
        count: people.length
      })
    }
    else {
      this.setState({
        count: count - 1
      })
    }
  }

  next = () => {
    const { people } = this.props
    const { count } = this.state
    if (count === people.length) {
      this.setState({
        count: 1
      })
    } else {
      this.setState({
        count: count + 1
      })
    }
  }

  render() {
    const { people } = this.props
    const { count } = this.state
    return (

      <div className='dash'>

        <div className='dashForm'>
          {people.length === 0 ? <div></div> :
            <div>
              <Form
                single={this.getSinglePerson()}
                currentCount={count}
              />
              <Crud
                single={this.getSinglePerson()}
              />
            </div>
          }
        </div>

        <div className='functionality'>
          <button className='buttons' onClick={this.previous}>{`< Previous`}</button>
          <button className='buttons' onClick={this.next}>{`Next >`}</button>
        </div>

      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    people: state.people
    // count: state.count
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
