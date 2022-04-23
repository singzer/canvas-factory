import * as grpc from "@grpc/grpc-js";
import { pb } from "./proto/canvas";
import { CanvasServiceImpl } from "./service";


const port = 9090;
const host = "0.0.0.0";

const server = new grpc.Server();

async function main() {
  server.addService(
    pb.UnimplementedCanvasService.definition,
    CanvasServiceImpl
  );
  server.bindAsync(
    `${host}:${port}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.log("server start error!", err);
        return;
      }
      server.start();
      console.log("server running on port", port);
    }
  );
}

main();
