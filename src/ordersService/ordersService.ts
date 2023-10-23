import * as express from 'express';
import {Router, Request, Response } from "express";
import Order from  '../dataModels/order';

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    try {
        const orders = await Order.find({});

        res.status(200).json(orders);
    } catch (err: any) {
        console.error(err.message);
        res.status(500).json({error: 'Internal server error'});
    }
});

export default router;