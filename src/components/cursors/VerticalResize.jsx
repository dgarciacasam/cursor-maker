import { useRef } from 'react'

export const VerticalResize = ({ fill, stroke, refCallback }) => {
  const svgRef = useRef()
  return (
    <article>
      <svg
        ref={(el) => {
          svgRef.current = el
          refCallback(el)
        }}
        height='32'
        viewBox='0 0 32 32'
        width='32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='none' transform='translate(10 8)'>
          <path
            d='m6 0-6 5.98h4v2.02 2h-4l6 6 6-6h-4v-2-2.02h4zm0 1.414 3.586 3.567h-2.586v2.52 3.499h2.586l-3.586 3.586-3.586-3.586h2.586v-3.499-2.52h-2.586z'
            fill={stroke}
          />
          <path
            d='m7 7.5v-2.52h2.586l-3.586-3.566-3.586 3.566h2.586v2.52 3.5h-2.586l3.586 3.586 3.586-3.586h-2.586z'
            fill={fill}
          />
        </g>
      </svg>
      <span>Vertical Resize</span>
    </article>
  )
}
