module.exports = {
  retrieveAll: async (req, res) => {
    const db = req.app.get('db')

    const people = await db.retrieve_all()

    return res.status(200).send(people)
  },

  retrievePerson: async (req, res) => {
    const { user_id } = req.query
    const db = req.app.get('db')

    const user = await db.get_person(user_id)

    const person = user[0]

    if (!person) {
      return res.status(404).send('Person not found')
    }

    else {
      return res.status(200).send(person)
    }
  },

  deletePerson: async (req, res) => {
    console.log('hitttttt')
    const { id } = req.query
    console.log(id, 'userid')
    const db = req.app.get('db')

    const updatedUsers = await db.remove_person(id)

    return res.status(200).send(updatedUsers)
  }
}