import express from "express";
import "express-async-errors";
import { routes } from "./routes";
import cors from "cors";

import { errorHandling } from "./middlewares/error-handling";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(routes);

app.use(errorHandling);

export { app };
