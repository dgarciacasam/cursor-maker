import { useRef } from 'react'

export const DiagonalResize1 = ({ fill, stroke, refCallback }) => {
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
            d='m4.257 7.087 4.072 4.068-2.829 2.828 8.473-.013.013-8.47-2.841 2.842-4.075-4.068-1.414-1.415 2.844-2.842h-8.486v8.484l2.829-2.827z'
            fill={stroke}
          />
          <path
            d='m5.317 6.733 4.427 4.424-1.828 1.828 5.056-.016.014-5.054-1.842 1.841-4.428-4.422-2.474-2.475 1.844-1.843h-5.073v5.071l1.83-1.828z'
            fill={fill}
          />
        </g>
      </svg>
      <span>Diagonal Resize 1 </span>
    </article>
  )
}
