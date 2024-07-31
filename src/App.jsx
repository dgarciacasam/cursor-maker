import './App.css'
import { useState } from 'react'
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

  return (
    <>
      <header>
        <h1 className='texto-degradado'>CURSOR MAKER</h1>
      </header>
      <main>
        <section className='selectors'>
          <div>
            <ColorPicker label='Fill' color={fill} setColor={setFill} />
          </div>
          <div>
            <ColorPicker label='Stroke' color={stroke} setColor={setStroke} />
          </div>
        </section>
        <section className='cursors'>
          <Normal fill={fill} stroke={stroke}></Normal>
          <Help fill={fill} stroke={stroke} />
          <Working fill={fill} stroke={stroke} />
          <Busy fill={fill} stroke={stroke} />
          <Precision fill={fill} stroke={stroke} />

          <Text fill={fill} stroke={stroke} />
          <Handwriting fill={fill} stroke={stroke} />
          <Unavaible fill={fill} stroke={stroke} />
          <VerticalResize fill={fill} stroke={stroke} />
          <HorizontalResize fill={fill} stroke={stroke} />

          <DiagonalResize1 fill={fill} stroke={stroke} />
          <DiagonalResize2 fill={fill} stroke={stroke} />
          <Move fill={fill} stroke={stroke} />
          <Alternate fill={fill} stroke={stroke} />
          <Link fill={fill} stroke={stroke} />
          <Person fill={fill} stroke={stroke} />
          <Location fill={fill} stroke={stroke} />
        </section>
      </main>
    </>
  )
}

export default App
