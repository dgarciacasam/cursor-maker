import './App.css'

import { useState, useRef, useCallback } from 'react'
import { ColorPicker } from './components/ColorPicker'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

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

import { cursorNames, convertSvgToPng, convertPngToCur } from './services/utils'

function App() {
  const [fill, setFill] = useState('#000')
  const [stroke, setStroke] = useState('#fff')

  const svgRef = useRef([])

  const refCallback = useCallback((el) => {
    if (el && !svgRef.current.includes(el)) {
      svgRef.current.push(el)
    }
  }, [])

  const handleDownload = async () => {
    const zip = new JSZip()
    const folder = zip.folder('cursors')

    const installFileContentResponse = await fetch('./Install.inf')
    const fileText = await installFileContentResponse.text()
    folder.file('Install.inf', fileText)

    const normalCurIndex = [0, 2, 7, 14, 15, 16]

    for (const index in svgRef.current) {
      const pngArrayBuffer = await convertSvgToPng(svgRef.current[index])
      let hotspotX = 16 // Ajusta esto según la necesidad
      let hotspotY = 16 // Ajusta esto según la necesidad

      if (normalCurIndex.includes(parseInt(index))) {
        hotspotX = 8
        hotspotY = 8
      }
      const curBlob = convertPngToCur(pngArrayBuffer, hotspotX, hotspotY)
      folder.file(cursorNames[index], curBlob)
    }

    const zipBlob = await zip.generateAsync({ type: 'blob' })
    saveAs(zipBlob, 'cursors.zip')

    /*const svgElement = svgRef.current[0]
    const pngDataUrl = await convertSvgToPng(svgElement)


    // Convert PNG to CUR and download
    const curDataUrl = await convertPngToCur(pngDataUrl)
    const curLink = document.createElement('a')
    curLink.href = curDataUrl
    curLink.download = 'image.cur'
    document.body.appendChild(curLink)
    curLink.click()
    document.body.removeChild(curLink)*/
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
