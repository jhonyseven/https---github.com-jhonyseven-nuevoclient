const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jhon/Desktop/client/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jhon/Desktop/client/src/pages/404.js"))),
  "component---src-pages-blog-1-js": hot(preferDefault(require("/Users/jhon/Desktop/client/src/pages/blog1.js"))),
  "component---src-pages-blog-2-js": hot(preferDefault(require("/Users/jhon/Desktop/client/src/pages/blog2.js"))),
  "component---src-pages-blog-db-mdx": hot(preferDefault(require("/Users/jhon/Desktop/client/src/pages/blogDB.mdx"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/jhon/Desktop/client/src/pages/blog.js"))),
  "component---src-pages-dashboard-dos-js": hot(preferDefault(require("/Users/jhon/Desktop/client/src/pages/dashboardDos.js"))),
  "component---src-pages-dashboard-js": hot(preferDefault(require("/Users/jhon/Desktop/client/src/pages/dashboard.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jhon/Desktop/client/src/pages/index.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/jhon/Desktop/client/src/templates/blog.js")))
}

