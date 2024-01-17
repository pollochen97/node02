import http from "http";
import {parse} from "url"; //準備解析網址後的資訊


// 方法一:取路徑與網址參數
const server = http.createServer((request, response)=>{
    //request.url 是包含路徑及查詢變數(但用起來不方便)
    //用url.parse這個方法來解析request.url的內容
    let res = parse(request.url, true); //加上true更好使用
    // console.log(request.url);//路徑
    console.log(res); //變成了物件

    if(res.pathname == "/"){
        let name = res.query.name;
        let password = res.query.password;
        console.log(name, password);
    }    
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("你好主機");
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動，http://localhost:9000/");
});