import express from 'express';
import userRouter from './pkg/user/route';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})