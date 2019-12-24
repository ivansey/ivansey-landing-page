let mongoose = require('mongoose');

let technologySchema = new mongoose.Schema({
    name: String,
    description: String,
    icon: String,
});

let technologyModel = mongoose.model("technology", technologySchema);

module.exports = technologyModel;
