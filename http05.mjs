import http from "http";


// 方法二:取網址參數 
//Node Official Recommended 推薦方法
const server = http.createServer((request, response)=>{
    
    //手動設定網址測試：
    // let url = new URL("http://localhost:9000/?name=abc&password=abc1234");  
    // let url = new URL("/login?name=abc&password=abc1234", "http://localhost:9000"); //放入2個參數 
    // let url = new URL("/login?name=abc&password=abc1234", "http://localhost"); //刪掉9000也可以!只要有http://就可以了

    //帶入參數
    let url = new URL(request.url, "http://localhost");

    // console.log(url);  
    console.log(url.pathname);
    console.log(url.searchParams.get("name"));   
    console.log(url.searchParams.get("password"));   
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("你好主機"); //之後會加入判斷式來判定是否登入    
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動，http://localhost:9000/");
});