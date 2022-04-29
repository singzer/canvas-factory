export namespace htmlTempData {
  export const HDHtml = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        * {
          padding: 0;
          margin: 0;
          font-family: "WenQuanYi Zen Hei Sharp" Sans-serif;
        }
        div {
          width: 100%;
          text-align: center;
          word-wrap: break-word;
          word-break: break-all;
        }
        #top {
          height: 21.1%;
          position: relative;
        }
  
        #top-title {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        #content {
          height: 63%;
          background-color: red;
          color: white;
        }
        #content-user {
          width: 100%;
          height: 80%;
          position: relative;
        }
        #content-user div {
          font-size: 144px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
  
        #content-tests {
          width: 100%;
          height: 20%;
          font-size: 30px;
          margin: auto;
        }
        #bottom {
          height: 15.9%;
        }
        #bottom-left {
          font-size: 37px;
          height: 98%;
          width: 48%;
          float: left;
          text-align: left;
          padding-left: 2%;
          padding-top: 1%;
        }
        #bottom-right {
          float: right;
          height: 100%;
          width: 50%;
          position: relative;
          left: -5px;
        }
        #bottom-right-time {
          font-size: 25px;
          width: 40%;
          height: 96%;
          float: left;
          padding-left: 17%;
          text-align: left;
          margin-left: 2%;
          margin-top: 2%;
        }
        #bottom-right-statu {
          font-size: 37px;
          width: 35%;
          height: 97%;
          float: right;
          text-align: right;
          position: relative;
          right: 0;
          margin-top: 2%;
        }
        #bottom-right-ttt {
          width: 3%;
          height: 85%;
          margin-top: 2%;
          position: absolute;
          left: 60%;
          background-color: black;
        }
      </style>
    </head>
    <body>
      <div id="top">
        <div id="top-title">{{meetName}}</div>
      </div>
      <div id="content">
        <div id="content-user">
          <div>{{name}}</div>
        </div>
        <div id="content-tests">{{describe}}</div>
      </div>
      <div id="bottom">
        <div id="bottom-left">{{meetAdr}}</div>
        <div id="bottom-right">
          <div id="bottom-right-time">
          {{startTime}}}<br />
          {{endTime}}
          </div>
          <div id="bottom-right-ttt"></div>
          <div id="bottom-right-statu">{{state}}</div>
        </div>
      </div>
      <script>
        let width = document.querySelector("body").offsetWidth;
        document.getElementById("top-title").style.fontSize =
          0.075 * width + "px";
      </script>
    </body>
  </html>
    `;
}
