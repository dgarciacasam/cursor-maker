import './App.css'
import { dgarcia } from './services/dgarciacasam'

import { useState, useRef, useCallback } from 'react'
import { ColorPicker } from './components/ColorPicker'

import { Cursors } from './components/Cursors'
import { Header } from './components/Header'

import { downloadCursorPack as handleDownload } from './services/downloadService'
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

  return (
    <>
      <Header />
      <main>
        <section className='mt-12'>
          <div className='flex justify-center items-center gap-12'>
            <ColorPicker label='Fill' color={fill} setColor={setFill} />
            <div>
              <button
                onClick={() => {
                  handleDownload(svgRef)
                }}
                className='pressable-button text-2xl font-medium bg-white text-black'
              >
                Download pack
              </button>
            </div>
            <ColorPicker label='Stroke' color={stroke} setColor={setStroke} />
          </div>
        </section>
        <Cursors
          fill={fill}
          stroke={stroke}
          refCallback={refCallback}
          svgRef={svgRef}
        />
        <footer className='text-center mt-10 mb-4'>
          <p>☆ DANIEL GARCÍA CASAMAYOR - 2024 ☆</p>
        </footer>
      </main>
    </>
  )
}

export default App
