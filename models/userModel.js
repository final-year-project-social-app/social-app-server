const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    privateAccount: { type: Boolean, required: false, default: false },

    followers: [{ type: mongoose.Schema.Types.ObjectId, req: 'users' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, req: 'users' }],

    profilePicture: { type: String, required: false, default: "" },
    bio: { type: String, required: false, default: "" },

    savedPosts: [],
    archivedPosts: []

}, { timestamps: true })

module.exports = mongoose.model("users", userSchema);