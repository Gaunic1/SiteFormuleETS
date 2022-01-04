const got = require('got');
const { FastHTMLParser } = require('fast-html-dom-parser');
const fs = require('fs');

(async function(){
    const response = await got('https://formuleets.ca/commanditaires2');
    const body = response.body;

    const doc = new FastHTMLParser(body);

    const blocks = doc.getElementsByClassName('gallery-block');
    let images = [];

    for(const block of blocks){
        images = images.concat(block.getElementsByTagName('img'));
    }

    const res = [];

    for(const img of images){
        const className = img.getAttribute('class');

        if(!className || !className.includes('thumb-image')) continue;

        const imageSrc = img.getAttribute('data-src');
        const src = img.parentNode.getAttribute('href');

        res.push({
            src: src,
            imageSrc: imageSrc
        });
    }

    fs.writeFileSync('./result/res.json', JSON.stringify(res, undefined, 4));
})();