import Image from 'next/image'
import WeatherCard from '@/components/weatherCard'
import SearchComponent from '@/components/search'
import Head from 'next/head'

export default function Home() {
  return (

    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <SearchComponent/>
      {/* <WeatherCard/>     */}
    </>
  )
}
