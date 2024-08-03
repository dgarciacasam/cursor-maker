import './App.css'

import { useState, useRef, useCallback } from 'react'
import { ColorPicker } from './components/ColorPicker'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'

import { Cursors } from './components/Cursors'
import { Header } from './components/Header'

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

  //Pasar a otro archivo
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
  }

  const handleDownloadOne = async (svg) => {
    const svgElement = svg.current
    console.log(svgElement)
    const pngArrayBuffer = await convertSvgToPng(svgElement)

    // Convert PNG to CUR and download
    const curDataUrl = convertPngToCur(pngArrayBuffer, 16, 16)
    const curLink = document.createElement('a')
    curLink.href = curDataUrl
    curLink.download = 'image.cur'
    document.body.appendChild(curLink)
    curLink.click()
    document.body.removeChild(curLink)
  }
  return (
    <>
      <Header />
      <main>
        <section className='mt-6'>
          <div className='flex justify-center items-center gap-12'>
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
        <Cursors fill={fill} stroke={stroke} refCallback={refCallback} />
      </main>
    </>
  )
}

export default App
