import express, { Request } from "express";
import cors from "cors";
import router from "./routes/router";
import { setupSwagger } from "./utils/swagger";
const app = express();

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(cors<Request>());

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
app.use("/api", router);
setupSwagger(app);

app.use(express.json());
