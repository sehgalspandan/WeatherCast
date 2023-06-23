import Image from 'next/image'
import WeatherCard from '@/components/weatherCard'
import SearchComponent from '@/components/search'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (

    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
    
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LHLYZREESM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LHLYZREESM');
        `}
      </Script>
      <SearchComponent/>
      {/* <WeatherCard/>     */}
    </>
  )
}
