import * as express from 'express';
import {Router, Request, Response } from "express";
import User from '../dataModels/user';
// import {createNewUserCart} from "../cartService/cartService";
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const router: Router = express.Router();


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email: any, password: any, done: any) => {
    try {
        const existingUser = await User.findOne({email: email});

        if(!existingUser) {
            return done(null, false, {message: 'User not found'});
        }

        //@ts-ignore
        const isValidPassword = await existingUser.isValidPassword(password);

        if(!isValidPassword) {
            return done(null, false, {message: 'Invalid password'});
        }

        return done(null, existingUser);
    } catch (err: any) {
        return done(err);
    }
}));

router.post('/signUp', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const role = req.body.role;

    try {
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ message: 'This user already exists' });
        } else {
            const newUser = await User.create({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                role: role
            });

            req.login(newUser, (err) => {
                if(err) {
                    console.error(err);
                    return res.status(500).json({message: 'Internal Server Error'});
                }
                return res.status(200).json(newUser);
            });
        }

    } catch (err) {
        console.error(err);
        return res.status(500).json('Internal Server Error');
    }
});


router.post('/signIn', async (req, res, next) => {
    passport.authenticate('local', (err: any, user: any, info: any) => {
        if(err) {
            console.error(err);
            return res.status(500).json({message: 'Internal Server Error'});
        }
        if(!user) {
            return res.status(401).json({message: 'Invalid credentials'});
        }
        return res.status(200).json(user);
    })(req, res, next);
});

export default router;