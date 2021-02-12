
import React from 'react';
import App from 'next/app';
//font awesome
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
//styling

import  '../styles/main.scss';

export default class MyApp extends App {
    static async getInitialProps({Component,router,ctx})
    {
        let pageProps={};
        if(Component.getInitialProps)
        {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {pageProps}
    }

    render() {
        const  {Component, pageProps} = this.props;
        return (
           
                <Component {...pageProps}/>
           
        )
    }
}
