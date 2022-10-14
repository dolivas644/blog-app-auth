import { SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import PostCard from "./postsCard";
import Dash from "./Dash.css"
import Home from "./Home";

const Dashboard = ({setPostToDisplay}) => {
    const [fetchError, setFetchError] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            const { data, error } = await supabase
                .from('posts')
                .select()
            if (error) {
                setFetchError("Could not fetch posts")
                setPosts(null)
                console.log(error)
            }
            if (data) {
                setPosts(data)
                setFetchError(null)
            }
        }
        getPosts()
    }, [])
    return (
        <>
            {fetchError && (<p>{fetchError}</p>)}
            {posts && (
                <div className="posts">
                    <div className="post-grid">
                        {posts.map(post => (
                            <div>
                                <br></br>
                                <img src={post.image} alt="img" className="image"></img>
                                <h1 onClick={() => setPostToDisplay(post)}>{post.title}</h1>
                                <br></br>
                            </div>
                        ))}
                    </div>
                </div>

            )}
        </>
    );
}

export default Dashboard;