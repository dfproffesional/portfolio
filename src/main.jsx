import {
  RouterProvider
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import router from './router';

/**
 * New wat to build Render in React 18
 * @link https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
 */
createRoot(document.querySelector('#app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);