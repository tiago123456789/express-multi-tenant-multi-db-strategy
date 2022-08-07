require("dotenv").config()
const { getInstanceDbByTenant, getDefaultInstance } = require("../config/database")
const knexFile = require("../knexfile")

const commandAllowed = {
    up: true, down: true,
    latest: true
};

const actionToExecute = process.argv[2]

if (!commandAllowed[actionToExecute]) {
    throw new Error("Actions allowd up or down")
}

async function execute() {
    let tenants = await getDefaultInstance()("tenants");
    for (let index = 0; index < tenants.length; index++) {
        console.log(`EXECUTE ACTION ${actionToExecute.toUpperCase()} MIGRATIONS ON TENANT ${tenants[index].name}`)
        const knexInstanceByTenant = getInstanceDbByTenant(tenants[index].name)
        await knexInstanceByTenant.migrate[actionToExecute]({
            directory: knexFile.development.migrations.directory,
        })
        knexInstanceByTenant.destroy()
    }
    process.exit(0)
}

execute()