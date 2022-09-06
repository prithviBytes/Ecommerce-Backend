const mongoose = require("mongoose")


const initializeDatabaseConnection = () => {
  mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.orwaj.mongodb.net/ecomm`, {useNewUrlParser: true, useUnifiedTopology: true});

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("Connected To Database")
  });
}

module.exports = {initializeDatabaseConnection};