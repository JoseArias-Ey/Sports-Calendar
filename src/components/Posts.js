import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "../services/postService";

import ApiItem from "./ApiItem";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((result) => {
        setPosts(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <u1 clasName="list-group">
      {posts.map((posts) => (
        <ApiItem
          id={posts.id}
          title={posts.title}
          completed={posts.completed}
        />
      ))}
    </u1>
  );
}
