// import { Canvas, createCanvas } from "canvas";
const canvs = require("canvas");
const canvs2 = require("./canvas2");
// import { Canvas2Image } from './canvas2';
const WHITE = "#FFFFFF"; 
const RED = "#FF0000";
const BLACK = "#000000";
const width = 640;
const height = 384;
const partCenter = 0.63 * height;
const partTop = 0.211 * height; ;
const partBottom = 0.159 * height;

function main() {
    const canvas = canvs.createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = WHITE;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = RED;
    ctx.fillRect(0, partTop, width, partCenter);
    // const nowTime = new Date();
    // ctx.fillStyle = WHITE;
    // ctx.fillRect(0, 0, width, height); 384
    // ctx.globalAlpha = 1;     81 242 61

    // 48
    ctx.font = `${0.075 * width}px "WenQuanYi Zen Hei Sharp"`;
    ctx.fillStyle = BLACK;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText('测试会议室123', width / 2, 0.105 * height);

    // // ctx.fillText("2222", width / 2, height - height / 6);

    ctx.font = `${0.225 * width}px "WenQuanYi Zen Hei Sharp"`;
    ctx.fillStyle = WHITE;
    ctx.textAlign = "center";
    ctx.fillText("郑柯爽", width / 2, 0.447 * height);
    
    //30
    ctx.font = `${0.05 * width}px "WenQuanYi Zen Hei Sharp"`;
    ctx.fillStyle = WHITE;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    //partTop + (partCenter / 8 * 7)
    ctx.fillText("测试人员", width / 2, 0.762 * height);

    ctx.fillStyle = BLACK;
    //35
    ctx.font = `${0.058 * width}px "WenQuanYi Zen Hei Sharp"`;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    //height - (partBottom / 2)
    ctx.fillText("测试会议123", 0.023 * width, 0.921 * height);

    // 25
    ctx.font = `${0.039 * width}px "WenQuanYi Zen Hei Sharp"`;
    ctx.textAlign = "left";
    ctx.textBaseline = 'middle';
    // width / 5 * 3 - 15    height - (partBottom / 4 * 3)
    ctx.fillText("2022-2-25", 0.577 * width, 0.881 * height);
    ctx.textBaseline = 'middle';
    //width / 5 * 3 - 15    height - (partBottom / 4 * 1)
    ctx.fillText("14:30-16:30", 0.577 * width, 0.96 * height);

    ctx.fillStyle = BLACK;
    //(width / 5 * 4) + 5         height - (partBottom / 8 * 7) - 5          10             55
    ctx.fillRect( width / 5 * 4,  0.854 * height, 0.016 * width, 0.143 * height);

    // 35
    ctx.font = `${0.058 * width}px "WenQuanYi Zen Hei Sharp"`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = "left";
    //(width / 5 * 4) + 20          height - (partBottom / 2)
    ctx.fillText("会议中", 0.823 * width, 0.921 * height);

    canvs2.saveAsBMP(oCanvas);
    // ctx.fillText(
    //   "巴拉巴拉吧",
    //   width / 2,
    //   height / 2 + height / 6
    // );
    // console.log(ctx.canvas.toDataURL('image/png'));
    
}
main();