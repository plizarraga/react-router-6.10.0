import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const Post = () => {
  const { post } = useLoaderData();

  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/blog">Back to Blog</Link>
    </section>
  );
};

export default Post;
