module.exports = {
  retrieveAll: async (req, res) => {
    const db = req.app.get('db')

    const people = await db.retrieve_all()

    return res.status(200).send(people)
  },

  retrievePerson: async (req, res) => {
    const { user_id } = req.query
    const db = req.app.get('db')

    const user = await db.retrievePerson(user_id)

    const person = user[0]

    if (!person) {
      return res.status(404).send('Person not found')
    }

    else {
      return res.status(200).send(person)
    }
  }


}