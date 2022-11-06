import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>
      <title>Shreshth Verma: </title>
      <meta property="og:type" content='website'/> 
      <meta property='og:image' content='/image.jpg'/>
      <link rel="icon" href="/favicon.ico" />
      <meta property="description" content='A Full Stack Developer, a perpetual student and an entrepreneur'/>
      <meta property="og:title" content='Shreshth Verma'/>
      <meta property="og:description" content='A Full Stack Developer, a perpetual student and an entrepreneur'/>
      <meta property="og:url" content='https://www.shreshthverma.me'/>
      <meta property="og:site_name" content='Shreshth Verma'/>
      <meta property="og:locale" content='en_US'/>
      <meta charSet='utf-8'/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
