import "dotenv/config";
import express from "express";
import woRoutes from "./routes/workouts.js";
import userRoutes from "./routes/user.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

//Express App
const app = express();

//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

//Routes
app.use("/workouts",woRoutes);
app.use("/user",userRoutes);

//Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log(`Connected to DB and running on port ${process.env.PORT}.`)
        });
    })
    .catch((err)=>{
        console.log(err);
    });
