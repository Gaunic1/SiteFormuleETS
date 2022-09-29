import glob from "glob";
import imagemin from "imagemin-overwrite";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import path from "path";

glob(
  "../../dist/static/!(formule)/**/*.{jpg,png,svg,jpeg}",
  {},
  async function (er, files) {
    try {
      for (const file of files) {
        console.log("Processing: " + file);

        const files = await imagemin([file], {
          plugins: [
            imageminMozjpeg({
              quality: 40,
            }),
            imageminPngquant({
              quality: [0.3, 0.4],
              strip: true,
            }),
            imageminSvgo({
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            }),
          ],
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
);
