const User = require('../db/model/userSchema');

class userServices {

    // findUser from database
    findUser = async (filter) => {
        const user = await User.findOne(filter);
        return user;
    }

    // create new user
    createUser = async (data) => {
        const user = await User.create(data)
        return user;
    }



}


module.exports = new userServices();