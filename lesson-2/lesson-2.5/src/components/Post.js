import axios from "axios";
import React, { useState, useEffect } from "react";

const Post = (props) => {
  const [post, setPost] = useState("");
  console.log(props);
  const id = props.match.params.post_id;
  useEffect( () => {
     axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      });
  },[id]);
  return (
    <div className="card">
      <div className="card-header">{id}</div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
         {post.body}
        </p>
      </div>
    </div>
  );
};

export default Post;
