const fs = require("fs")
const path = require("path")

const domain = "https://shehral.com"

function getPageRoutes() {
  return [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/aria", changefreq: "weekly", priority: "0.9" },
    { path: "/aria/003-the-dark-factory", changefreq: "monthly", priority: "0.7" },
    { path: "/aria/002-agents-that-remember", changefreq: "monthly", priority: "0.7" },
    { path: "/aria/001-meet-aria", changefreq: "monthly", priority: "0.7" },
    { path: "/library", changefreq: "weekly", priority: "0.8" },
    { path: "/gratitude", changefreq: "monthly", priority: "0.5" },
  ]
}

function generateSitemap() {
  const routes = getPageRoutes()
  const today = new Date().toISOString().split("T")[0]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${domain}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap)
  console.log("Sitemap generated successfully!")
}

generateSitemap()
