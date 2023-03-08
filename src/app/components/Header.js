import Link from 'next/link'
import { HeaderIcon } from './icons'

export default function Header() {
  return (
    <header className='flex justify-center items-center bg-teal-700 px-2 py-4'>
      <div className=''>
        <h1 className='text-xl font-semibold text-white flex gap-1'>
          Weather APP
          <sup>
            <HeaderIcon className='w-6 h-6 fill-white' />
          </sup>
        </h1>
        <p className='text-sm text-white'>
          Created with{' '}
          <Link
            className='font-semibold'
            href='https://openweathermap.org'
            rel='noopener noreferrer'
            target='_blank'
          >
            OpenWeatherMap
          </Link>{' '}
        </p>
      </div>
    </header>
  )
}
