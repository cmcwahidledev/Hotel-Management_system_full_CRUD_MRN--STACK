import express from 'express';
// import cors from 'cors';
import chalk from 'chalk';
import connectDB from './config/db.js';
import authRouter from './routes/authRouter.js'

const app = express();
app.use(express.json());
// app.use(cors());

app.use("/api", authRouter);

connectDB();

const PORT = 2000;

app.listen(PORT, () => {
    console.log(chalk.green.bold("server is running"))
});