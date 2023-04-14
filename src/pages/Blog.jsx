import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const Blog = () => {
  const { posts } = useLoaderData();
  return (
    <div>
      <h1>Blog</h1>
      {posts.length &&
        posts.map((post) => (
          <article key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
          </article>
        ))}
    </div>
  );
};

export default Blog;
