import { useRef } from 'react'

export const Normal = ({ fill, stroke, refCallback }) => {
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
      >
        <g fill='none' fillRule='evenodd' transform='translate(10 7)'>
          <path
            d='m6.148 18.473 1.863-1.003 1.615-.839-2.568-4.816h4.332l-11.379-11.408v16.015l3.316-3.221z'
            fill={stroke}
          />
          <path
            d='m6.431 17 1.765-.941-2.775-5.202h3.604l-8.025-8.043v11.188l2.53-2.442z'
            fill={fill}
          />
        </g>
      </svg>
      <span>Normal</span>
    </article>
  )
}
