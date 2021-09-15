const User = require('./User');
const Item = require('./item');

User.hasMany(Item, {
const Item = require('./Item');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Item.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Item };
