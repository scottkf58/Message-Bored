const sequelize = require('sequelize');
const Users = require('./Users');
const Topics = require('./Topics');

module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('Messages',
  {
    body: { type: DataTypes.TEXT }
  });

  Messages.associate = function(models) {
    Messages.belongsTo(models.Topics,
    {
      foreignKey: {
        name: 'topic_id'
      }
    });
    Messages.belongsTo(models.Users,
    {
      foreignKey: {
        name: 'author_id'
      }
    });
  };

  return Messages;
};