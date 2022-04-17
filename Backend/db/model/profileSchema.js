const { Schema, model } = require('mongoose');

const ProfileSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: String,
    avatar: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});


const Profile = model('Profile', ProfileSchema);
module.exports = Profile;

// Profile

// - First Name
// - Last Name
// - Phone No
// - Profile Picture
// - UserId