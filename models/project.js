
const { STRING } = require("sequelize");
const Project = require("../sequelize");

module.exports = (sequelize,type) => {
    return sequelize.define('project', {

    _id: {
      type:type.INTEGER,
      primaryKey: true,
        autoIncrement: true,
      
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
    
  },
  );

  
 }
  
  
  
  

        

  
  
 