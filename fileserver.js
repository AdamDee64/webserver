const views = "./views"
const public = "./public"

const css = "/css"
const js = "/js"
const img = "/img"

const notFound = () => {
    return Bun.file(`${views}/404.html`, { type: "text/html" })
}

const requestedHTML = (filename) => {
    let f = Bun.file(`${views}${filename}`, { type: "text/html" })
    if (f.size > 0) {
        return f
    } else {
        return notFound()
    }
}
const requestedCSS = (filename) => {
    return Bun.file(`${public}${css}${filename}`, { type: "text/css" })
}
const requestedJS = (filename) => {
    return Bun.file(`${public}${js}${filename}`, { type: "text/javascript" })
}
const requestedJPG = (filename) => {
    return Bun.file(`${public}${img}${filename}`, { type: "image/jpeg" })
}
const requestedPNG = (filename) => {
    return Bun.file(`${public}${img}${filename}`, { type: "image/png" })
}
const requestedGIF = (filename) => {
    return Bun.file(`${public}${img}${filename}`, { type: "image/gif" })
}

const respond = (url) => {
    // let query = url.match(/(\?.*)/) // I doubt I will ever handle query on my personal website but I can if I need to.
    // console.log(url) // debugging
    if(url.endsWith("/")){
        return Bun.file("./views/index.html", { type: "text/html" })
    }

    if(url.endsWith("/favicon.ico")){
        return Bun.file("./public/favicon.png", { type: "image/png" })
    }

    const requestedFile = url.replace(/.+(?=\/)/, "")
    // console.log(requestedFile) // debugging
    const ext = url.match(/\.\w+$/)

    if(ext) {
        switch (ext[0]) {
            case ".html":
                return requestedHTML(requestedFile)
            case ".css":
                return requestedCSS(requestedFile)
            case ".js":
                return requestedJS(requestedFile)
            case ".jpg":
                return requestedJPG(requestedFile)
            case ".jpeg":
                return requestedJPG(requestedFile)
            case ".png":
                return requestedPNG(requestedFile)
            case ".gif":
                return requestedGIF(requestedFile)
            default:
                return notFound()
        }
    }
    return notFound()
}

module.exports = respond