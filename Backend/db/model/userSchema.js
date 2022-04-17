const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: [String],
        default: ['STUDENT']
    },
    accountStatus: {
        type: String,
        enum: ['PENDING', 'ACTIVE', 'DISABLE'],
        default: 'PENDING'
    },
});


const User = model('User', userSchema);

module.exports = User;
// - Name
// - Email
// - Password
// - Roles
// - AccountStatus