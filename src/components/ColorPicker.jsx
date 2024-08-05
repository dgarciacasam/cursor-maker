import { HexColorPicker } from 'react-colorful'

export const ColorPicker = ({ label, color, setColor }) => {
  return (
    <>
      <span className='text-2xl my-3'>{label}</span>
      <HexColorPicker
        color={color}
        onChange={setColor}
        className='colorPickerContainer'
      />
    </>
  )
}
