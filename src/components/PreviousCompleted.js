import React from "react";
import "../styles.css";
import { useEffect, useState } from "react";
import { getTodos } from "../services/postService";

export default function PreviousCompleted() {
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
    <div>
      <h3 className="spacer">Previous completed items: {posts.length}</h3>
    </div>
  );
}
