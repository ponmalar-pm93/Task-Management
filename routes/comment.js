const { User} = require('../sequelize');
const { Comment } = require('../sequelize');

// Create a new comment
module.exports = app => {
  app.post('/comment', async (req, res,next) => {
    //const id = req.params.user_id;
    try {
      // Retrieve the user who is making the comment
      const commentedBy = await User.findByPk(req.body.user_id);
      console.log("commentedBy", commentedBy);
      console.log(commentedBy.id);
      // Create the new comment
      let newComment = await Comment.create({
        comment: req.body.comment,
        date: new Date(),
        user_id: commentedBy.id
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
