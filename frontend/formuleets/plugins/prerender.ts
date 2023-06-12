import type { Plugin } from "vite";

import getPort from "get-port";
import express from "express";
import path from "path";
import puppeteer from "puppeteer";
import fs from "fs";
import { minify } from "html-minifier";

type Options = {
  buildDir: string;
  routes: string[];
};

function createServer(options: Options, port: number) {
  return new Promise<{ close: () => void }>((resolve) => {
    const app = express();

    app.use(express.static(options.buildDir, { dotfiles: "allow" }));
    app.get("*", (_, res) =>
      res.sendFile(path.join(options.buildDir, "index.html"))
    );

    const server = app.listen(port, serverCreated);

    function serverCreated() {
      resolve({
        close() {
          server.close();
        },
      });
    }
  });
}

async function createRenderer(options: Options, port: number) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  return {
    async render(route: string) {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: "domcontentloaded",
      });
      const html = minify(await page.content());
      await page.close();
      return { route, html };
    },
    async close() {
      await browser.close();
    },
  };
}

function savePage(options: Options, route: string, html: string) {
  const target = path.join(options.buildDir, route, "index.html");
  const directory = path.dirname(target);

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  fs.writeFileSync(target, html);
}

const prerender = (options: Options): Plugin => {
  return {
    name: "vite-plugin-html-prerender",
    apply: "build",
    enforce: "post",
    async closeBundle() {
      console.log("Starting prerendering");
      const port = await getPort();
      console.log(`Rendering on http://localhost:${port}`);

      const server = await createServer(options, port);
      console.log("Server created");
      const renderer = await createRenderer(options, port);
      console.log("Renderer created");

      const renderedHTML = await Promise.all(
        options.routes.map(renderer.render)
      );

      for (const result of renderedHTML) {
        savePage(options, result.route, result.html);
        console.log(`[RENDERED] ${result.route} with sucess`);
      }

      renderer.close();
      console.log("Renderer closed");
      server.close();
      console.log("Server closed");

      console.log("Prenrendering sucess");
    },
  };
};

export default prerender;
