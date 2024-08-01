export const cursorNames = [
  'Normal.cur',
  'Help.cur',
  'Working.ani',
  'Busy.ani',
  'Precision.cur',
  'Text.cur',
  'Handwriting.cur',
  'Unavailable.cur',
  'Vertical Resize.cur',
  'Horizontal Resize.cur',
  'Diagonal Resize 1.cur',
  'Diagonal Resize 2.cur',
  'Move.cur',
  'Alternate.cur',
  'Link.cur',
  'Person.cur',
  'Pan.cur',
]

export const pngToIco = (images, hotspotX = 0, hotspotY = 0) => {
  let icoHead = [
      //.ico header
      0,
      0, // Reserved. Must always be 0 (2 bytes)
      2,
      0, // Specifies image type: 1 for icon (.ICO) image, 2 for cursor (.CUR) image. Other values are invalid. (2 bytes)
      images.length & 255,
      (images.length >> 8) & 255, // Specifies number of images in the file. (2 bytes)
    ],
    icoBody = [],
    pngBody = []

  for (let i = 0, num, pngHead, pngData, offset = 0; i < images.length; i++) {
    pngData = Array.from(images[i])
    pngHead = [
      //image directory (16 bytes)
      32, // Width 0-255, should be 0 if 256 pixels (1 byte)
      32, // Height 0-255, should be 0 if 256 pixels (1 byte)
      0, // Color count, should be 0 if more than 256 colors (1 byte)
      0, // Reserved, should be 0 (1 byte)
      hotspotX & 255,
      (hotspotX >> 8) & 255, // X hotspot when in .CUR format (2 bytes)
      hotspotY & 255,
      (hotspotY >> 8) & 255, // Y hotspot when in .CUR format (2 bytes)
    ]
    num = pngData.length
    for (let j = 0; j < 4; j++) pngHead[pngHead.length] = (num >> (8 * j)) & 255 // Size of the bitmap data in bytes (4 bytes)

    num = icoHead.length + (pngHead.length + 4) * images.length + offset
    for (let j = 0; j < 4; j++) pngHead[pngHead.length] = (num >> (8 * j)) & 255 // Offset in the file (4 bytes)

    offset += pngData.length
    icoBody = icoBody.concat(pngHead) // combine image directory
    pngBody = pngBody.concat(pngData) // combine actual image data
  }
  return icoHead.concat(icoBody, pngBody)
}

export const convertSvgToPng = (svgElement) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const svgData = new XMLSerializer().serializeToString(svgElement)
    canvas.width = 32
    canvas.height = 32

    const img = new Image()
    img.onload = function () {
      ctx.drawImage(img, 0, 0)
      canvas.toBlob((blob) => {
        const reader = new FileReader()
        reader.onload = function (event) {
          resolve(new Uint8Array(event.target.result))
        }
        reader.readAsArrayBuffer(blob)
      }, 'image/png')
    }
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
  })
}

export const convertPngToCur = (pngArrayBuffer, hotspotX = 0, hotspotY = 0) => {
  const images = [pngArrayBuffer]
  const icoData = pngToIco(images, hotspotX, hotspotY)
  return new Blob([new Uint8Array(icoData)], { type: 'image/x-icon' })
}
