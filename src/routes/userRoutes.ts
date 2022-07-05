import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET request at /products",
  });
});

userRouter.post("/", (req, res, next) => {
  res.status(200).json({
    message: "handling post request at /products",
  });
});

userRouter.put("/", (req, res, next) => {
  res.status(200).json({
    message: "handling put request at /products",
  });
});

userRouter.delete("/", (req, res, next) => {
  res.status(200).json({
    message: "handling delete request at /products",
  });
});

export default userRouter;
