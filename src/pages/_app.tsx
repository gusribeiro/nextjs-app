import { AppProps } from 'next/app'

import { ContextProvider } from '../hooks/appContext'

import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
)

export default MyApp
