const {User} = require('../sequelize')

module.exports = app => {
  app.get('/singleUser', (req, res) => {
    const userId = req.query.id;
    if (userId) {
      User.findOne({
        where: {
          id:userId,
        },
      })
        .then(user => {
          if (user!= null) {
            console.log('user found in db');
            res.status(200).send({
              auth:true,
              id: user.userId,
              first_name: user.first_name,
              last_name: user.last_name,
              username: username,
            });
          } else {
            console.log('user not found in db');
            res.status(404).send({
              auth: false,
              message: 'no user with that id',
            });
          }
        })
        .catch(err => {
          console.log('problem communicating with db');
          res.status(500).json(err);
        });
    } else {
      return res.status(400).send({
        auth: false,
        message: 'missing or empty user id',
      });
    }
  });
};

























// const {User} = require('../sequelize');

// module.exports = app => {
//   app.get('/singleUser', async (req, res) => {
//     let id = req.params.id
//     if (id)

//      User.findOne(
//       { 
//         where: {
//            id: id 
//           }
//         })
//     .then(user => {
//       if (user!= null) {
//         console.log('user found in db');
//         res.status(200).send({
//           firstname: user.firstname,
//           lastname: user.lastname,
//           username: user.username,
//         });
//       } else {
//         console.log('task not found in db');
//         res.status(404).send({
//           auth: false,
//           message: 'no task with that title',
//         });
//       }
//     })
//     .catch(err => {
//       console.log('problem communicating with db');
//       res.status(500).json(err);
//     });
// }
//  else {
//   return res.status(400).send({
//     auth: false,
//     message: 'missing or empty task title',

//   })
// }
// }


  
  

 
