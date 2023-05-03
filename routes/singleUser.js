const { User } = require('../sequelize');

module.exports = app => {
  app.get('/singleUser', async (req, res) => {
    try {
      const user = await User.findOne({ where: { id: req.query.id } });
      if (user) {
        console.log('user found in db');
        res.status(200).send({
          auth: true,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          username: user.username,
          password: user.password,
          message: 'user found in db',
        });
      } else {
        console.log('user not found in db');
        res.status(404).send({ auth: false, message: 'user not found' });
      }
    } catch (err) {
      console.log('problem communicating with db');
      res.status(500).json(err);
    }
  });
};









