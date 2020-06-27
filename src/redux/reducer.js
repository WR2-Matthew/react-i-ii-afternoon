import { GET_PEOPLE, GET_PERSON } from "./constraints";

const initialState = {
  people: [],
  person: {}
  // count: 6
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PEOPLE:
      return { ...action.payload, initialState }
    case GET_PERSON:
      return Object.assign({}, state, action)
    default:
      return state;
  }
}