import express, { Request } from "express";
import cors from "cors";
import router from "./routes/router";
import { setupSwagger } from "./utils/swagger";
import cookieParser from "cookie-parser";
import authMiddleware from "./middlewares/tokenMiddleware";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(cors<Request>());
app.use(express.json()); // Use express.json() middleware
app.use(cookieParser(process.env.JWT_SECRET_KEY)); // Use cookie-parser middleware

//app.use(authMiddleware);

app.use("/api", router);
setupSwagger(app);
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.use(express.json());
