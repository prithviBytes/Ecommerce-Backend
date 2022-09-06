const express = require("express");
const router = express.Router();
const {mensBrands, womensBrands, kidsBrands} = require("../Database/data")
const Product = require("../Models/Products.js");


router.route("/mens")
.get(async (req,res) => {
  try {
    const products = await Product.find({category: "mens"})
    res.json({
      success: true,
      brands: mensBrands,
      products
    })
  }catch(err){
    res.status(500).json({
      success: false,
      error: "Unable to fetch Products",
      message: err.message
    })
  }
})


router.route("/womens")
.get(async (req,res) => {
  try {
    const products = await Product.find({category: "womens"})
    res.json({
      success: true,
      brands: womensBrands,
      products
  })
  }catch(err){
      res.status(500).json({
      success: false,
      error: "Unable to fetch Products",
      message: err.message
    })
  }
})


router.route("/kids")
.get(async (req,res) => {
  try {
    const products = await Product.find({category: "kids"})
    res.json({
      success: true,
      brands: kidsBrands,
      products
  })
  }catch(err){
      res.status(500).json({
      success: false,
      error: "Unable to fetch Products",
      message: err.message
    })
  }
})


module.exports = router;