const mongoose = require("mongoose")
const Product = require("../Models/Products");
const faker = require("faker")
const {mensTopImages, mensBrands, mensBottomImages, mensFootWearImages, womensImages1, womensImages2, womensImages3, womensBrands,kidsTopImages, kidsBrands, kidsBottomImages, kidsFootwearImages} = require("./data");
faker.seed(123)



function seedMensData(){
  for(let i = 0 ; i < mensTopImages.length ; i++){
    let random = Math.floor(Math.random() * mensBrands.length);
    let product = {
      image: mensTopImages[i],
      name: faker.commerce.productName(),
      brand: mensBrands[random],
      price: faker.commerce.price(),
      discount: Math.floor(Math.random() * 40),
      type: "top",
      category: "mens"
    }
    let newProduct = new Product(product)
    newProduct.save();
  }
  for(let i = 0 ; i < mensBottomImages.length ; i++){
    let random = Math.floor(Math.random() * mensBrands.length);
    let product = {
      image: mensBottomImages[i],
      name: faker.commerce.productName(),
      brand: mensBrands[random],
      price: faker.commerce.price(),
      discount: Math.floor(Math.random() * 40),
      type: "bottom",
      category: "mens"
    }
    let newProduct = new Product(product)
    newProduct.save();
  }
  for(let i = 0 ; i < mensFootWearImages.length ; i++){
    let random = Math.floor(Math.random() * mensBrands.length);
    let product = {
      image: mensFootWearImages[i],
      name: faker.commerce.productName(),
      brand: mensBrands[random],
      price: faker.commerce.price(),
      discount: Math.floor(Math.random() * 40),
      type: "footwear",
      category: "mens"
    }
    let newProduct = new Product(product)
    newProduct.save();
  }
  console.log("LENGTH")
  console.log(mensBottomImages.length + mensFootWearImages.length + mensTopImages.length)
}

function seedWomensData(){
  for(let i = 0 ; i < womensImages1.length ; i++){
    let random = Math.floor(Math.random() * womensBrands.length);
    let product = {
      image: womensImages1[i],
      name: faker.commerce.productName(),
      brand: womensBrands[random],
      price: faker.commerce.price(),
      discount: Math.floor(Math.random() * 50),
      type: "top",
      category: "womens"
    }
    let newProduct = new Product(product)
    newProduct.save();
  }
  for(let i = 0 ; i < womensImages2.length ; i++){
    let random = Math.floor(Math.random() * womensBrands.length);
    let product = {
      image: womensImages2[i],
      name: faker.commerce.productName(),
      brand: womensBrands[random],
      price: faker.commerce.price(),
      discount: Math.floor(Math.random() * 50),
      type: "bottom",
      category: "womens"
    }
    let newProduct = new Product(product)
    newProduct.save();
  }
  for(let i = 0 ; i < womensImages3.length ; i++){
    let random = Math.floor(Math.random() * womensBrands.length);
    let product = {
      image: womensImages3[i],
      name: faker.commerce.productName(),
      brand: womensBrands[random],
      price: faker.commerce.price(),
      discount: Math.floor(Math.random() * 50),
      type: "footwear",
      category: "womens"
    }
    let newProduct = new Product(product)
    newProduct.save();
  }
}

function seedKidsData(){
  for(let i = 0 ; i < kidsTopImages.length ; i++){
    let random = Math.floor(Math.random() * kidsBrands.length);
    let product = {
      image: kidsTopImages[i],
      name: faker.commerce.productName(),
      brand: kidsBrands[random],
      price: faker.commerce.price(),
      discount: Math.floor(Math.random() * 40),
      type: "top",
      category: "kids"
    }
    let newProduct = new Product(product)
    newProduct.save();
  }
  for(let i = 0 ; i < kidsBottomImages.length ; i++){
    let random = Math.floor(Math.random() * kidsBrands.length);
    let product = {
      image: kidsBottomImages[i],
      name: faker.commerce.productName(),
      brand: kidsBrands[random],
      price: faker.commerce.price(),
      discount: Math.floor(Math.random() * 40),
      type: "bottom",
      category: "kids"
    }
    let newProduct = new Product(product)
    newProduct.save();
  }
  for(let i = 0 ; i < kidsFootwearImages.length ; i++){
    let random = Math.floor(Math.random() * kidsBrands.length);
    let product = {
      image: kidsFootwearImages[i],
      name: faker.commerce.productName(),
      brand: kidsBrands[random],
      price: faker.commerce.price(),
      discount: Math.floor(Math.random() * 40),
      type: "footwear",
      category: "kids"
    }
    let newProduct = new Product(product)
    newProduct.save();
  }
}

const deleteProducts = () => {
  Product.deleteMany({}, function(err){
    if("err"){
      console.log(err);
    }else{
      console.log("Deleted Products")
    }
  })
}

module.exports = {deleteProducts, seedMensData, seedWomensData, seedKidsData};