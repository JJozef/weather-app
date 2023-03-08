export function iconsWeather(urlIcon) {
  return `http://openweathermap.org/img/w/${urlIcon}.png`
}
export function iconsWeatherForecast(urlIcon) {
  return `http://openweathermap.org/img/w/${urlIcon}.png`
}

export function formatDate(date) {
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  const months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic'
  ]
  const day = days[date.getDay()]
  const month = months[date.getMonth()]
  const dateNum = date.getDate()
  const hour = date.getHours() % 12 || 12
  return `${day}, ${dateNum} ${month}, ${hour}h`
}
