module.exports = class MovieRepository {

    constructor(connection) {
        this.connection = connection
    }

    findAll() {
        return this.connection("movies").returning("*")
    }

    create(data) {
        return this.connection("movies").insert(data)
    }
}