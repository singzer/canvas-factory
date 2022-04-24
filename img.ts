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
    const partCenter:number = 0.63 * this.height;
    const partTop:number = 0.211 * this.height; ;
    const partBottom:number = 0.159 * this.height;
    
    // ctx.fillStyle = WHITE;
    // ctx.fillRect(0, 0, this.width, this.height);
    // ctx.globalAlpha = 1;

    // ctx.font = '20px "WenQuanYi Zen Hei Sharp"';
    // ctx.fillStyle = BLACK;
    // ctx.textAlign = "center";
    // ctx.fillText(nowTime.toLocaleString(), this.width / 2, this.height / 4);

    // ctx.fillText("2222", this.width / 2, this.height - this.height / 6);

    // ctx.font = '40px "WenQuanYi Zen Hei Sharp"';
    // ctx.fillStyle = RED;
    // ctx.textAlign = "center";
    // ctx.fillText("阎奔创新劳模工作室", this.width / 2, this.height / 2);

    // ctx.fillStyle = BLACK;
    // ctx.font = '35px "WenQuanYi Zen Hei Sharp"';
    // ctx.fillText(
    //   "智能会议系统",
    //   this.width / 2,
    //   this.height / 2 + this.height / 6
    // );


    ctx.fillStyle = WHITE;
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.fillStyle = RED;
    ctx.fillRect(0, partTop, this.width, partCenter);
    // const nowTime = new Date();
    // ctx.fillStyle = WHITE;
    // ctx.fillRect(0, 0, width, height); 384
    // ctx.globalAlpha = 1;     81 242 61
    // createCanvas.registerFont('./wqyfonts/fonts/WenQuanYiMicroHei.ttf', { family: 'WenQuanYi Micro Hei' });
    // 48
    // ctx.font = `${0.075 * this.width}px "WenQuanYi Zen Hei Sharp"`;
    // ctx.font = `${0.075 * this.width}px "WenQuanYi Micro Hei"`;
    ctx.font = `${0.075 * this.width}px "sans-serif"`;
    ctx.fillStyle = BLACK;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText('测试会议室123', this.width / 2, 0.105 * this.height);

    // // ctx.fillText("2222", width / 2, height - height / 6);

    // ctx.font = `${0.225 * this.width}px "WenQuanYi Zen Hei Sharp"`;
    // ctx.font = `border ${0.225 * this.width}px "WenQuanYi Micro Hei"`;
    ctx.font = `${0.225 * this.width}px "sans-serif"`;
    ctx.fillStyle = WHITE;
    ctx.textAlign = "center";
    ctx.fillText("郑柯爽", this.width / 2, 0.447 * this.height);
    
    //30
    // ctx.font = `${0.05 * this.width}px "WenQuanYi Zen Hei Sharp"`;
    // ctx.font = `${0.05 * this.width}px "WenQuanYi Micro Hei"`;
    ctx.font = `${0.05 * this.width}px "sans-serif"`;
    ctx.fillStyle = WHITE;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    //partTop + (partCenter / 8 * 7)
    ctx.fillText("测试人员", this.width / 2, 0.762 * this.height);

    ctx.fillStyle = BLACK;
    //35
    // ctx.font = `${0.058 * this.width}px "WenQuanYi Zen Hei Sharp"`;
    // ctx.font = `${0.058 * this.width}px "WenQuanYi Micro Hei"`;
    ctx.font = `${0.058 * this.width}px "sans-serif"`;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    //height - (partBottom / 2)
    ctx.fillText("测试会议123", 0.023 * this.width, 0.921 * this.height);

    // 25
    // ctx.font = `${0.039 * this.width}px "WenQuanYi Zen Hei Sharp"`;
    // ctx.font = `${0.039 * this.width}px "WenQuanYi Micro Hei"`;
    ctx.font = `${0.039 * this.width}px "sans-serif"`;
    ctx.textAlign = "left";
    ctx.textBaseline = 'middle';
    // width / 5 * 3 - 15    height - (partBottom / 4 * 3)
    ctx.fillText("2022-2-25", 0.577 * this.width, 0.881 * this.height);
    ctx.textBaseline = 'middle';
    //width / 5 * 3 - 15    height - (partBottom / 4 * 1)
    ctx.fillText("14:30-16:30", 0.577 * this.width, 0.96 * this.height);

    ctx.fillStyle = BLACK;
    //(width / 5 * 4) + 5         height - (partBottom / 8 * 7) - 5          10             55
    ctx.fillRect( this.width / 5 * 4,  0.854 * this.height, 0.016 * this.width, 0.143 * this.height);

    // 35
    // ctx.font = `${0.058 * this.width}px "WenQuanYi Zen Hei Sharp"`;
    // ctx.font = `${0.058 * this.width}px "WenQuanYi Micro Hei"`;
    ctx.font = `${0.058 * this.width}px "sans-serif"`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = "left";
    //(width / 5 * 4) + 20          height - (partBottom / 2)
    ctx.fillText("会议中", 0.823 * this.width, 0.921 * this.height);
  }

  // 返回png图像流
  GetPNGStream(): NodeJS.ReadableStream {
    this.build();
    console.log('png stream');
    return this.canvas.createPNGStream();
  }

  // 返回base64图像数据
  GetPNGBase64(): string {
    this.build();
    console.log('base64');
    return this.canvas.toDataURL("image/png");
  }

  // 返回Buffer图像数据
  GetPNGBuffer(): Buffer {
    this.build();
    console.log('buffer');
    
    return this.canvas.toBuffer("image/png");
  }

  // 返回Raw图像数据
  GetRawBuffer(): Buffer {
    this.build();
    console.log('raw');
    return this.canvas.toBuffer("raw");
  }
}
