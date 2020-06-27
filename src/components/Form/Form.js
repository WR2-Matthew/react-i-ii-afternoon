import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPeople } from '../../redux/actionCreators'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { single, currentCount, people } = this.props
    return (

      <div className='form' >

        <div className='form'>
          <div className='formHeader'>

            <div className='names'>
              <h1 className='name'>{`${single.first_name} ${single.last_name}`}</h1>
            </div>

            <div className='count'>
              <h1>{`${currentCount} / ${people.length}`}</h1>
            </div>

          </div>

          <div className='userInfo' >

            <div className='location'>

              <div className='region'>
                <h3>From:</h3>
                <p>{`${single.city}, ${single.country}`}</p>
              </div>

              <div className='title' >
                <h3>Job Title:</h3>
                <p>{`${single.job_title}`}</p>
              </div>

              <div className='employer' >
                <h3>Employer:</h3>
                <p>{`${single.employer}`}</p>
              </div>

            </div>

            <div className='movies'>
              <h3>Favorite Movies:</h3>
              <p>{`1. ${single.favorite_movie_one}`}</p>
              <p>{`2. ${single.favorite_movie_two}`}</p>
              <p>{`3. ${single.favorite_movie_three}`}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    people: state.people,
    count: state.count
  }
}

export default connect(mapStateToProps, { getPeople })(Form)



// componentDidMount = () => {
  //   const { people, count } = this.props
  //   console.log(people)
  //   axios
  //     .get(`api/person/${people[count - 1].user_id}`)
  //     .then(res => {
  //       this.props.getPerson(res.data)
  //     })
  // }