  module.exports = (sequelize) => {
    const Comment= sequelize.define('commentModel', {
  comment: [{
    type: String,
    date: Date
  }],
  commentedBy: {
    type: String,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now
  }
    });
//Comment.belongsTo(User, { as: 'commentedBy', foreignKey: 'commentedBy' });
    
    return Comment;
  }
  



// Comment model
// const Comment = sequelize.define('comment', {
//   content: {
//     type: Sequelize.TEXT,
//     allowNull: false,
//   },
//   // other fields
// });

// Attachment model
// const Attachment = sequelize.define('attachment', {
//   filename: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   // other fields
// });

// // Set up the associations
// User.hasMany(Project);
// Project.belongsTo(User);

// Task.hasMany(Comment);
// Comment.belongsTo(Task);

// Task.hasMany(Attachment);
// Attachment.belongsTo(Task);

// User.belongsToMany(Task, { through: 'TaskUser' });
// Task.belongsToMany(User, { through: 'TaskUser' });
