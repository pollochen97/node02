//在一個頁面中讀取完整的html檔案(包含http、css、script)
import http from "http";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";
import {readFileSync, readFile} from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));
//import.meta.url
//resolve路徑變成絕對路徑，使用逗號
//path.join是組合相對路徑

const server = http.createServer((request, response)=>{
    let {pathname} = new URL(request.url, "http://localhost"); 
    if(pathname === "/"){
        pathname = "/index.html"
    }      
    let filePath = resolve(__dirname, "pages", pathname.substring(1)); 

    readFile(filePath, (error, data)=>{
        if(error){
            response.statusCode = 500;
            response.setHeader("content-type", "text/html;charset=utf-8");
            response.end("<h1>文件讀取失敗</h1>");
            // return false;
        }else{
            response.end(data);
        }        
    });

//     if(pathname === "/"){
//         // test2.html
//         // pathname = "/index.html"; //不用加pages
//         let htmlContent = readFileSync(resolve(__dirname, "pages/index.html")); 
//         response.end(htmlContent);

//     }else if(pathname === "/css/main.css"){
//         // main.css
       
//         let cssContent = readFileSync(resolve(__dirname, "main.css")); 
//         response.end(cssContent);
//     }else if(pathname === "/js/main.js"){
//         // test2.js
//         let jsContent = readFileSync(resolve(__dirname, "main.js")); 
//         response.end(jsContent);
//     }else if(pathname === "/images/bg.jpg"){
//         // test2.js
//         let jsContent = readFileSync(resolve(__dirname, "imges/bg.jpg")); 
//         response.end(jsContent);
//     }else{
//         // 404
//         response.setHeader("content-type", "text/html;charset=utf-8");    
//         response.end("<h1>檔案找不到</h1>");
//     }
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動，http://localhost:9000/");
});