// services/convertSVGToCur.js

export async function convertSVGToCur(svgContent, hotspotX, hotspotY) {
  // Crear un canvas y dibujar el SVG en él
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const img = new Image()

  return new Promise((resolve, reject) => {
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)

      // Extraer los datos de la imagen del canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

      // Crear un buffer para el archivo CUR
      const buffer = new ArrayBuffer(22 + canvas.width * canvas.height * 4)
      const view = new DataView(buffer)

      // Escribir el encabezado del archivo CUR
      view.setUint16(0, 0, true) // Reserved
      view.setUint16(2, 2, true) // Tipo de imagen (2 para CUR)
      view.setUint16(4, 1, true) // Número de imágenes

      // Escribir la entrada del directorio de la imagen
      view.setUint8(6, canvas.width) // Ancho de la imagen
      view.setUint8(7, canvas.height) // Alto de la imagen
      view.setUint8(8, 0) // Número de colores en la paleta
      view.setUint8(9, 0) // Reservado
      view.setUint16(10, hotspotX, true) // Hotspot X
      view.setUint16(12, hotspotY, true) // Hotspot Y
      view.setUint32(14, 22, true) // Tamaño de la imagen en bytes
      view.setUint32(18, 22, true) // Desplazamiento del archivo de la imagen

      // Escribir los datos de la imagen
      const imageDataOffset = 22
      for (let i = 0; i < imageData.data.length; i++) {
        view.setUint8(imageDataOffset + i, imageData.data[i])
      }

      // Crear un blob y resolver la promesa
      const curBlob = new Blob([view], { type: 'image/x-icon' })
      resolve(curBlob)
    }

    img.onerror = (err) => {
      reject(err)
    }

    // Cargar la imagen SVG en el objeto Image
    img.src = 'data:image/svg+xml;base64,' + btoa(svgContent)
  })
}
