// React
import ReactDOM from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';
import store from '../Store/store.ts';

// Router
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

// Styles
import '../Styles/main.css';

const root = document.querySelector('#root');

ReactDOM.createRoot(root!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
