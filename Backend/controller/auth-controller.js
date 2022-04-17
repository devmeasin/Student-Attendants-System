
const bcrypt = require('bcrypt');
const res = require('express/lib/response');
const userService = require('../services/user-service');

class authController {

    // registration process
    register = async (req, res) => {

        let { name, email, password } = req.body;

        // check all data in req body here
        if (!name || !email || !password) {
            res.status(400).json({ message: 'All field are Require' });
        }

        // check user already register 
        //find new User and create New User
        let user;

        try {
            // check user in db 
            user = await userService.findUser({ email });

            if (!user) {
                // password hash using bcrypt
                password = await bcrypt.hash(password, 12);
                // user create and save db 
                user = await userService.createUser({ name, email, password });
            } else {

                res.status(400).json({ message: 'User Already Exits' });
            }

        } catch (error) {
            res.status(500).json({ message: "User not Created", error });
        }


        console.log(user);

        res.status(200).json({ user });
    }

    // login process


    login = async (req, res) => {

        let { email, password } = req.body;

        // check all data in req body here
        if (!email || !password) {
            res.status(400).json({ message: 'All field are Require' });
        }

        let user;

        try {
            // check user in db 
            user = await userService.findUser({ email });

            if (!user) {

                res.status(400).json({ message: 'Invalid Credentials' });

            } else {
                // match password using bcrypt
                let match = await bcrypt.compare(password, user.password);
                if (!match) {
                    res.status(400).json({ message: 'Invalid Credentials' });
                }
            }

        } catch (error) {
            res.status(500).json({ message: "User not Created", error });
        }

        delete user._doc.password;
        console.log(user);
        res.status(200).json({ user });


    }


}


module.exports = new authController();