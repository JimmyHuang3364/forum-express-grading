const db = require('../models')
const Restaurant = db.Restaurant
const Category = db.Category

const adminService = {
  getRestaurants: (req, res, callback) => {
    return Restaurant.findAll({
      raw: true,
      next: true,
      include: [Category]
    }).then(restaurants => {
      callback({ restaurants: restaurants })
    })
  }
}

module.exports = adminService