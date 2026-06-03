import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosFetchDataExample = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Users API
        const userRes = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        // Posts API
        const postRes = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // Comments API
        const commentRes = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );

        setUsers(userRes.data);
        setPosts(postRes.data);
        setComments(commentRes.data);
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h3>User Name & Email List</h3>

      <ol>
        {users.map((u) => (
          <li key={u.id}>
            <strong>Name:</strong> {u.name}
            <br />
            <strong>Email:</strong> {u.email}
          </li>
        ))}
      </ol>

      <hr />

      <h3>Posts Title & Body List</h3>

      <ol>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>Title:</strong> {post.title}
            <br />
            <strong>Body:</strong> {post.body}
          </li>
        ))}
      </ol>

      <hr />

      <h3>Comments List</h3>

      <ol>
        {comments.slice(0, 10).map((comment) => (
          <li key={comment.id}>
            <strong>Name:</strong> {comment.name}
            <br />
            <strong>Email:</strong> {comment.email}
            <br />
            <strong>Body:</strong> {comment.body}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AxiosFetchDataExample;