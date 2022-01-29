import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          title={posts.title}
          date={posts.date}
          preview={posts.preview}
          key={posts.id}
        />
      ))}
    </main>
  );
}

export default ArticleList;
