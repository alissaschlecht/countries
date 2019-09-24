
export default function createPNGFromSVGAndDownload(svgElement, imgName, fileType, width, height) {
  console.log('svgElement', document.getElementById(svgElement).childNodes[0].childNodes[0]);
  //needed for both svg & png
  const data = (new XMLSerializer()).serializeToString(document.getElementById(svgElement).childNodes[0].childNodes[0]);
  // console.log(data);
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

    console.log('i should be downloading');
    const a = document.createElement('a');
    a.setAttribute('download', imgName);
    a.setAttribute('href', imgURI);
    a.setAttribute('target', '_blank');
    a.dispatchEvent(evt);
  }

  //create canvas and draw png, then download
  if(fileType === 'PNG') {
    console.log('png');
    const canvas = document.createElement('canvas');
    const imgPreview = document.createElement('img');
    imgPreview.style = "position: absolute; top: -99999px";
    document.body.appendChild(imgPreview);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = url;
    console.log('img.src', img.src);
    console.log('img', img);

    canvas.width = width;
    canvas.height = height;

    img.onload = function () {
      console.log('onload is working');
      ctx.drawImage(img, 0, 0, imgPreview.clientWidth, imgPreview.clientHeight, 0, 0, width, height);
      DOMURL.revokeObjectURL(url);

      const imgURI = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');


      downloadImagesEvent(imgURI);
    };

    imgPreview.src = url;
  } else {
    console.log('should download SVG');
    //just download for svg with url blob
    downloadImagesEvent(url);
  }
}
