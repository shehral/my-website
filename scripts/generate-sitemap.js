const fs = require("fs")
const path = require("path")

// Your website domain
const domain = "https://shehral.com"

// Function to get all page routes
function getPageRoutes() {
  // Define your routes here - add more as you create new pages
  return ["/", "/ai", "/ai/interpretability", "/ai/reading", "/ai/resources", "/rational-riffs", "/gratitude"]
}

// Generate sitemap XML
function generateSitemap() {
  const routes = getPageRoutes()
  const today = new Date().toISOString()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap)
  console.log("Sitemap generated successfully!")
}

// Execute the function
generateSitemap()
