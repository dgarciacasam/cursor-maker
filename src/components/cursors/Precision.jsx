import { useRef } from 'react'

export const Precision = ({ fill, stroke, refCallback }) => {
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
        <g fill='none' transform='translate(9 9)'>
          <path
            d='m15 6h-6.01v-6h-2.98v6h-6.01v3h6.01v6h2.98v-6h6.01z'
            fill={stroke}
          />
          <path
            d='m13.99 7.01h-6v-6.01h-.98v6.01h-6v.98h6v6.01h.98v-6.01h6z'
            fill={fill}
          />
        </g>
      </svg>
      <span>Precision</span>
    </article>
  )
}
