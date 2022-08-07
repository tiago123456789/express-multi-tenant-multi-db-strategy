require("dotenv").config()
const { getInstanceDbByTenant } = require("../config/database")
const knexFile = require("../knexfile")

const commandAllowed = {
    up: true, down: true,
    latest: true
};

const actionToExecute = process.argv[2]
const tenant = process.argv[3]

if (!commandAllowed[actionToExecute]) {
    throw new Error("Actions allowed up or down")
}

async function execute() {
    const knexInstanceByTenant = getInstanceDbByTenant(tenant)
    await knexInstanceByTenant.migrate[actionToExecute]({
        directory: knexFile.development.migrations.directory,
    })
    knexInstanceByTenant.destroy()
    process.exit(0)
}

execute()