import http from "http";

const server = http.createServer((request, response)=>{
    response.statusCode = 404;
    // response.statusMessage = "No page ... no no no..."; 可以改404 Not found的文字，但不建議改
    response.setHeader("server", "Popo's Server");
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.write("test 1 <br>");
    response.write("test 2 <br>");
    response.write("test 3 <br>");
    response.write("test 4 <br>");
    response.write("test 5 <br>");
    response.end("你好主機"); 
    // response.write("test 6 <br>"); end後面不可以寫！
        
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動，http://localhost:9000/");
});