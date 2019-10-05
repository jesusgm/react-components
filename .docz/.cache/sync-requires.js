const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/suso/proyectos/react-components/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/suso/proyectos/react-components/.docz/src/pages/404.js"))),
  "component---src-index-mdx": hot(preferDefault(require("/home/suso/proyectos/react-components/src/index.mdx"))),
  "component---src-components-binary-clock-binary-clock-mdx": hot(preferDefault(require("/home/suso/proyectos/react-components/src/components/binaryClock/binaryClock.mdx"))),
  "component---src-components-file-input-file-input-mdx": hot(preferDefault(require("/home/suso/proyectos/react-components/src/components/fileInput/fileInput.mdx")))
}

