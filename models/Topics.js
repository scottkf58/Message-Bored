const sequelize = require('sequelize');
const Users = require('./Users');
const Messages = require('./Messages');

module.exports = function(sequelize, DataTypes) {
  var Topics = sequelize.define('Topics',
  {
    name: { type: DataTypes.STRING }
  });

  Topics.associate = function(models) {
    Topics.belongsTo(models.Users,
    {
      foreignKey: {
        name: 'created_by'
      }
    });
    Topics.hasMany(models.Messages,
    {
      foreignKey: {
        name: 'topic_id'      }
    });
  };

  return Topics;
};
