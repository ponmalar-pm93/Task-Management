module.exports = (sequelize,type) => {

const File = sequelize.define('file', 
{

    fileName: type.STRING,
    filePath: type.STRING,
     user_id:
     { type:type.INTEGER,
     }
  });
  return File;
}