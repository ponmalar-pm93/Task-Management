  //const {CommentModel} = require("../sequelize");
  
  
   module.exports = (sequelize,type) => {
    const CommentModel= sequelize.define('comment', {
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
      }
    });
    CommentModel.associate = (models) => {
      CommentModel.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
    }
  
  // comment: {
  //   type: String,
  //   date: Date,
  // },
 
  // date: {
  //   type: Date,
  //   default: Date.now,
  // }
  //   });
  
    return CommentModel;
  }
  



