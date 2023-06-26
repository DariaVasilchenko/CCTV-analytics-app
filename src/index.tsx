import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {PageRoutes} from "./PageRoutes";

const component = (
    <BrowserRouter>
        <PageRoutes/>
    </BrowserRouter>
);

ReactDOM.render(
    component,
    document.getElementById('root')
);