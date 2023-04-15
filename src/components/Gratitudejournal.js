import React from "react";
// import { Button } from "reactstrap";
import "../App.css";
import AddPost from "./AddPost";
import { useState } from "react";

export default function Gratitudejournal() {
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    };
    return <AddPost addPost={addPost} />;
}