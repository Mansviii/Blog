import express, { json } from "express";
import userRouter from "server/routes/user-routes.js";
import blogRouter from "server/routes/blog-routes.js";
import "server/config/db.js";
import cors from "cors";

const app = express();

app.use(cors());

app.set("view engine", "ejs");
app.use(json());

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

app.use("/api", (req, res, next) => {
  res.send("hello");
});

//define port

app.listen(5001, () => console.log("app started at 5001..."));
