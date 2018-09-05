// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ianwilson/ui-workspace/ianwilson.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ianwilson/ui-workspace/ianwilson.io/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/ianwilson/ui-workspace/ianwilson.io/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ianwilson/ui-workspace/ianwilson.io/src/pages/index.js"))
}

