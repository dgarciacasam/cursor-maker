import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import { cursorNames, convertSvgToPng, convertPngToCur } from './utils'

export const downloadService = async (svg) => {
  const svgElement = svg
  const pngArrayBuffer = await convertSvgToPng(svgElement)

  const curBlob = convertPngToCur(pngArrayBuffer, 16, 16)
  const curDataUrl = URL.createObjectURL(curBlob)
  const curLink = document.createElement('a')
  curLink.href = curDataUrl
  curLink.download = 'cursor.cur'
  document.body.appendChild(curLink)
  curLink.click()
  document.body.removeChild(curLink)
}

export const downloadCursorPack = async (svgRef) => {
  const zip = new JSZip()
  const folder = zip.folder('cursors')

  const installFileContentResponse = await fetch('./Install.inf')
  const fileText = await installFileContentResponse.text()
  folder.file('Install.inf', fileText)

  const normalCurIndex = [0, 2, 7, 14, 15, 16]

  for (const index in svgRef.current) {
    const pngArrayBuffer = await convertSvgToPng(svgRef.current[index])
    let hotspotX = 16
    let hotspotY = 16

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
