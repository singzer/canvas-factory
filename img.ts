import createCanvas from "canvas";

const WHITE = "#FFFFFF";
const RED = "#FF0000";
const BLACK = "#000000";

// 定义一个图像构造器实例
export class ImgBuilder {
  width: number;
  height: number;

  type: string;
  data: string;
  canvas: createCanvas.Canvas;

  // 构造函数
  constructor(width: number, height: number, type?: string, data?: string) {
    this.width = width;
    this.height = height;
    this.type = type ? type : "default";
    this.data = data ? data : "";
    this.canvas = createCanvas.createCanvas(this.width, this.height);
  }

  // 设置图像数据
  set setWidth(width: number) {
    this.width = width;
  }

  set setHeight(height: number) {
    this.height = height;
  }

  set setType(type: string) {
    this.type = type;
  }

  set setData(data: string) {
    this.data = data;
  }

  // 刷新图像
  refresh() {
    this.canvas = createCanvas.createCanvas(this.width, this.height);
  }

  // 构建图像
  build() {
    this.refresh();
    const ctx = this.canvas.getContext("2d");
    const nowTime = new Date();

    ctx.fillStyle = WHITE;
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.globalAlpha = 1;

    ctx.font = '20px "WenQuanYi Zen Hei Sharp"';
    ctx.fillStyle = BLACK;
    ctx.textAlign = "center";
    ctx.fillText(nowTime.toLocaleString(), 200, 75);

    ctx.fillText("2222", 200, 280);

    ctx.font = '40px "WenQuanYi Zen Hei Sharp"';
    ctx.fillStyle = RED;
    ctx.textAlign = "center";
    ctx.fillText("阎奔创新劳模工作室", 200, 150);

    ctx.fillStyle = BLACK;
    ctx.font = '35px "WenQuanYi Zen Hei Sharp"';
    ctx.fillText("智能会议系统", 200, 240);
  }

  // 返回png图像流
  GetPNGStream(): NodeJS.ReadableStream {
    this.build();
    return this.canvas.createPNGStream();
  }

  // 返回base64图像数据
  GetPNGBase64(): string {
    this.build();
    return this.canvas.toDataURL("image/png");
  }

  // 返回Buffer图像数据
  GetPNGBuffer(): Buffer {
    this.build();
    return this.canvas.toBuffer("image/png");
  }

  // 返回Raw图像数据
  GetRawBuffer(): Buffer {
    this.build();
    return this.canvas.toBuffer("raw");
  }
}
