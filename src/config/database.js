const knex = require("knex")

const tenantsConnection = {};
let defaultConnection = null;

module.exports = {
    getDefaultInstance() {
        if (!defaultConnection) {
            defaultConnection = knex({
                client: 'pg',
                connection: {
                    host: process.env.DB_HOST,
                    port: process.env.DB_PORT,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DEFAULT_NAME
                },
            })
        }

        return defaultConnection;
    },

    getInstanceDbByTenant(tenant) {
        if(tenantsConnection[tenant]) {
            return tenantsConnection[tenant]
        }

        tenantsConnection[tenant] = knex({
            client: 'pg',
            connection: {
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: tenant
            },
        })

        return tenantsConnection[tenant]
    }
}