module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      mobile: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return User;
};
