const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Components',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/home/suso/proyectos/react-components/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Components',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/suso/proyectos/react-components',
          templates:
            '/home/suso/proyectos/react-components/node_modules/docz-core/dist/templates',
          packageJson: '/home/suso/proyectos/react-components/package.json',
          docz: '/home/suso/proyectos/react-components/.docz',
          cache: '/home/suso/proyectos/react-components/.docz/.cache',
          app: '/home/suso/proyectos/react-components/.docz/app',
          appPublic: '/home/suso/proyectos/react-components/.docz/public',
          appNodeModules: '/home/suso/proyectos/react-components/node_modules',
          appPackageJson: '/home/suso/proyectos/react-components/package.json',
          appYarnLock:
            '/home/suso/proyectos/react-components/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/home/suso/proyectos/react-components/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/home/suso/proyectos/react-components/gatsby-config.js',
          gatsbyBrowser:
            '/home/suso/proyectos/react-components/gatsby-browser.js',
          gatsbyNode: '/home/suso/proyectos/react-components/gatsby-node.js',
          gatsbySSR: '/home/suso/proyectos/react-components/gatsby-ssr.js',
          importsJs:
            '/home/suso/proyectos/react-components/.docz/app/imports.js',
          rootJs: '/home/suso/proyectos/react-components/.docz/app/root.jsx',
          indexJs: '/home/suso/proyectos/react-components/.docz/app/index.jsx',
          indexHtml:
            '/home/suso/proyectos/react-components/.docz/app/index.html',
          db: '/home/suso/proyectos/react-components/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
