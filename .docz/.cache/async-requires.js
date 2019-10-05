// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-index-mdx": () => import("/home/suso/proyectos/react-components/src/index.mdx" /* webpackChunkName: "component---src-index-mdx" */),
  "component---src-components-file-input-file-input-mdx": () => import("/home/suso/proyectos/react-components/src/components/fileInput/fileInput.mdx" /* webpackChunkName: "component---src-components-file-input-file-input-mdx" */),
  "component---src-pages-404-js": () => import("/home/suso/proyectos/react-components/.docz/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

