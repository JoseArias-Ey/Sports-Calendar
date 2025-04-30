import React, { useEffect, useState } from "react";
import { getPosts, deletePost, getTodos } from "../services/postService";

import ApiItem from "./ApiItem";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getTodos()
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
        <ApiItem id={posts.id} title={posts.title} />
      ))}
    </u1>
  );
}
