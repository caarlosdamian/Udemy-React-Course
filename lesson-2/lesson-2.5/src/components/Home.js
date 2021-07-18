import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetData from "../helpers/GetData";
const Home = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    GetData().then((res) => {
      setPost(res.slice(0, 5));
    });
  }, []);
  const listMarkup =
    posts.length > 0 ? (
      posts.map((post) => {
        return (
          <div className="card shadow p-3 mb-5 bg-body rounded"  key={post.id}>
            <div className="card-body">
             <Link to={`/posts/${post.id}`}> <h5 className="card-title">{post.title}</h5> </Link>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="text-center">No Post found</div>
    );
  return (
    <div className="container">
      <h4 className="center">Home</h4>
      {listMarkup}
    </div>
  );
};

export default Home;
