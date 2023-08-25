const mongoose = require('mongoose');

// const db_url = 'mongodb://localhost:27017/articles';
const DB_URL = 'mongodb+srv://taskapp:taskapp2022@cluster0.jamaa.mongodb.net/posts';

mongoose.connect(DB_URL, { useNewUrlParser: true })

mongoose.connection.on('open', () => {
  console.log('MongoDB connected Successfully!')
});