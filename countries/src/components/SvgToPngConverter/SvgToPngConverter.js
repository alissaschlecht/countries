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
  console.log('converting running');
  if(imgPreview) {
    // let imgSrc = document.getElementById("sampleSVG");
    console.log('onload running');
    const img = new Image();
    console.log('img brand new', img);
    canvas.width = width;
    canvas.height = height;
    console.log('canvas', canvas);
    // img.src = imgPreview.src;
    img.src = "http://localhost:3000/src/components/CountryImage/assets/Afghanistan.svg";
    console.log('imgPreview', imgPreview);
    console.log('img', img);
    console.log('img.src', img.src);
    if(img) {
      console.log('onload running');
      canvasCtx.drawImage(img, 0, 0, imgPreview.clientWidth, imgPreview.clientHeight, 0, 0, width, height);
      console.log('img', img);
      let imgData = canvas.toDataURL("image/png");
      console.log('imgData', imgData);
      if(typeof callback == "function"){
          callback(imgData)
      }
      _cleanUp();
    };
  }

  // console.log('input', input);
  imgPreview.src = input;
}
