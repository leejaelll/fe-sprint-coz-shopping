import Layout from './components/Layout';

import MainPage from './pages/MainPage';
import ProductListPage from './pages/ProductListPage';
import BookmarkPage from './pages/BookmarkPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/product/list', element: <ProductListPage /> },
      { path: '/bookmark', element: <BookmarkPage /> },
    ],
  },
];

export default routes;
