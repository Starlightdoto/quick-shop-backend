import * as express from 'express';
import {Router, Request, Response } from "express";

const router: Router = express.Router();

router.get('/items', (req: Request, res: Response) => {
    res.status(200).json({message: "You have reached cart API"});
});

export default router;