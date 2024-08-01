import { useRef } from 'react'

export const Move = ({ fill, stroke, refCallback }) => {
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
        <g fill='none' fillRule='evenodd' transform='translate(8 8)'>
          <path
            d='m9.97732426 4.98866213h.99773244v.99773243h-.99773244zm.99773244 5.98639457h-.99773244v-.99773244h.99773244zm-4.98866214-4.98866214h-.99773243v-.99773243h.99773243zm0 4.98866214h-.99773243v-.99773244h.99773243zm1.99546485-10.96208618-7.96689342 7.96988662 5.21015873 5.20916096 2.75673469 2.7567347 7.96589569-7.96689339z'
            fill={stroke}
          />
          <path
            d='m11.982 7.001v-1.825l2.551 2.803-2.552 2.802.001-1.804h-3.015v2.998h1.801l-2.799 2.57-2.8-2.571 1.823.001v-2.998h-3.002l.001 1.804-2.566-2.802 2.565-2.803v1.825h2.994v-3.011h-1.804l2.802-2.564 2.801 2.565-1.803-.001v3.011z'
            fill={fill}
          />
        </g>
      </svg>
      <span>Move</span>
    </article>
  )
}
