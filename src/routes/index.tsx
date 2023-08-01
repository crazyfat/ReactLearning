import About from "../components/06react-router6/about";
import Home from "../components/06react-router6/home";
import Message from "../components/06react-router6/about/message";
import {Navigate} from "react-router-dom";
import React from "react";
import News from "../components/06react-router6/about/news";
import Content from "../components/06react-router6/about/message/content";

export default [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>,
                children: [
                    {
                        path: 'content',
                        element: <Content/>
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/about"/>
    },
]
