"use strict";

const fastify = require('fastify')({ logger: true });
const GetGoogleDrive = require('drive-album');
const fs = require('fs');
const serverless = require("serverless-http");

function TimeBetweenTwoDate(startDate, stopDate){
    const diff = (stopDate.getTime() - startDate.getTime()) / 1000;
    console.log(Math.abs(diff))
    return Math.abs(diff);
}

//cors
fastify.register(require('fastify-cors'), (instance) => (req, callback) => {
    const origin = req.headers.origin || "localhost";

    console.log("ORIGIN: " + origin);

    // do not include CORS headers for requests from localhost
    if (/localhost/.test(origin) || /formuleets/.test(origin)) {
        callback(null, true);
        return
    }

    callback(new Error("Not allowed"));
});

fastify.get(
    '/album/:id',
    async (request) => {
        const id = request.params.id;
        const file = "./db/" + id + ".json"
      
        const startDate = new Date();
      
        try {
            let content = {type: "scrap", content: [], date: new Date()};
      
            const fileExist = fs.existsSync(file);
      
            if(fileExist){
              content = JSON.parse(fs.readFileSync(file, "utf8"));
            }
      
            if(!fileExist || TimeBetweenTwoDate(startDate, new Date(content.date)) >= 60 * 60){
              content.type = "scrap";
              content.content = await GetGoogleDrive(id);
              fs.writeFileSync(file, JSON.stringify({
                  type: "loaded from file",
                  id: id,
                  content: content.content,
                  date: new Date()
              }));
            }
      
            return content;
        } catch(e){
            console.error(e);
            return {error: true, msg: e};
        }
      }
);

module.exports.handler = serverless(fastify);