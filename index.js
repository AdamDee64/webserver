const respond = require("./fileserver")

const PORT = 3000

Bun.serve({
    port: PORT,
    hostname: "127.0.0.1",
    fetch(req) {
        return new Response(respond(req.url))
    },
    error(error) {
        return new Response(`<pre>${error}\n${error.stack}</pre>`, {
            headers: {
                "Content-Type": "text/html",
            },
        })
    },
})