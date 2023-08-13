import { Request, Response } from "express";
import { UserService } from "./user.service";

const CreateUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.CreateUser(req.body);

    res.send({
      success: true,
      message: "User Created Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const CreateOrUpdateUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.CreateOrUpdateUser(req.body);

    res.send({
      success: true,
      message: "Profile Create or Update Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const GetUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.GetUser();

    res.send({
      success: true,
      message: "User Retrieve Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const GetSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.GetSingleUser(parseInt(req.params.id));

    res.send({
      success: true,
      message: "User Retrieve Successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const UserController = {
  CreateUser,
  CreateOrUpdateUser,
  GetUser,
  GetSingleUser,
};
