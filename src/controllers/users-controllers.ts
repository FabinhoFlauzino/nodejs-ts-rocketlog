import { Request, Response } from "express";

class UserControllers {
  create(request: Request, response: Response) {
    return response.json({ message: "OK" });
  }
}

export { UserControllers };