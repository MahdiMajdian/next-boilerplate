import '../styles/globals.css'
import { NextIntlProvider } from 'next-intl'
import { store } from 'redux/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { AppPropsWithLayout } from 'app/constants/types'
import { Layout } from '@/components/Layout'


let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextIntlProvider messages={pageProps.messages}>
          {getLayout(<Component {...pageProps} />)}
        </NextIntlProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
