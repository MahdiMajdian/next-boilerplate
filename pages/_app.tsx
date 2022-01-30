import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'
import { store } from 'redux/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextIntlProvider messages={pageProps.messages}>
          <Component {...pageProps} />
        </NextIntlProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
