import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoutes";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use("/users", userRouter);

const server = app.listen(port, () => {
  console.log(
    `----------------------------SERVER STARTED ON PORT ${port}-----------------------------`
  );
});

app.use(async (req, res) => {
  res.status(404).send(`Route not found`);
});

export default app;
