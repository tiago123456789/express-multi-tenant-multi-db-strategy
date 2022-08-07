const movieServiceFactory = require("./movie-service-factory")
const MovieEndpoint = require("../endpoints/movie-endpoint")

module.exports = (params) => {
    const movieService = movieServiceFactory(params)
    const movieEndpoint = new MovieEndpoint(movieService)
    return movieEndpoint;
}