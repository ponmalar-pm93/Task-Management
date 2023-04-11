//const projectController = require("../routes/projectController");

const { STRING } = require("sequelize");
const Project = require("../sequelize");

module.exports = (sequelize,type) => {
    return sequelize.define('project', {

    _id: {
      type:type.STRING,
    },
    title: {
      type:type.STRING,
      minLength: [4, "Must have min 4 characters"],
      maxLength: [64, "Max characters exceeded"]
    },
    description: {
      type: type.STRING,
      maxLength: [1024, "Max characters exceeded"]
    },
    short_name: {
      type:type.STRING,
      unique: true,
      maxLength: [3, "Must have 3 characters"]
    }
    
  },
  {_id: false});
 validate: {
  this.length[3,5]
 }
  
  
  
  
}
        

  
  
 