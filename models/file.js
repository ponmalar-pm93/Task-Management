module.exports = (sequelize,type) => {

const File = sequelize.define('file', 
{
id:
{
    type:type.INTEGER,
  autoIncrement: true,
        primaryKey: true,
},
    fileName: type.STRING,
    filePath: type.STRING,
     user_id:
     { type:type.INTEGER,
     }
  });
  return File;
}