import { Request, Response } from "express";
import userPost from "./feature1.service";

const getPost = async (req: Request, res: Response ) => {

    const post = await userPost();

    return res.status(200).json({
        message: post
    });
};

export default { getPost };