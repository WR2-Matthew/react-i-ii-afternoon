import { GET_PEOPLE, GET_PERSON } from "./constraints";

export function getPeople(data) {
  return {
    type: GET_PEOPLE,
    payload: {
      people: data
    }
  }
}

export function getPerson(data) {
  return {
    type: GET_PERSON,
    payload: {
      person: data
    }
  }
}