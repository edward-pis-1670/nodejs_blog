const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
    name:{ type: String, maxLength: 255, require:true },
    desc:{ type: String },
    image:{ type: String, maxLength: 5000 },
    videoId:{ type: String, require:true },
    level:{ type: String, maxLength: 5000 },
    slug: {type: String, slug: 'name', unique: true}
}, {
    timestamps:true
});


module.exports = mongoose.model('Course', Course)