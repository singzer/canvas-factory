import * as grpc from "@grpc/grpc-js";
import { CanvasBuilder, CanvasTemp, HtmlBuilder, ImgBuilder } from "../img/img";
import { pb } from "../proto/canvas";

export const CanvasServiceImpl = {
  GenImg: async (
    call: grpc.ServerUnaryCall<pb.ImgRequest, pb.ImgResponse>,
    callback: grpc.sendUnaryData<pb.ImgResponse>
  ) => {
    console.log("new task received: ", call.request);
    try {
      // 判断图像宽高是否合法
      if (call.request.width <= 0 || call.request.height <= 0) {
        throw new Error("width or height is invalid");
      }

      // 判断类型
      const imgBuiler =
        call.request.type in CanvasTemp
          ? new CanvasBuilder(
              call.request.width,
              call.request.height,
              call.request?.type,
              call.request?.data
            )
          : new HtmlBuilder(
              call.request.width,
              call.request.height,
              call.request?.type,
              call.request?.data
            );

      const buffer = await imgBuiler.GetPNGBuffer();
      callback(null, new pb.ImgResponse({ data: buffer }));
    } catch (err) {
      callback(err as grpc.ServerErrorResponse, null);
    }
  },
};
