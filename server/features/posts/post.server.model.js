var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    datePosted: { type: String },
    dateCreatedNonRead: { type: Date, default: new Date() },
    postContent: {
        content: { type: String, required: true },
        linkUrl: { type: String },
        tags: [{ type: String }],
    }
});

module.exports = mongoose.model('Post', PostSchema);
