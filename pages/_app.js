import { useState } from 'react';
import DataContext, { PortfolioProvider } from '../components/portfolio_context';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <PortfolioProvider>
    <Component {...pageProps} />
  </PortfolioProvider>
}

export default MyApp
