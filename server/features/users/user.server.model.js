var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, required: true, unique: true },
    googleId: { type: String, required: true, unique: true },
    email: { type: String },
    image: { type: String },
    accountCreatedDate: { type: Date, default: new Date() },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

module.exports = mongoose.model('User', UserSchema);