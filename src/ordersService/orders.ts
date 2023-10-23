import * as express from 'express';
import {Router, Request, Response } from "express";

const router: Router = express.Router();

router.get('/all', (req: Request, res: Response) => {
    res.status(200).json({message: "You have reached orders API"});
});

export default router;