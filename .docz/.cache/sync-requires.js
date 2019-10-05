const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-index-mdx": hot(preferDefault(require("/home/suso/proyectos/react-components/src/index.mdx"))),
  "component---src-components-file-input-file-input-mdx": hot(preferDefault(require("/home/suso/proyectos/react-components/src/components/fileInput/fileInput.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/suso/proyectos/react-components/.docz/src/pages/404.js")))
}

