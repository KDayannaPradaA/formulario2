import { Express } from "express";
import dotenv from "dotenv";
import routerUser from "./routes/user.router.js";

const app = express()
dotenv.config();

app.use(express.js());

app.get('/', (req, res) => {
  res.send('Aplicacion!')
})

app.use(routerUser);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})