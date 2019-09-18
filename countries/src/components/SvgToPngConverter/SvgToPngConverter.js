import JSZip from 'jszip'; 
import { saveAs } from 'file-saver';

export default function createPNGFromSVGAndDownload(svgElement, width, height, pngName) {

  const canvas = document.createElement('canvas');
  const imgPreview = document.createElement('img');
  imgPreview.style = "position: absolute; top: -99999px";
  document.body.appendChild(imgPreview);

  const ctx = canvas.getContext('2d');
  const data = (new XMLSerializer()).serializeToString(document.querySelector(svgElement));
  const DOMURL = window.URL || window.webkitURL || window;

  const img = new Image();
  const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
  const url = DOMURL.createObjectURL(svgBlob);

  img.src = url;

  canvas.width = width;
  canvas.height = height;

  img.onload = function () {
    ctx.drawImage(img, 0, 0, imgPreview.clientWidth, imgPreview.clientHeight, 0, 0, width, height);
    DOMURL.revokeObjectURL(url);

    const imgURI = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');

    const evt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });

    var zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");

    var theImg = zip.folder("images");
    theImg.file("smile.gif", pngName, {base64: true});

    zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        saveAs(content, "example.zip");
    });

    console.log('im still running');

    // const a = document.createElement('a');
    // a.setAttribute('download', pngName);
    // a.setAttribute('href', imgURI);
    // a.setAttribute('target', '_blank');

    // a.dispatchEvent(evt);
  };

  imgPreview.src = url;
}
