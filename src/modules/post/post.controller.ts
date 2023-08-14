import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);

    res.send({
      success: true,
      message: "Post Created Successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const { data, total } = await PostService.getAllPost(options);

    res.send({
      success: true,
      message: "Post Retrieve Successfully!",
      total,
      data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getSinglePost(parseInt(req.params.id));

    res.send({
      success: true,
      message: "Post Retrieve Successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.updatePost(
      parseInt(req.params.id),
      req.body
    );

    res.send({
      success: true,
      message: "Post Updated Successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.deletePost(parseInt(req.params.id));

    res.send({
      success: true,
      message: "Post Deleted Successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const learnAggregateAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await PostService.learnAggregateAndGrouping();

    res.send({
      success: true,
      message: "Aggregate Working Successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPost,
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
  learnAggregateAndGrouping,
};
