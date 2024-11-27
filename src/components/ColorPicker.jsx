import { HexColorPicker } from 'react-colorful'

export const ColorPicker = ({ label, color, setColor }) => {
  const validateHexColor = (e) => {
    const value = e.target.value
    const hexPattern = /^#([A-Fa-f0-9]{0,6}|[A-Fa-f0-9]{0,3})$/

    if (value === '' || hexPattern.test(value)) {
      setColor(value)
    }
  }

  return (
    <div className='w-72 h-72'>
      <span className='text-2xl my-3'>{label}</span>
      <HexColorPicker color={color} onChange={setColor} className='mt-2' />
      <input
        className='mt-2 p-2 rounded-lg w-full text-xl tracking-wider bg-[#121212] text-white'
        type='text'
        value={color}
        onChange={validateHexColor}
      />
    </div>
  )
}
