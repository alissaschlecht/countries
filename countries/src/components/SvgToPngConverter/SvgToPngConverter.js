
export default function createPNGFromSVGAndDownload(svgElement, imgName, fileType, width, height) {
  //needed for both svg & png
  const data = (new XMLSerializer()).serializeToString(document.getElementById(svgElement).childNodes[0].childNodes[0]);
  const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
  const DOMURL = window.URL || window.webkitURL || window;
  const url = DOMURL.createObjectURL(svgBlob);

  //download selected image
  const downloadImagesEvent = function (imgURI) {
    const evt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });

    const a = document.createElement('a');
    a.setAttribute('download', imgName);
    a.setAttribute('href', imgURI);
    a.setAttribute('target', '_blank');
    a.dispatchEvent(evt);
  }

  //create canvas and draw png, then download
  if(fileType === 'PNG') {
    const canvas = document.createElement('canvas');
    const imgPreview = document.createElement('img');
    imgPreview.style = "position: absolute; top: -99999px";
    document.body.appendChild(imgPreview);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = url;

    canvas.width = width;
    canvas.height = height;

    img.onload = function () {
      ctx.drawImage(img, 0, 0, width, height, 0, 0, width, height);
      DOMURL.revokeObjectURL(url);

      const imgURI = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');


      downloadImagesEvent(imgURI);
    };

    imgPreview.src = url;
  } else {
    //just download for svg with url blob
    downloadImagesEvent(url);
  }
}
