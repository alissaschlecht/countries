
export default function createPNGFromSVGAndDownload(svgElement, imgName, fileType, color, width, height) {



// var svgData = $("#figureSvg")[0].outerHTML;
// var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// var svgUrl = URL.createObjectURL(svgBlob);
// var downloadLink = document.createElement("a");
// downloadLink.href = svgUrl;
// downloadLink.download = "newesttree.svg";
// document.body.appendChild(downloadLink);
// downloadLink.click();
// document.body.removeChild(downloadLink);
// // https://stackoverflow.com/questions/23218174/how-do-i-save-export-an-svg-file-after-creating-an-svg-with-d3-js-ie-safari-an

  //needed for both svg & png
  const data = (new XMLSerializer()).serializeToString(document.getElementById(svgElement).childNodes[0]);
  const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
  const DOMURL = window.URL || window.webkitURL || window;
  const url = DOMURL.createObjectURL(svgBlob);

  //download collected images
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

  if(fileType === 'PNG') {
    console.log('should download pngs');
    const canvas = document.createElement('canvas');
    const imgPreview = document.createElement('img');
    imgPreview.style = "position: absolute; top: -99999px";
    document.body.appendChild(imgPreview);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = url;
    img.style = "color: color";
    console.log(img);
    canvas.width = width;
    canvas.height = height;

    img.onload = function () {
      ctx.drawImage(img, 0, 0, imgPreview.clientWidth, imgPreview.clientHeight, 0, 0, width, height);
      DOMURL.revokeObjectURL(url);

      const imgURI = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');


      downloadImagesEvent(imgURI);
    };

    imgPreview.src = url;
  } else {
    console.log('should download svgs');
    downloadImagesEvent(url);
  }
}
