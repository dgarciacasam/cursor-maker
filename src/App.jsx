import './App.css'
import { useState, useEffect, useRef, useCallback } from 'react'
import { ColorPicker } from './components/ColorPicker'

import { Normal } from './components/cursors/Normal'
import { Alternate } from './components/cursors/Alternate'
import { DiagonalResize1 } from './components/cursors/DiagonalResize1'
import { DiagonalResize2 } from './components/cursors/DiagonalResize2'
import { Handwriting } from './components/cursors/Handwriting'
import { Help } from './components/cursors/Help'
import { HorizontalResize } from './components/cursors/HorizontalResize'
import { Link } from './components/cursors/Link'
import { Move } from './components/cursors/Move'
import { Person } from './components/cursors/Person'
import { Precision } from './components/cursors/Precision'
import { Text } from './components/cursors/Text'
import { Unavaible } from './components/cursors/Unavaible'
import { VerticalResize } from './components/cursors/VerticalResize'
import { Working } from './components/cursors/Working'
import { Busy } from './components/cursors/Busy'
import { Location } from './components/cursors/Location'

function App() {
  const [fill, setFill] = useState('#000')
  const [stroke, setStroke] = useState('#fff')

  const svgRef = useRef([])

  const refCallback = useCallback((el) => {
    if (el && !svgRef.current.includes(el)) {
      svgRef.current.push(el)
    }
  }, [])

  const pngToIco = (images) => {
    let icoHead = [
        //.ico header
        0,
        0, // Reserved. Must always be 0 (2 bytes)
        1,
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
        0, // Width 0-255, should be 0 if 256 pixels (1 byte)
        0, // Height 0-255, should be 0 if 256 pixels (1 byte)
        0, // Color count, should be 0 if more than 256 colors (1 byte)
        0, // Reserved, should be 0 (1 byte)
        8,
        0, // Color planes when in .ICO format, should be 0 or 1, or the X hotspot when in .CUR format (2 bytes)
        8,
        0, // Bits per pixel when in .ICO format, or the Y hotspot when in .CUR format (2 bytes)
      ]
      num = pngData.length
      for (let i = 0; i < 4; i++)
        pngHead[pngHead.length] = (num >> (8 * i)) & 255 // Size of the bitmap data in bytes (4 bytes)

      num = icoHead.length + (pngHead.length + 4) * images.length + offset
      for (let i = 0; i < 4; i++)
        pngHead[pngHead.length] = (num >> (8 * i)) & 255 // Offset in the file (4 bytes)

      offset += pngData.length
      icoBody = icoBody.concat(pngHead) // combine image directory
      pngBody = pngBody.concat(pngData) // combine actual image data
    }
    return icoHead.concat(icoBody, pngBody)
  }

  const convertSvgToPng = (svgElement) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const svgData = new XMLSerializer().serializeToString(svgElement)
      canvas.width = 32
      canvas.height = 32

      const img = new Image()
      img.onload = function () {
        ctx.drawImage(img, 0, 0)
        resolve(canvas.toDataURL('image/png'))
      }
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
    })
  }

  const convertPngToCur = (pngDataUrl) => {
    return new Promise((resolve) => {
      fetch(pngDataUrl)
        .then((response) => response.arrayBuffer())
        .then((buffer) => {
          const images = [new Uint8Array(buffer)]
          const icoData = pngToIco(images)
          const blob = new Blob([new Uint8Array(icoData)], {
            type: 'image/x-icon',
          })
          const curDataUrl = URL.createObjectURL(blob)
          resolve(curDataUrl)
        })
    })
  }

  const handleDownload = async () => {
    const svgElement = svgRef.current[0]
    const pngDataUrl = await convertSvgToPng(svgElement)

    // Download PNG
    const pngLink = document.createElement('a')
    pngLink.href = pngDataUrl
    pngLink.download = 'image.png'
    document.body.appendChild(pngLink)
    pngLink.click()
    document.body.removeChild(pngLink)

    // Convert PNG to CUR and download
    const curDataUrl = await convertPngToCur(pngDataUrl)
    const curLink = document.createElement('a')
    curLink.href = curDataUrl
    curLink.download = 'image.cur'
    document.body.appendChild(curLink)
    curLink.click()
    document.body.removeChild(curLink)
  }

  return (
    <>
      <header>
        <h1 className='texto-degradado'>
          CURSOR MAKER <span>for windows</span>
        </h1>
      </header>
      <main>
        <section>
          <div className='selectors'>
            <div>
              <ColorPicker label='Fill' color={fill} setColor={setFill} />
            </div>
            <div>
              <button
                className='downloadButton'
                onClick={() => {
                  handleDownload()
                }}
              >
                DOWNLOAD <img src='./heart.svg' alt='Heart Pixel Icon' />
              </button>
            </div>
            <div>
              <ColorPicker label='Stroke' color={stroke} setColor={setStroke} />
            </div>
          </div>
        </section>
        <section className='cursors'>
          <Normal fill={fill} stroke={stroke} refCallback={refCallback} />
          <Help fill={fill} stroke={stroke} refCallback={refCallback} />
          <Working fill={fill} stroke={stroke} refCallback={refCallback} />
          <Busy fill={fill} stroke={stroke} refCallback={refCallback} />
          <Precision fill={fill} stroke={stroke} refCallback={refCallback} />

          <Text fill={fill} stroke={stroke} refCallback={refCallback} />
          <Handwriting fill={fill} stroke={stroke} refCallback={refCallback} />
          <Unavaible fill={fill} stroke={stroke} refCallback={refCallback} />
          <VerticalResize
            fill={fill}
            stroke={stroke}
            refCallback={refCallback}
          />
          <HorizontalResize
            fill={fill}
            stroke={stroke}
            refCallback={refCallback}
          />

          <DiagonalResize1
            fill={fill}
            stroke={stroke}
            refCallback={refCallback}
          />
          <DiagonalResize2
            fill={fill}
            stroke={stroke}
            refCallback={refCallback}
          />
          <Move fill={fill} stroke={stroke} refCallback={refCallback} />
          <Alternate fill={fill} stroke={stroke} refCallback={refCallback} />
          <Link fill={fill} stroke={stroke} refCallback={refCallback} />

          <Person fill={fill} stroke={stroke} refCallback={refCallback} />
          <Location fill={fill} stroke={stroke} refCallback={refCallback} />
        </section>
      </main>
    </>
  )
}

export default App
