import * as express from 'express';
import {Router, Request, Response } from "express";
import axios from 'axios';
import mongoose from 'mongoose';
import {db} from '../../server';
import Product from '../dataModels/product';

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    try {
        const products = await Product.find({});

        res.status(200).json(products);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

export default router;