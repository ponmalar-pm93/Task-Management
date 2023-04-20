const {User} = require('../sequelize');
const {Comment} = require('../sequelize');

// Create a new comment
module.exports = app => {
app.post('/comment', async (req, res) => {
  try {
    // Retrieve the user who is making the comment
    const commentedBy = await User.findByPk(req.body.userId);
    
    // Create the new comment
    const newComment = await Comment.create({
      comment: req.body.comment,
      commentedBy: commentedBy.id
    });

    res.status(201).json({ message: 'Comment created successfully', comment: newComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});
}
