const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://<dbuser>:<dbpassword>@<MongoDB_URI>';
//replace dbuser, dbpassword and MOngoDB_URI with actual credentials or use local database

mongoose.connect(DB_URL, { useNewUrlParser: true })

mongoose.connection.on('open', () => {
  console.log('MongoDB connected Successfully!')
});