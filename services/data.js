export default function getLatestMovies(axios) {
  return axios.get(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1'
  )
}
