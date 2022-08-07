
module.exports = class MovieEndpoint {

    constructor(movieService) {
        this.movieService = movieService
    }

    async findAll(request, response) {
        const registers = await this.movieService.findAll();
        return response.json(registers)
    }

   async create(request, response) {
        const data = request.body;
        await this.movieService.create(data)
        return response.sendStatus(201)
    }
}