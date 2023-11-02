// import * as express from 'express';
// import {Router, Request, Response } from "express";
// import CartItem from "../dataModels/cartItem";
// import Cart from '../dataModels/cart';
//
// const router: Router = express.Router();
//
//
//
// export const createNewUserCart = async (userId: string) => {
//     const initialItems: any[] = [];
//
//     try {
//         const newCart = await Cart.create({
//             owner: userId,
//             items: initialItems
//         });
//         return true;
//     } catch (err: any) {
//         console.error(err.message);
//         return false;
//     }
// }
//
// router.get('/items', async (req: Request, res: Response) => {
//     try {
//         const cartItems = await CartItem.find();
//         if(cartItems.length > 0) {
//             res.status(200).json(cartItems);
//         } else {
//             res.status(204).json(cartItems);
//         }
//     } catch (err: any) {
//         console.error(err.message);
//         res.status(500).json({error: 'Internal server error'})
//     }
// });
//
// export default router;