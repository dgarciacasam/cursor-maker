export const Handwriting = ({ fill, stroke }) => {
  return (
    <article>
      <svg
        width='32'
        height='32'
        viewBox='0 0 257 257'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_d_40_513)'>
          <path
            d='M178.744 27.3199L166.254 40.0169L59.801 147.964L58.7659 149.574L58.6965 149.668C57.6168 151.392 55.0952 155.71 51.2438 163.538C47.3617 171.429 42.5728 182.19 38.6618 194.521L28.3799 227L60.8587 216.718C73.2024 212.806 83.9555 208.016 91.8423 204.136C99.6668 200.287 103.951 197.789 105.713 196.684L105.804 196.613L107.414 195.578L228.06 76.6361L178.744 27.3199Z'
            fill={stroke}
          />
        </g>
        <path
          d='M177.297 47.7999L173.257 51.9071L70.7573 155.858L70.4224 156.371C69.7161 157.499 67.3348 161.514 63.7482 168.804C60.1617 176.094 55.7473 186.057 52.1858 197.286L48.8599 207.8L59.3733 204.474C70.6121 200.912 80.5659 196.497 87.8554 192.912C95.1449 189.326 99.1356 186.961 100.288 186.237L100.802 185.903L208.86 79.3624L177.297 47.7999ZM81.8955 160.836L95.8242 174.764L93.7929 176.773C93.8729 176.716 89.4668 179.369 82.8108 182.644C80.3628 183.848 76.691 185.187 73.2795 186.505L70.1545 183.38C71.4725 179.969 72.8115 176.298 74.0161 173.849C77.2914 167.192 79.9305 162.81 79.8867 162.867L81.8955 160.836Z'
          fill={fill}
        />
        <defs>
          <filter
            id='filter0_d_40_513'
            x='5.33988'
            y='17.0799'
            width='238.08'
            height='238.08'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dx='-3.84' dy='8.96' />
            <feGaussianBlur stdDeviation='9.6' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_40_513'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_40_513'
              result='shape'
            />
          </filter>
        </defs>
      </svg>

      <span>Hand Writing</span>
    </article>
  )
}
