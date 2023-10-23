import * as express from 'express';
import {Router, Request, Response } from "express";
import CartItem from "../dataModels/cartItem";

const router: Router = express.Router();

const userId = "";

router.get('/items', async (req: Request, res: Response) => {
    try {
        const cartItems = await CartItem.find({ owner: userId});
        if(cartItems.length > 0) {
            res.status(200).json(cartItems);
        } else {
            res.status(204).json(cartItems);
        }
    } catch (err: any) {
        console.error(err.message);
        res.status(500).json({error: 'Internal server error'})
    }
});

export default router;