import * as grpc from "@grpc/grpc-js";
import { pb } from "./proto/canvas";

const port = 9090;
const host = "0.0.0.0";

const server = new grpc.Server();

async function main() {
  const serviceImpl = {
    GenImg: (
      call: grpc.ServerUnaryCall<pb.ImgRequest, pb.ImgResponse>,
      callback: grpc.sendUnaryData<pb.ImgResponse>
    ) => {
      console.log(call.request.high);
      callback(null, new pb.ImgResponse({ data: Uint8Array.from([1, 2, 3]) }));
    },
  };
  server.addService(pb.UnimplementedCanvasService.definition, serviceImpl);
  server.bindAsync(
    `${host}:${port}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      server.start();
      console.log("server running on port", port);
    }
  );
}

main();
