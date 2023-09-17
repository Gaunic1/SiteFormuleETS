const isDev = process.env.NODE_ENV === "development";

export const config = {
  apiUrl: isDev
    ? "https://formuleets.netlify.app/.netlify/functions/server/album/:id"
    : "https://formuleets.netlify.app/.netlify/functions/server/album/:id",
  driveId: "1UJ4PiRfyhPelXacznccRoGBPXLDEDvCb",
};
