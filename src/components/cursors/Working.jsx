import { useRef } from 'react'

export const Working = ({ fill, stroke, refCallback }) => {
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
        <linearGradient id='busya' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0' stopColor='#4ab4ef' />
          <stop offset='1' stopColor='#3582e5' />
        </linearGradient>
        <linearGradient id='busyb' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0' stopColor='#3481e4' />
          <stop offset='1' stopColor='#2051db' />
        </linearGradient>
        <linearGradient id='busyc' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0' stopColor='#6bdcfc' />
          <stop offset='1' stopColor='#4dc6fa' />
        </linearGradient>
        <linearGradient id='busyd' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0' stopColor='#4bc5f9' />
          <stop offset='1' stopColor='#2fb0f8' />
        </linearGradient>
        <mask id='busye' fill='#fff'>
          <path
            d='m1 23c0 4.971 4.03 9 9 9 4.97 0 9-4.029 9-9 0-4.971-4.03-9-9-9-4.97 0-9 4.029-9 9z'
            fill='#fff'
            fillRule='evenodd'
          />
        </mask>
        <g fill='none' fillRule='evenodd' transform='translate(7)'>
          <g mask='url(#busye)'>
            <g transform='translate(1 14)'>
              <path d='m0 0h9v9h-9z' fill='url(#busya)' />
              <path d='m9 9h9v9h-9z' fill='url(#busyb)' />
              <path d='m9 0h9v9h-9z' fill='url(#busyc)' />
              <path d='m0 9h9v9h-9z' fill='url(#busyd)' />
            </g>
          </g>
          <g fillRule='nonzero'>
            <path
              d='m0 16.422v-16.015l11.591 11.619h-7.041l-.151.124z'
              fill={stroke}
            />
            <path d='m1 2.814v11.188l2.969-2.866.16-.139h5.036z' fill={fill} />
          </g>
        </g>
      </svg>
      <span>Working</span>
    </article>
  )
}
