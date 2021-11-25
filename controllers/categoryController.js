const db = require('../models')
const Category = db.Category
const categoryService = require('../services/categoryService')
let categoryController = {
  getCategories: (req, res) => {
    categoryService.getCategories(req, res, (data) => {
      return res.render('admin/categories', data)
    })
  },

  postCategory: (req, res) => {
    categoryService.postCategory(req, res, (data => {
      if (data['status'] === 'error') {
        return res.redirect('back', data)
      } else {
        return res.redirect('/admin/categories')
      }
    }))
  },

  putCategory: (req, res) => {
    categoryService.putCategory(req, res, (data => {
      if (data['status'] === 'error') {
        return res.redirect('back', data)
      } else {
        return res.redirect('/admin/categories')
      }
    }))
  },

  deleteCategory: (req, res) => {
    categoryService.deleteCategory(req, res, (data => {
      return res.redirect('/admin/categories')
    }))
  }
}
module.exports = categoryController