// @ts-nocheck

import React from "react";
import { useState, useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import './style.css';

const alanKey = 'c69864d278fdcba6f95d0790c0aa79bb2e956eca572e1d8b807a3e2338fdd0dc/stage';

export const Home: React.FC =() => {

    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key:alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles)
                }
            }
        })
    }, [])

    return ( 
        <div className="Screen">
            <body>
                <h1>Hello my friend</h1>
            </body>
        </div>
    );
}