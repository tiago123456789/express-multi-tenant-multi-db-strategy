require("dotenv").config()
const express = require("express")
const { execSync } = require("child_process")
const app = express()
const { getDefaultInstance } = require("./config/database")
const movieEndpointFactory = require("./factory/movie-endpoint-factory")
const { extractTenantBySubdomain, extractTenantByToken } = require("./middleware/extractTenant")

app.use(express.json())

app.post("/tenants", async (request, response) => {
    const data = request.body;
    await getDefaultInstance().raw(`CREATE DATABASE ${data.tenant}`)
    await getDefaultInstance()("tenants").insert({
        name: data.tenant
    })
    execSync(`cd ./ && npm run migration:latest`)
    response.sendStatus(201)
})

app.get(
    "/movies-by-token",
    extractTenantByToken,
    (req, res) => movieEndpointFactory({ tenant: req.tenant }).findAll(req, res))

app.get(
    "/movies",
    extractTenantBySubdomain,
    (req, res) => movieEndpointFactory({ tenant: req.tenant }).findAll(req, res))

app.post("/movies",
    extractTenantBySubdomain,
    (req, res) => movieEndpointFactory({ tenant: req.tenant }).create(req, res))

app.listen(3000, () => {
    console.log("Server is running")
})