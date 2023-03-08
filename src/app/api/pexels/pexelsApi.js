const apiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY

export async function fetchImage(cityName) {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${cityName}%20city&per_page=1`,
      {
        headers: {
          Authorization: apiKey
        }
      }
    )
    if (response.status === 404) {
      return { data: null, error: 'Error al buscar imagenes!' }
    }

    const data = await response.json()
    const result = data.photos[0]
    return { data: result, error: null }
  } catch (error) {
    return { data: null, error: 'Hubo un error al buscar la imagen' }
  }
}
