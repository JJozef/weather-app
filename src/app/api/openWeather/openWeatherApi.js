const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

export async function fetchWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=es&appid=${apiKey}`
    )

    if (response.status === 404) {
      return { data: null, error: 'No se encontró la ciudad!' }
    }

    const data = await response.json()
    return { data, error: null }
  } catch (error) {
    return { data: null, error: 'Hubo un error al buscar el clima' }
  }
}

export async function fetchWeatherForecast(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=es&appid=${apiKey}`
    )
    if (response.status === 404) {
      return { data: null, error: 'No se encontro dias, para mostrar.' }
    }

    const data = await response.json()
    return { data, error: null }
  } catch (error) {
    return { data: null, error: 'Hubo un error al buscar el clima' }
  }
}
