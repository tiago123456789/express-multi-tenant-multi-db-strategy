const { getInstanceDbByTenant } = require("../config/database");
const MovieRepository = require("../repositories/movie-repository");
const MovieService = require("../services/movie-service")

module.exports = (params) => {
    const connection = getInstanceDbByTenant(params.tenant)
    const movieRepository = new MovieRepository(connection)
    const movieService = new MovieService(movieRepository);
    return movieService;
}