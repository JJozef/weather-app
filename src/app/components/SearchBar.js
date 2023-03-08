'use client'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import {
  fetchWeather,
  fetchWeatherForecast
} from '../api/openWeather/openWeatherApi'
import { fetchImage } from '../api/pexels/pexelsApi'

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('')

  const onSubmit = async (e) => {
    toast.loading('Buscando...')
    e.preventDefault()
    if (search === '' || !search) {
      toast.dismiss()
      toast.error('Ingresa una ciudad antes de buscar!', {
        position: 'bottom-center'
      })
      onSearch({ weatherData: null, weatherForecast: null, imageCity: null })
      return
    }

    const { data: weatherData, error } = await fetchWeather(search)
    const weatherForecast = await fetchWeatherForecast(search)
    const imageCity = await fetchImage(search)

    if (error) {
      toast.dismiss()
      toast.error(error)
      onSearch({ weatherData: null, weatherForecast: null, imageCity: null })
      return
    }
    toast.dismiss()
    toast.success('¡Encontrado!')
    onSearch({ weatherData, weatherForecast, imageCity })
  }

  return (
    <div className='flex justify-center items-center mb-4'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          className='w-64 px-2 py-1 rounded-tl-md rounded-bl-md border-2 border-gray-300 focus:outline-none focus:border-teal-700 hover:border-teal-700 text-base text-teal-700'
          placeholder='Search for a city'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className='bg-teal-700 text-white px-2 py-1 rounded-tr-md rounded-br-md border-2 border-teal-700'
          type='submit'
        >
          Search
        </button>
      </form>
      <Toaster />
    </div>
  )
}
