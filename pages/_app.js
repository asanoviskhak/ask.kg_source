
import Head from 'next/head'
import Footer from '../components/Layout/components/Footer/Footer'
import Misc from '../components/Layout/components/Misc/Misc'
function MyApp({ Component, pageProps }) {
  return (
      <>
       <Head>
        <title>Ask Consulting | Education Abroad</title>

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        
      </Head>
      <Misc/>
      <Component {...pageProps} />
      <Footer/>
      
      </>
  )
}

export default MyApp
