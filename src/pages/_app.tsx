import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Layout from '@/components/layout/Layout'
import '@/styles/globals.scss' // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import Head from "next/head";
import Script from "next/script"

import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
// Responsive meta tag
<meta name="viewport" content="width=device-width, initial-scale=1" />
//  bootstrap CDN
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossOrigin="anonymous" 
/>
</Head>
  
<Script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossOrigin="anonymous"/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
   
  )
}

export default appWithTranslation(MyApp)
