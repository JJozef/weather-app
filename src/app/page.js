'use client'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherPanel from './components/WeatherPanel'

export default function Home() {
  const [weatherData, setWeatherData] = useState(null)
  const [weatherForecast, setWeatherForecast] = useState(null)
  const [imageCity, setImageCity] = useState(null)

  const handleSearch = (data) => {
    setWeatherData(data.weatherData)
    setWeatherForecast(data.weatherForecast)
    setImageCity(data.imageCity)
  }
  const imageBg = imageCity?.data

  return (
    <main
      className={`w-full min-h-[calc(100vh-80px)] relative ${
        imageBg ? 'bg-gray-800' : ''
      }`}
    >
      <div className='w-full h-full absolute inset-0 overflow-hidden'>
        <div
          className='w-full h-full absolute opacity-30'
          style={{
            backgroundImage: `url(${imageBg?.src.landscape})`,
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'blur(10px)'
          }}
          alt={imageBg?.alt}
        />
      </div>
      <section className='w-full h-full relative'>
        <article className='relative py-4'>
          <div className='w-full h-full flex flex-col justify-center gap-5 relative'>
            <SearchBar onSearch={handleSearch} />
            <WeatherPanel
              weatherData={weatherData}
              weatherForecast={weatherForecast}
            />
          </div>
        </article>
      </section>
    </main>
  )
}
