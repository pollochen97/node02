//在一個頁面中讀取完整的html檔案(包含http、css、script)
import http from "http";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";
import {readFileSync} from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));
//import.meta.url
//resolve路徑變成絕對路徑
//path.join是相對路徑

const server = http.createServer((request, response)=>{
    // let htmlContent = readFileSync("./test.html");
    let htmlContent = readFileSync(resolve(__dirname, "test.html")); //第2個參數直接是檔案名稱
    response.setHeader("content-type", "text/html;charset=utf-8");    
    response.end(htmlContent);  
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動，http://localhost:9000/");
});