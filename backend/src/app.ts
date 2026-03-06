import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";
import { env } from "./config/env";

export const app = express();

app.use(helmet());
app.use(cors({ origin: env.frontendUrl }));
app.use(express.json({ limit: "2mb" }));
app.use(morgan("dev"));

app.use("/api", routes);
