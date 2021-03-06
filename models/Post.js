const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avater: {
        type: String
    },
    links:[
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                require: true
            },
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }


});

module.exports = Post = mongoose.model('post', PostSchema);