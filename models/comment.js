  const {Comment} = require("../sequelize");
  
  
   module.exports = (sequelize,type) => {
    const Comment= sequelize.define('comment', {
      comment: {
        type: type.STRING,
        allowNull: false,
      },
      date: {
        type: type.DATE,
        defaultValue: type.NOW,
        allowNull: false,
      },
      id:
      {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id:
      {
        type: type.INTEGER,
        
      }
    });
    // CommentModel.associate = (sequelize) =>
    //  {
    //   CommentModel.belongsTo(sequelize.User, 
    //     {
    //     foreignKey: 'user_id'
    //   })
    }
  
  
  
    return Comment;
  
  



