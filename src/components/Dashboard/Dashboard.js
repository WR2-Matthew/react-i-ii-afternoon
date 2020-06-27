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
      count: 1,
      toggleEdit: false
    }
  }

  componentDidMount = () => {
    axios
      .get('/api/people')
      .then(res => {
        this.props.getPeople(res.data)
      })
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { people } = this.props
    if (prevProps.people && prevProps.people.length !== people.length) {
      axios
        .get('/api/people')
        .then(res => {
          this.props.getPeople(res.data)
        })
    }
  }

  getSinglePerson = () => {
    const { people } = this.props
    const { count } = this.state
    console.log(people, 'hit')
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

  resetCount = () => {
    this.setState({
      count: 1
    })
  }

  toggleChange = (data) => {
    this.setState({
      toggleEdit: data
    })
  }

  render() {
    const { people } = this.props
    const { count, toggleEdit } = this.state
    return (

      <div className='dash'>

        <div className='dashForm'>
          {!people || people.length === 0 && !toggleEdit ? <div></div> :

            <Form
              single={this.getSinglePerson()}
              currentCount={count}
            />
          }
        </div>

        <div className='functionality'>
          <button className='buttons' onClick={this.previous}>{`< Previous`}</button>
          {!people || people.length === 0 ? <div></div> :
            <Crud
              single={this.getSinglePerson()}
              reset={this.resetCount}
              toggleEdit={this.toggleChange}
            />
          }
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
