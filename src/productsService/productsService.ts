import * as express from 'express';
import {Router, Request, Response } from "express";
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

router.get('/:productId', async (req: Request, res: Response) => {
    const productId = req.params.productId;

    try {
        const product = await Product.findById({_id: productId});

        if(!product) {
            res.status(404).json({message: 'Product not found'});
        } else {
            res.status(200).json(product);
        }
    } catch (err: any) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

router.get('/all/categories/:category', async (req: Request, res: Response) => {
    const category = req.params.category;

    try {
        const products = await Product.find({ category: category });
        res.status(200).json(products);

    } catch (err:any) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

export default router;