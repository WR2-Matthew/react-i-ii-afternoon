module.exports = {
  retrieveAll: async (req, res) => {
    const db = req.app.get('db')

    const people = await db.retrieve_all()

    return res.status(200).send(people)
  },

  retrievePerson: async (req, res) => {
    const { user_id } = req.query
    const db = req.app.get('db')

    const user = await db.(user_id)

    const person = user[0]

    if (!person) {
      return res.status(404).send('Person not found')
    }

    else {
      return res.status(200).send(person)
    }
  },

  deletePerson: async (req, res) => {
    const { user_id } = req.params
    const db = req.app.get('db')

    const updatedUsers = await db.remove_person(user_id)

    return res.status(200).send(updatedUsers)
  }
}