const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors());

const productRoutes = require("./Routes/product")
const {initializeDatabaseConnection} = require("./Database/initializeDatabaseConnection");

const {deleteProducts, seedMensData, seedWomensData, seedKidsData} = require("./Database/seedDatabase")


initializeDatabaseConnection()
// seedMensData();
// seedWomensData();
// seedKidsData()
app.use("/products",productRoutes)

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});