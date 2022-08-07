module.exports = class MovieService {

    constructor(movieRepository) {
        this.movieRepository = movieRepository
    }

    findAll() {
        return this.movieRepository.findAll();
    }

    create(data) {
        return this.movieRepository.create(data)
    }
}