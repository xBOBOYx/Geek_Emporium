const User = require('./User');
<<<<<<< HEAD
const Item = require('./item');

User.hasMany(Item, {
=======
const Item = require('./Item');

User.hasMany(Project, {
>>>>>>> 18f0c343b3e5e828859f3728f9c441eb9f08afdc
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Item.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Item };