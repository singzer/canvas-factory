import * as grpc from "@grpc/grpc-js";
import { ImgBuilder } from "./img";
import { pb } from "./proto/canvas";

export const CanvasServiceImpl = {
  GenImg: (
    call: grpc.ServerUnaryCall<pb.ImgRequest, pb.ImgResponse>,
    callback: grpc.sendUnaryData<pb.ImgResponse>
  ) => {
    console.log("new task received: ", call.request);
    try {
      const imgBuiler = new ImgBuilder(
        call.request.width,
        call.request.height,
        call.request?.type,
        call.request?.data
      );
      const buffer = imgBuiler.GetPNGBuffer();
      callback(null, new pb.ImgResponse({ data: buffer }));
    } catch (err) {
      callback(err, null);
    }
  },
};
