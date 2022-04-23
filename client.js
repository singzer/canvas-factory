const fs = require('fs');
let PROTO_PATH = './proto/canvas.proto';

let grpc = require('@grpc/grpc-js');
let protoLoader = require('@grpc/proto-loader');
let packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });

let hello_proto = grpc.loadPackageDefinition(packageDefinition).pb;

function main(height, width) {
    // let args = parseArgs(process.argv.slice(2));
    let client = new hello_proto.Canvas(
        'localhost:9090',
        grpc.credentials.createInsecure());
    let request = {
        type : '0', // 类型
        data : 'png', // 补充数据
        width : 640,
        height : 384,
    }
    client.GenImg(request, function (err, response) {
        if (err) {
            console.log(err);
        } else {
            fs.writeFileSync('./img.bmp', response.data);
            return response.data
        }
    });
}
main();