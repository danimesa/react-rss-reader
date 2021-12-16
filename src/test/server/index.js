const express = require('express');
const cors = require('cors');
const pino = require('express-pino-logger')();

let Parser = require('rss-parser');
let parser = new Parser();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(pino);

app.use(cors({
    origin: 'http://localhost:3000', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))

app.get('/api/feeds/:feed', (req, res) => {
    (async () => {
        console.log(req.params.feed)
        let feed = await parser.parseURL(req.params.feed);
        res.send(feed);
    })();
});

app.listen(3001, () => console.log('Express server is running on localhost:3001') );
