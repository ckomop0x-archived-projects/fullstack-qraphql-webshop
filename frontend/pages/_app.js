import App, { Container } from 'next/app';
import React from 'react';
import Page from '../components/Page';

class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
    
        return { pageProps }
      }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Page>
                    <Component {...pageProps} />
                </Page>                
            </Container>
        )
    }
}

export default MyApp