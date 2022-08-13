import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import { Home } from './routes/Home';
import { Users } from './routes/Users';
import { User } from './routes/User';
import { About } from './routes/About';
import {Layout} from "./Layout"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="users" element={<Users/>}>
                    <Route index element={<div>Seleccione un usuario</div>} />
                    <Route path=":userId" element={<User/>} />
                </Route>
                <Route path="about" element={<About/>} />
                {/*<Route path="*" element={<diV>Not Found</diV>} />*/}
                <Route path="*" element={<Navigate to="/"/>} />
            </Route>
        </Routes>
    </BrowserRouter>
);

