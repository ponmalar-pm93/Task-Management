const { User } = require('../sequelize');
const { Comment } = require('../sequelize');
const { Task } = require('../sequelize');

// Create a new comment
module.exports = app => {
  app.post('/comment', async (req, res, next) => {
    try {
      // Retrieve the user who is making the comment
      const commentedBy = await User.findByPk(req.body.user_id);
      if (!commentedBy) {
        return res.status(400).json({ message: 'User not found' });
      }
      // const commentedBy1 = await Task.findByPk(req.body._id);
      // if (!commentedBy1) {
      //   return res.status(400).json({ message: 'Task not found' });
      // }
// Get the current date
const currentDate = new Date();
      // Create the new comment
      const newComment = await Comment.create({
        comment: req.body.comment,
        date: currentDate,
        user_id: commentedBy.id,
        
      });
      newComment.username = commentedBy.username;
      //console.log("username",username);
      //newComment._id = commentedBy1._id;
      res.status(201).json({ message: 'Comment created successfully', comment: newComment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
};





// const { User} = require('../sequelize');
// const { Comment } = require('../sequelize');

// // Create a new comment
// module.exports = app => {
//   app.post('/comment', async (req, res,next) => {
//     //const id = req.params.user_id;
//     try {
//       // Retrieve the user who is making the comment
//       const commentedBy = await User.findByPk(req.body.user_id);
//       console.log("commentedBy", commentedBy);
//       console.log(commentedBy.id);
//       // Create the new comment
//       let newComment = await Comment.create({
//         comment:req.body.comment,
//         date: new Date(),
//         user_id: commentedBy.id
//       });
//       res.status(201).json({ message: 'Comment created successfully', comment: newComment });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Something went wrong' });
//     }
//   });
// };







