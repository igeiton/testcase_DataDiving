// Router
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
// components
import App from '../App/App';
import User from '../App/User/User';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<App />} />
            <Route path=":id" element={<User />} />
            <Route path="*" element={<div>404</div>} />
        </Route>
    )
);
