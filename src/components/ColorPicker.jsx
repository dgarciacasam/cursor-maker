import { HexColorPicker } from 'react-colorful'

export const ColorPicker = ({ label, color, setColor }) => {
  return (
    <div className='w-72 h-72'>
      <span className='text-2xl my-3'>{label}</span>
      <HexColorPicker color={color} onChange={setColor} className='mt-2' />
      <input
        className='mt-2 p-2 rounded-lg w-full text-xl tracking-wider'
        type='text'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  )
}
