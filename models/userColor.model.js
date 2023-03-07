module.exports = (sequelize, Sequelize) => {
  const User_Color = sequelize.define("user_color", {
    count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      notNull: true, 
    },
  }, {timestamps: false});

  return User_Color;
};