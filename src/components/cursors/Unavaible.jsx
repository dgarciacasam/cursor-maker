export const Unavaible = ({ fill, stroke }) => {
  return (
    <article>
      <svg
        height='32'
        viewBox='0 0 32 32'
        width='32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <linearGradient id='notalloweda' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0' stop-color='#f0f0f0' />
          <stop offset='1' stop-color='#d5d5d5' />
        </linearGradient>
        <g fill={fill} fill-rule='evenodd' transform='translate(7)'>
          <path
            d='m1 23c0 4.97 4.03 9 9 9 4.97 0 9-4.03 9-9 0-4.971-4.03-9-9-9-4.97 0-9 4.029-9 9zm4.826-5.61c1.167-.869 2.608-1.39 4.174-1.39 3.866 0 7 3.134 7 7 0 1.567-.52 3.008-1.39 4.174zm-2.826 5.61c0-1.578.529-3.029 1.409-4.199l9.79 9.79c-1.171.881-2.622 1.409-4.199 1.409-3.866 0-7-3.134-7-7z'
            fill={stroke}
          />
          <path
            d='m0 16.422v-16.015l11.591 11.619h-7.041l-.151.124z'
            fill={stroke}
          />
          <path d='m1 2.814v11.188l2.969-2.866.16-.139h5.036z' fill={fill} />
        </g>
      </svg>
      <span>Unavaible</span>
    </article>
  )
}
