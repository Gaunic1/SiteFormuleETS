import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

(async function () {
  try {
    console.log("Processing ...");

    const files = await imagemin(["images/*.{jpg,png}"], {
      destination: "result/",
      plugins: [
        imageminMozjpeg(),
        imageminPngquant({
          quality: [0.2, 0.4],
          strip: true,
        }),
      ],
    });

    console.log(files);
    console.log("End");
  } catch (e) {
    console.log(e);
  }
})();
