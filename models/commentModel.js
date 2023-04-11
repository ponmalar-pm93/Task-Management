  module.exports = (sequelize) => {
    return sequelize.define('commentModel', {
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

  }