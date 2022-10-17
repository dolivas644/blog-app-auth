import Dashboard from "./Dashboard";
import PostCard from "./postsCard";
import { useState } from "react";
import Dash from "./Dash.css"
const Home = () => {
    const [postToDisplay, setPostToDisplay] = useState();
    return (
        <>
            <div className="App">
                {postToDisplay ? (
                    <PostCard post={postToDisplay} setPostToDisplay={setPostToDisplay} />
                ) : (
                    <Dashboard setPostToDisplay={setPostToDisplay} />
                )}
            </div>
        </>)
}

export default Home;