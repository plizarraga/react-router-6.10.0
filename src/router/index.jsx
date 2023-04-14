import { createBrowserRouter } from 'react-router-dom';
import { Home, About, Blog, NotFound, Post } from '../pages';
import { LayoutDefault } from '../layouts';
import { loaderPosts, loaderPost } from '../loaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: '/about',
            element: <About />,
          },
          {
            path: '/blog',
            element: <Blog />,
            loader: loaderPosts,
          },
          {
            path: '/post/:id',
            element: <Post />,
            loader: loaderPost,
          },
        ],
      },
    ],
  },
]);

export default router;
