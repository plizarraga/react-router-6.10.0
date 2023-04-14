export const loaderPosts = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();
  return { posts };
};

export const loaderPost = async ({ params }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!data.ok) {
    throw new Error('Post not found');
    // throw {
    //   status: data.status,
    //   statusText: 'Code: ' + data.status,
    // };
  }

  const post = await data.json();
  return { post };
};
