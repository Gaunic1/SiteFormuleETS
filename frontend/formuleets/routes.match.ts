import fs from "fs";
import path from "path";

const textRoutes = fs.readFileSync(
  path.resolve(__dirname, "./src/router/index.ts"),
  "utf-8"
);
const reg = new RegExp(/['"]?path['"]?:\s*['"]?(.+?)['"]?,/gi);

const routes: string[] = [];

let res;
while ((res = reg.exec(textRoutes)) != null) {
  if (!res[1].includes(":")) routes.push(res[1] as string);
}

//remove duplicate
const finalPath = [...new Set(routes)].filter((e) => e !== "/easter-eggs");

if (process.env.NODE_ENV === "production")
  console.log("Matched routes: ", finalPath, "\n");

export default finalPath;
