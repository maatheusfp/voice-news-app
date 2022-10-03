import React from "react";
import { useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import './style.css';

const alanKey = 'c69864d278fdcba6f95d0790c0aa79bb2e956eca572e1d8b807a3e2338fdd0dc/stage';

export const Home: React.FC =() => {


    useEffect(() => {
        alanBtn({
            key:alanKey,
/*             onCommand: ({ command }) => {
                if(command === 'testCommand') {
                    alert('The command was executed')
                }
            } */
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