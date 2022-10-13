import express from "express";
import cors from 'cors';
import bodyparser from 'body-parser';
import PostsRouter from "./routes/posts.js"
const app = express();

const PORT = 5004;

app.use(cors());
app.use(bodyparser.json());

app.use("/posts", PostsRouter);

app.get('/', function(req,res){
    res.json("Working request");
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));