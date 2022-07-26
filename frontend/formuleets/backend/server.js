"use strict";

require("dotenv").config();

const express = require("express");
const app = express();
const router = express.Router();
const serverless = require("serverless-http");
const cors = require("cors");

const GetGoogleDrive = require('drive-album');

function TimeBetweenTwoDate(startDate, stopDate){
    const diff = (stopDate.getTime() - startDate.getTime()) / 1000;
    console.log(Math.abs(diff))
    return Math.abs(diff);
}

const corsOptions = {
    origin: /(formule-ets)|(formuleets)|(localhost)/gi,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}

const data = {};

//cors
app.use(cors(corsOptions))

router.get(
    '/album/:id',
    async (request, res) => {
        const id = request.params.id;
        const exist = data[id];
      
        const startDate = new Date();
      
        try {
            let content = {type: "scrap", content: [], date: new Date()};
      
            if(exist){
              content = exist;
            }
      
            if(!exist || TimeBetweenTwoDate(startDate, new Date(content.date)) >= 60 * 60){
              content.content = await GetGoogleDrive(id);
              data[id] = {
                  type: "loaded from file",
                  id: id,
                  content: content.content,
                  date: new Date()
              };
            }
      
            res.json(content);
        } catch(e){
            console.error(e);
            res.json({error: true, msg: e});
        }
      }
);

router.get(
    "/force-refresh/:id",
    async (request, res) => {
        const id = request.params.id;
      
        try {
            let content = {type: "scrap", content: [], date: new Date()};
      
            content.content = await GetGoogleDrive(id);
            data[id] = {
                type: "loaded from file",
                id: id,
                content: content.content,
                date: new Date()
            };
      
            res.json(content);
        } catch(e){
            console.error(e);
            res.json({error: true, msg: e});
        }
      }
);

app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);