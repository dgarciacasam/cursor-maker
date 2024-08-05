import './App.css'
import { dgarcia } from './services/dgarciacasam'

import { useState, useRef, useCallback } from 'react'
import { ColorPicker } from './components/ColorPicker'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'

import { Cursors } from './components/Cursors'
import { Header } from './components/Header'

import { cursorNames, convertSvgToPng, convertPngToCur } from './services/utils'
dgarcia()
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
  return (
    <>
      <Header />
      <main>
        <section className='mt-8'>
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
                DOWNLOAD PACK <img src='./heart.svg' alt='Heart Pixel Icon' />
              </button>
            </div>
            <div>
              <ColorPicker label='Stroke' color={stroke} setColor={setStroke} />
            </div>
          </div>
        </section>
        <Cursors
          fill={fill}
          stroke={stroke}
          refCallback={refCallback}
          svgRef={svgRef}
        />
        <footer className='text-center mt-8 mb-4'>
          <p>DANIEL GARCÍA CASAMAYOR - 2024</p>
        </footer>
      </main>
    </>
  )
}

export default App
