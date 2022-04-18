import createCanvas from "canvas";
import { getVerse } from "./verse";
import { parseCsvFile, Word } from "./word";

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
  private async refresh() {
    this.canvas = createCanvas.createCanvas(this.width, this.height);
  }

  // 默认模板
  private async defaultTemp() {
    const ctx = this.canvas.getContext("2d");
    const nowTime = new Date();

    ctx.fillStyle = WHITE;
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.globalAlpha = 1;

    ctx.font = '20px "WenQuanYi Zen Hei Sharp"';
    ctx.fillStyle = BLACK;
    ctx.textAlign = "center";
    ctx.fillText(nowTime.toLocaleString(), this.width / 2, this.height / 4);

    ctx.fillText("2222", this.width / 2, this.height - this.height / 6);

    ctx.font = '40px "WenQuanYi Zen Hei Sharp"';
    ctx.fillStyle = RED;
    ctx.textAlign = "center";
    ctx.fillText("阎奔创新劳模工作室", this.width / 2, this.height / 2);

    ctx.fillStyle = BLACK;
    ctx.font = '35px "WenQuanYi Zen Hei Sharp"';
    ctx.fillText(
      "智能会议系统",
      this.width / 2,
      this.height / 2 + this.height / 6
    );
  }

  // verse 模板
  private async verseTemp() {
    const ctx = this.canvas.getContext("2d");

    ctx.fillStyle = WHITE;
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.globalAlpha = 1;

    const verse = await getVerse();

    console.log(verse);

    ctx.font = '22px "WenQuanYi Zen Hei Sharp"';
    ctx.fillStyle = BLACK;
    ctx.textAlign = "center";
    ctx.fillText(
      "< " + verse.data.origin.title + " >",
      this.width / 2,
      this.height / 4
    );

    ctx.font = '20px "WenQuanYi Zen Hei Sharp"';
    ctx.fillStyle = RED;
    ctx.textAlign = "center";
    ctx.fillText(verse.data.content, this.width / 2, this.height / 2);

    ctx.fillStyle = BLACK;
    ctx.font = '20px "WenQuanYi Zen Hei Sharp"';
    ctx.fillText(
      verse.data.origin.author + " - " + verse.data.origin.dynasty,
      this.width / 2,
      this.height / 2 + this.height / 4
    );
  }

  // word 模板
  private async wordTemp() {
    const ctx = this.canvas.getContext("2d");

    ctx.fillStyle = WHITE;
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.globalAlpha = 1;

    const WordList: Word[] = await parseCsvFile();

    const randomWord = WordList[Math.floor(Math.random() * WordList.length)];

    // ctx.font = '22px "WenQuanYi Zen Hei Sharp"';
    // ctx.fillStyle = BLACK;
    // ctx.textAlign = "center";
    // ctx.fillText(randomWord.word, this.width / 2, this.height / 4);

    ctx.font = '52px "WenQuanYi Zen Hei Sharp"';
    ctx.fillStyle = RED;
    ctx.textAlign = "center";
    ctx.fillText(
      randomWord.word,
      this.width / 2,
      this.height / 4 + this.height / 6
    );

    ctx.fillStyle = BLACK;
    ctx.font = '18px "WenQuanYi Zen Hei Sharp"';
    ctx.fillText(
      randomWord.content,
      this.width / 2,
      this.height / 2 + this.height / 6
    );
  }

  // 构建图像
  async build() {
    await this.refresh();
    switch (this.type) {
      case "default":
        await this.defaultTemp();
        break;
      case "verse":
        await this.verseTemp();
        break;
      case "word":
        await this.wordTemp();
        break;
      default:
        await this.defaultTemp();
        break;
    }
  }

  // 返回png图像流
  async GetPNGStream(): Promise<NodeJS.ReadableStream> {
    await this.build();
    return this.canvas.createPNGStream();
  }

  // 返回base64图像数据
  async GetPNGBase64(): Promise<string> {
    await this.build();
    return this.canvas.toDataURL("image/png");
  }

  // 返回Buffer图像数据
  async GetPNGBuffer(): Promise<Buffer> {
    await this.build();
    return this.canvas.toBuffer("image/png");
  }

  // 返回Raw图像数据
  async GetRawBuffer(): Promise<Buffer> {
    await this.build();
    return this.canvas.toBuffer("raw");
  }
}
