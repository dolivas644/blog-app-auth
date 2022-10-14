import Dash from "./Dash.css"
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react"
import Home from "./Home";

const PostCard = ({ post , setPostToDisplay }) => {
    return (
        <div className="postcard">
           < button onClick={() => setPostToDisplay(undefined)}>Back</button>{" "}
            <h1>{post.title}</h1>
            <h2>{post.author_name}</h2>
            <p>{post.created_at}</p>
            <p>{post.updated_at}</p>
            <p>{post.content}</p>
            <img src={post.image} alt="i"></img>
            
        </div>
    )
}

export default PostCard;