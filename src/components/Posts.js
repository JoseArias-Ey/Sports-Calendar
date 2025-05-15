import React, { useEffect, useState } from "react";
import { getTodos } from "../services/postService";
import ApiItem from "./ApiItem";

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
  var result = getTodos();
  console.log(result);

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
