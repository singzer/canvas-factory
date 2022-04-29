import createCanvas from "canvas";
import nodeHtmlToImage from "node-html-to-image";

// 导入 cheerio
import cheerio from "cheerio";
import { getVerse } from "./verse";
import { parseCsvFile, Word } from "./word";
import { htmlTempData } from "./html";

const WHITE = "#FFFFFF";
const RED = "#FF0000";
const BLACK = "#000000";

// const CanvasTempList = ["default", "word", "verse"];
export enum CanvasTemp {
  default = "default",
  word = "word",
  verse = "verse",
}

export enum HtmlTemp {
  hd = "hd",
}

// 图像构造器
export class ImgBuilder {
  width: number;
  height: number;

  type: string;
  data: string;

  constructor(width: number, height: number, type: string, data: string) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.data = data;
  }

  // 空方法
  async GetPNGBuffer(): Promise<Buffer> {
    return new Promise((_, reject) => {
      reject("Not implemented");
    });
  }
}

// 画布构造器
export class CanvasBuilder extends ImgBuilder {
  canvas: createCanvas.Canvas;

  // 构造函数
  constructor(width: number, height: number, type: string, data: string) {
    super(width, height, type, data);
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
}

export class HtmlBuilder extends ImgBuilder {
  html: string;

  // 构造函数
  constructor(width: number, height: number, type: string, data: string) {
    super(width, height, type, data);
    this.html = "";
  }

  // HDHtml
  async hdhtml() {
    const htmlRoot = cheerio.load(htmlTempData.HDHtml);
    //修改 style
    const body = htmlRoot("body");

    body.css("width", `${this.width}px`);
    body.css("height", `${this.height}px`);

    this.html = body.html() as string;
  }

  // 构建图像
  async build() {
    switch (this.type) {
      case "hd":
        this.html = htmlTempData.HDHtml;
        break;
      default:
        this.html = htmlTempData.HDHtml;
        break;
    }
  }

  async GetPNGBuffer(): Promise<Buffer> {
    await this.build();

    const htmlRoot = cheerio.load(this.html);
    //修改 style
    const body = htmlRoot("body");

    body.css("width", `${this.width}px`);
    body.css("height", `${this.height}px`);

    console.log(Buffer.from(this.data, 'base64').toString('utf-8'))

    const content: object = JSON.parse(Buffer.from(this.data, 'base64').toString('utf-8'))
    console.log(content)

    const img = await nodeHtmlToImage({
      html: htmlRoot.html(),
      content: content,
    });

    return img as Buffer;
  }
}
