const isDev = import.meta.env.NODE_ENV === "development";

export const config = {
  apiUrl: isDev
    ? "http://localhost:3000/.netlify/functions/server/album/:id"
    : "/.netlify/functions/server/album/:id",
  driveId: "1UJ4PiRfyhPelXacznccRoGBPXLDEDvCb",
};
