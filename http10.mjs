//在一個頁面中讀取完整的html檔案(包含http、css、script)
import http from "http";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";
import {readFileSync} from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));
//import.meta.url
//resolve路徑變成絕對路徑，使用逗號
//path.join是組合相對路徑

const server = http.createServer((request, response)=>{
    let {pathname} = new URL(request.url, "http://localhost");    
    
    
    if(pathname === "/"){
        // test2.html
        let htmlContent = readFileSync(resolve(__dirname, "index.html")); 
        response.end(htmlContent);

    }else if(pathname === "/pages/css/main.css"){
        // test2.css
        let cssContent = readFileSync(resolve(__dirname, "main.css")); 
        response.end(cssContent);
    }else if(pathname === "/pages/js/main.js"){
        // test2.js
        let jsContent = readFileSync(resolve(__dirname, "main.js")); 
        response.end(jsContent);
    }else{
        // 404
        response.setHeader("content-type", "text/html;charset=utf-8");    
        response.end("<h1>檔案找不到</h1>");
    }
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動，http://localhost:9000/");
});