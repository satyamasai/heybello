const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://stymngrya:161996@cluster0.wfx9kbi.mongodb.net/?retryWrites=true&w=majority')

module.exports={
    connection
}