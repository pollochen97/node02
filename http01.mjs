import http from "http"; //{xxx} VS xxx (需不需要加大括號，要看每個模組輸出的不同)

const server = http.createServer((request, response)=>{
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("Hello Server! 你好主機!");
}); //用小括號刮起來，用一個變數去接:建立server

server.listen(9000, ()=>{
    console.log("Server is Running 伺服器已經啟動，http://localhost:9000");
}) //文件多用9000