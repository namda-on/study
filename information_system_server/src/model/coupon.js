const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

module.exports = (Sequelize, sequelize) => {
  const coupon = sequelize.define("coupon", {
    coupon_id: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    coupDiscount: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
    },
    customer_id: {
      type: Sequelize.STRING(50),
      references: {
        model: "customer",
        key: "id",
      },
      allowNull: false,
    },
  });
  coupon.sync();
  return coupon;
};