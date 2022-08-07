require("dotenv").config()
const { getDefaultInstance, getInstanceDbByTenant } = require("../config/database")
const knexFile = require("../knexfile")

async function execute() {
    let tenants = await getDefaultInstance()("tenants");
    for (let index = 0; index < tenants.length; index++) {
        console.log(`RUNNING SEEDS ON TENANT ${tenants[index].name}`)
        const knexInstanceByTenant = getInstanceDbByTenant(tenants[index].name)
        await knexInstanceByTenant.seed.run({
            directory: knexFile.development.seeds.directory,
        })
        knexInstanceByTenant.destroy()
    }
    process.exit(0)
}

execute()