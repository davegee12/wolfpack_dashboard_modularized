var mongoose = require('mongoose');

const WolfpackSchema = new mongoose.Schema({
    name: {type: String, required: [true, "A wolf needs a name"], minlength: 3},
    gender: {type: String, required: [true, "What is the gender?"], maxlength: 6, minlength: 4},
    position: {type: String, required: [true, "What does the wolf do for the pack?"], maxlength: 60, minlength: 3},
    image: {type: String, required: true, minlength: 3}
}, {timestamps: true});

const Wolf = mongoose.model('Wolf', WolfpackSchema);