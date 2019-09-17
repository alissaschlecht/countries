//es6 class to convert SVG to BASE64 for PNG download
let canvas, imgPreview, canvasCtx;

function _init() {
  canvas = document.createElement("canvas");
  imgPreview = document.createElement("img");
  imgPreview.style = "position: absolute; top: -99999px";

  document.body.appendChild(imgPreview);
  canvasCtx = canvas.getContext("2d");
}

function _cleanUp() {
  document.body.removeChild(imgPreview);
}

export default function convertFromInput(input, callback, width = 50, height = 50) {
  _init();
  imgPreview.onload = function() {
    const img = new Image();
    canvas.width = width;
    canvas.height = height;
    img.crossOrigin = "anonymous";
    img.src = imgPreview.src;
    img.onload = function() {
      canvasCtx.drawImage(img, 0, 0, imgPreview.clientWidth, imgPreview.clientHeight, 0, 0, width, height);
      let imgData = canvas.toDataURL("image/png");
      if(typeof callback == "function"){
          callback(imgData)
      }
      _cleanUp();
    };
  };

  imgPreview.src = input;
}
