const API_KEY = "9a508302993877a7895e91f57306c08d";

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with-genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with-genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with-genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with-genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with-genres=99`,
}

export default requests;