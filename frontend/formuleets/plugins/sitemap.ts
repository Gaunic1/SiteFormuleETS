import type { Plugin } from "vite";
import path from "path";
import fs from "fs";

type Options = {
  buildDir: string;
  website: string;
  routes: string[];
};

function saveSiteMap(options: Options, xml: string) {
  const target = path.join(options.buildDir, "sitemap.xml");
  fs.writeFileSync(target, xml);
}

function createPage(options: Options, route: string) {
  const priority = options.routes.indexOf(route) === 0 ? "1.0" : "0.8";

  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `<url>
            <loc>${options.website}${route}</loc>
            <lastmod>${year}-${month}-${day}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>${priority}</priority>
          </url>`;
}

const sitemap = (options: Options): Plugin => {
  return {
    name: "sitemap",
    apply: "build",
    enforce: "post",
    async closeBundle() {
      const website = options.website;

      options.website = website.endsWith("/")
        ? website.substring(0, website.length - 1)
        : website;

      console.log("Genrating sitemap");

      const xml = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${options.routes.map((route) => createPage(options, route)).join("")}
        </urlset>
      `.replace(/[\n\t]|\s{2,}/gi, "");
      console.log("XML genrated");

      saveSiteMap(options, xml);
      console.log("Sitemap created");
    },
  };
};

export default sitemap;
