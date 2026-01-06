import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";
import connect from "./utills/connectdb.js";
// import sendemail from "./utills/sendmail.js";
import userRoute from './router/user.router.js';





dotenv.config({ path: "./.env" });
connect();
// sendemail("imtinanmughal677@gmail.com","77777","hello")
const port = process.env.port;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());


const corss = {
    origin: "http:almadinaahengineering//localhost:5173",
    Credentials: true

}
app.use(cors(corss));
// app.use("/user/api/v1" , userRoute)
app.use("/shop", userRoute);


const Port = 5173;
app.listen(port, () => {
    console.log("server is running on http://localhost:" + port);

})