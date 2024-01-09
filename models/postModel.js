// import mongoose
const mongoose = require("mongoose");

// router handler
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,

        // importing like model hear
        ref: "Like",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        // importing like model hear
        ref: "Comment",
    }]
})


// export
module.exports = mongoose.model("Post", postSchema);