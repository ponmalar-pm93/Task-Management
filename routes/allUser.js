const {User} = require('../sequelize');

module.exports = app => {
  app.get('/allUser', (req, res) => {
    User.findAll()
    .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Error retrieving user from database' });
      });
  });
};
