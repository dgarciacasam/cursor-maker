import { HexColorPicker } from 'react-colorful'

export const ColorPicker = ({ label, color, setColor }) => {
  return (
    <>
      <label>{label}</label>
      <HexColorPicker
        color={color}
        onChange={setColor}
        className='colorPickerContainer'
      />
    </>
  )
}
