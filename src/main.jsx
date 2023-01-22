import App from './components/App';
import './styles/main.scss';

/**
 * New wat to build Render in React 18
 * @link https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
 */
createRoot(document.querySelector('#app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);