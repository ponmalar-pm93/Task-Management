const { User} = require('../sequelize');
const { Comment } = require('../sequelize');

// Create a new comment
module.exports = app => {
  app.post('/comment', async (req, res,next) => {
    const id = req.params.userId;
    try {
      // Retrieve the user who is making the comment
      const commentedBy = await User.findByPk(req.body.userId);
      //require.userId =userId;
      // Create the new comment
      const newComment = await Comment.create({
        comment: req.body.comment,
        date: new Date(),
        UserId: commentedBy.id
      });

      res.status(201).json({ message: 'Comment created successfully', comment: newComment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
};







// const {User} = require('../sequelize');
// const {Comment} = require('../sequelize');

// // Create a new comment
// module.exports = app => {
// app.post('/comment', async (req, res) => {
  
//   const id = req.params.id

//   const data = await User.findOne({
//       include: [{
//           model: Comment,
//           as: 'comment'
//       }],
//       where: { id: id }
//   })

//   res.status(200).send(data)

// }

  
// );
// }
