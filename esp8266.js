var http = require('http');

const fs = require('fs');

//2. 创建http服务器
// 参数: 请求的回调, 当有人访问服务器的时候,就会自动调用回调函数
var server = http.createServer(function (request, response) {
    console.log('有人访问了服务器')
    fs.readFile('./img.bmp',function(err, data) {
        if (err) {
            // console.log(err);
            response.write(data)
        }
        
        // ccc = main(12,12)
        // console.log(ccc);
        // if(request.url === '/favicon.ico') {return;}//阻止响应
        console.log(123)
        response.setHeader('Content-Type', 'image/bmp');
        response.setHeader('Accept-Ranges','bytes');
        response.setHeader('Content-Length', data.length);
        response.setHeader('keep-alive','timeout=4');
        response.end(data);
        // console.log(data)
    })
    //回调数据
    // response.write('Hello, My Love')
    // response.send('123')
    // response.end()
})

//3. 绑定端口
server.listen(3030, '192.168.31.102')

//4. 执行
console.log('执行了3030')