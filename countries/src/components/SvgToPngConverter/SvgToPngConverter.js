//es6 class to convert SVG to BASE64 for PNG download
let canvas, imgPreview, ctx, svgString, DOMURL;

function _init() {
  console.log('init running');
  canvas = document.createElement("canvas");
  imgPreview = document.createElement("img");
  imgPreview.style = "position: absolute; top: -99999px";
  svgString = new XMLSerializer().serializeToString(document.querySelector('svg'));
  DOMURL = window.self.URL || window.self.webkitURL || window.self;

  document.body.appendChild(imgPreview);
  ctx = canvas.getContext("2d");
}

function _cleanUp() {
  document.body.removeChild(imgPreview);
}

export default function convertFromInput(input, callback, width = 50, height = 50) {
  _init();
  if(imgPreview) {
    console.log('imgPreview');
    let img = new Image();
    let svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
    let url = DOMURL.createObjectURL(svg);
    canvas.width = width;
    canvas.height = height;
    // img.crossOrigin = "anonymous";
    img.src = url;
    console.log('img.src', img)
    // img.onload = function() {
      ctx.drawImage(img, 0, 0, imgPreview.clientWidth, imgPreview.clientHeight, 0, 0, width, height);
      let imgData = canvas.toDataURL("image/png");
      console.log(canvas);
      if(typeof callback == "function"){
          callback(imgData)
      }
      _cleanUp();
    // };
  };

  imgPreview.src = input;
}

    // img.onload = function() {
    //     ctx.drawImage(img, 0, 0, 300, 300, 0,0,300,300);
    //     let png = canvas.toDataURL("image/png");
    //     document.querySelector('#png-container').innerHTML = '<img src="'+png+'"/>';
    //     _this.setState({
    //       imgURL: png
    //     });
    //     console.log('_this.state.imgURL', _this.state.imgURL);
    //     DOMURL.revokeObjectURL(png);
    // };
    // img.src = url;
