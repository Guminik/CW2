const mongoose = require('mongoose');

const URI ="mongodb+srv://adrian:root@cluster0.uhm2r.mongodb.net/sample_mflix?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
