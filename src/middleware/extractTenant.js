module.exports = {
    extractTenantByToken(req, res, next) {
        const accessToken = req.headers.authorization
        let payload = accessToken.split(".")[1]
        payload = Buffer.from(payload, "base64").toString("utf-8")
        payload = JSON.parse(payload)
        req.tenant = payload.tenant
        next();
    },

    extractTenantBySubdomain(req, res, next) {
        const host = req.headers.host
        const tenant = host.split(".")[0]
        req.tenant = tenant;
        next();
    }
}