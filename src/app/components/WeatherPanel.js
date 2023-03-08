/* eslint-disable @next/next/no-img-element */
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  faThermometerFull,
  faThermometer1,
  faTemperatureLow,
  faDroplet,
  faWind
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  formatDate,
  iconsWeather,
  iconsWeatherForecast
} from '../utils/WeatherUtils'

export default function WeatherPanel({ weatherData, weatherForecast }) {
  if ((!weatherData, !weatherForecast)) {
    return null
  }

  const { name, main, weather, wind } = weatherData

  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  const date = day + '/' + month + '/' + year

  const iconWeather = iconsWeather(weather[0].icon)

  const weatherDescription =
    weather[0].description.charAt(0).toUpperCase() +
    weather[0].description.slice(1).toLowerCase()

  const forecastDate1 = formatDate(
    new Date(weatherForecast.data.list[1].dt_txt)
  )
  const forecastDate2 = formatDate(
    new Date(weatherForecast.data.list[2].dt_txt)
  )
  const forecastDate3 = formatDate(
    new Date(weatherForecast.data.list[3].dt_txt)
  )
  const iconWeatherForecast1 = iconsWeatherForecast(
    weatherForecast.data.list[1].weather[0].icon
  )
  const iconWeatherForecast2 = iconsWeatherForecast(
    weatherForecast.data.list[2].weather[0].icon
  )
  const iconWeatherForecast3 = iconsWeatherForecast(
    weatherForecast.data.list[3].weather[0].icon
  )

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-full text-gray-700 px-2 py-3'>
        <div className='w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40 max-md:px-5 max-md:py-5 mx-2'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <span className='text-6xl font-bold max-md:text-5xl max-sm:text-4xl'>
                {main.temp.toFixed(0)}°C
              </span>
              <span className='font-semibold mt-1 text-gray-500 max-md:text-sm'>
                {name}
              </span>
              <span className='text-sm font-semibold mt-1 text-gray-500 max-md:text-xs'>
                {date}
              </span>
            </div>
            <div className='h-[4.4rem] w-auto flex flex-col text-center'>
              <img
                className='object-contain cursor-help'
                src={iconWeather}
                alt={weather[0].description}
                title={weatherDescription}
              />
              <span className='font-semibold text-sm text-gray-500'>
                {weatherDescription}
              </span>
            </div>
          </div>
          <div className='flex justify-between mt-12 max-md:flex-wrap'>
            <div className='flex flex-col items-center max-[500px]:w-1/3'>
              <span className='font-semibold text-lg'>
                {main.temp_max.toFixed(0)}°C
              </span>
              <FontAwesomeIcon
                icon={faThermometerFull}
                className='h-10 w-10 fill-current text-gray-400 mt-3'
              />
              <span className='mt-2 text-xs font-semibold text-gray-400'>
                TempMax
              </span>
            </div>
            <div className='flex flex-col items-center max-[500px]:w-1/3'>
              <span className='font-semibold text-lg'>
                {main.temp_min.toFixed(0)}°C
              </span>
              <FontAwesomeIcon
                icon={faThermometer1}
                className='h-10 w-10 fill-current text-gray-400 mt-3'
              />
              <span className='mt-2 text-xs font-semibold text-gray-400'>
                TempMin
              </span>
            </div>
            <div className='flex flex-col items-center max-[500px]:w-1/3'>
              <span className='font-semibold text-lg'>
                {main.feels_like.toFixed(0)}°C
              </span>
              <FontAwesomeIcon
                icon={faTemperatureLow}
                className='h-10 w-10 fill-current text-gray-400 mt-3'
              />
              <span className='mt-2 text-xs font-semibold text-gray-400'>
                FeelsLike
              </span>
            </div>
            <div className='flex flex-col items-center max-[500px]:w-1/3 max-[500px]:mt-2'>
              <span className='font-semibold text-lg'>{main.humidity}%</span>
              <FontAwesomeIcon
                icon={faDroplet}
                className='h-10 w-10 fill-current text-gray-400 mt-3'
              />
              <span className='mt-2 text-xs font-semibold text-gray-400'>
                Humidity
              </span>
            </div>
            <div className='flex flex-col items-center max-[500px]:w-1/3 max-[500px]:mt-2'>
              <span className='font-semibold text-lg'>{wind.speed}m/s</span>
              <FontAwesomeIcon
                icon={faWind}
                className='h-10 w-10 fill-current text-gray-400 mt-3'
              />
              <span className='mt-2 text-xs font-semibold text-gray-400'>
                WindSpeed
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40 max-md:px-5 max-md:py-5 mx-2'>
          <div className='flex justify-between items-center'>
            <span className='font-semibold text-lg w-1/3 max-sm:text-base'>
              {forecastDate1}
            </span>
            <div className='flex flex-col justify-center h-12'>
              <img
                className='h-full object-cover'
                src={iconWeatherForecast1}
                alt={weatherForecast.data.list[1].weather[0].description}
              />
              <span className='text-xs font-semibold text-gray-400 -mt-3'>
                {weatherForecast.data.list[1].weather[0].description}
              </span>
            </div>
            <span className='font-semibold text-lg w-1/4 text-right'>
              {weatherForecast.data.list[1].main.temp.toFixed(0)}°C
            </span>
          </div>
          <hr />
          <div className='flex justify-between items-center'>
            <span className='font-semibold text-lg w-1/3 max-sm:text-base'>
              {forecastDate2}
            </span>
            <div className='flex flex-col justify-center h-12'>
              <img
                className='h-full object-cover'
                src={iconWeatherForecast2}
                alt={weatherForecast.data.list[2].weather[0].description}
              />
              <span className='text-xs font-semibold text-gray-400 -mt-3'>
                {weatherForecast.data.list[2].weather[0].description}
              </span>
            </div>
            <span className='font-semibold text-lg w-1/4 text-right'>
              {weatherForecast.data.list[2].main.temp.toFixed(0)}°C
            </span>
          </div>
          <hr />
          <div className='flex justify-between items-center'>
            <span className='font-semibold text-lg w-1/3 max-sm:text-base'>
              {forecastDate3}
            </span>
            <div className='flex flex-col justify-center h-12'>
              <img
                className='h-full object-cover'
                src={iconWeatherForecast3}
                alt={weatherForecast.data.list[1].weather[0].description}
              />
              <span className='text-xs font-semibold text-gray-400 -mt-3'>
                {weatherForecast.data.list[1].weather[0].description}
              </span>
            </div>
            <span className='font-semibold text-lg w-1/4 text-right'>
              {weatherForecast.data.list[1].main.temp.toFixed(0)}°C
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
