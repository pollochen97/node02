//取得要求路徑與查詢變數
//因為要求主體只有用post方法才會送出內容
import http from "http"; //用變數去接

const server = http.createServer((request, response)=>{
    let body = "";
    //串流stream讀取時也有類似的寫法(綁定on事件)
    request.on("data", (chunk)=>{
        body += chunk;
    }); //資料傳輸
    request.on("end", (chunk)=>{        
        console.log(body);
        response.setHeader("content-type", "text/html;charset=utf-8");
        response.end("你好，主機")
    }); //傳輸結束
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動，http://localhost:9000");
});